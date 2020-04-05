const mutex = () => ({
  lockQueue: Promise.resolve(),
  lock() {
    let lockedResolver;

    const resolveWhenLocked = new Promise((res) => (lockedResolver = res));
    const onUnLock = () => new Promise((res) => lockedResolver(res));

    this.lockQueue = this.lockQueue.then(onUnLock);

    return resolveWhenLocked;
  },
  async commit(fn) {
    const unlock = await this.lock();

    return fn().finally(unlock);
  },
});

const database = {
  dataStore: {},
  mutex: mutex(),
  connect() {
    setTimeout(() => {
      this.dataStore = {};
    }, 2);
  },
  read(key, defaultValue = {}) {
    return new Promise((res) => {
      setTimeout(() => res(this.dataStore[key] || defaultValue), 2);
    });
  },
  write(key, value) {
    return new Promise((res) => {
      setTimeout(() => {
        this.dataStore[key] = value;
        res(true);
      }, 4);
    });
  },
  async update(collectionName, key, value) {
    return this.mutex.commit(async () => {
      const collection = await this.read(collectionName);
      collection[key] = value;
      return await this.write(collectionName, collection);
    });
  },
};

const EmployeeEffectType = Symbol();
const EmployeeEffect = ({ employeeId, employeeRank }) => ({
  type: EmployeeEffectType,
  key: employeeId,
  value: employeeRank,
});

const updateEmployeeDatabase = async (employeeId, employeeRank) => {
  "use effects";
  try {
    return perform EmployeeEffect({ employeeId, employeeRank });
  } handle EmployeeEffectType with ({ key, value }) {
    recall (await database.update("employee_store", key, value));
  }
};

const IncrementCounterEffectType = Symbol();
const IncrementCounterEffect = () => ({ type: IncrementCounterEffectType });

const incrementCounter = async () => {
  "use effects";
  try {
    return perform IncrementCounterEffect();
  } handle IncrementCounterEffectType with (e) {
    await database.mutex.commit(async () => {
      let count = await database.read("counter", 0);
      count += 1;
      await database.write("counter", count);
      recall count;
    });
  }
};

module.exports.test = ({ it, expect, code }) => {
  it("Should perform atomic updates on external lock-protected resources", async () => {
    await database.connect();
    const result = await Promise.all([
      updateEmployeeDatabase("001", "10"),
      updateEmployeeDatabase("002", "11"),
      updateEmployeeDatabase("003", "12"),
      updateEmployeeDatabase("004", "13"),
      updateEmployeeDatabase("005", "14"),
      updateEmployeeDatabase("002", "1"),
    ]);

    expect(result).toEqual([true, true, true, true, true, true]);
    await expect(database.read("employee_store")).resolves.toMatchObject({
      "001": "10",
      "002": "1",
      "003": "12",
      "004": "13",
      "005": "14",
    });
  });

  it("Should perform atomic updates on internal lock-protected resources", async () => {
    await database.connect();
    const result = await Promise.all(Array(10).fill(0).map(incrementCounter));

    const count = await database.read("counter");

    expect(count).toBe(10);
    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });
};
