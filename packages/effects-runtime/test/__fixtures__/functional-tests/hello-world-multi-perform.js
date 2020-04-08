function main () {
  'use effects'
  try {
    return getMessage({
      population: 7700000000
    })
  } handle 'get_greeting' with (evt) {
    recall 'Hello'
  } handle 'get_audience' with (evt) {
    const { payload: population } = evt
    if (population > 7e7) recall 'world'
    else if (population > 1) recall 'friends'
    else if (population === 1) recall 'friend'
    else recall 'no one'
  }
}

function getMessage ({ population }) {
  const greeting = perform { type: 'get_greeting' }
  return `${greeting}, ${getAudience(population)}!`
}

function getAudience (population) {
  return perform { type: 'get_audience', payload: population }
}

module.exports.test = ({it, expect}) => {
  it('Should create hello-world from multiple-performs', async () => {
      const result = await main();
      expect(result).toBe('Hello, world!');
  });
};
