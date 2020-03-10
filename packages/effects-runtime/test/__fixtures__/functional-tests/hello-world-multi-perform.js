function main () {
  'use effects'
  try {
    return getMessage({
      numberOfPersons: 7700000000
    })
  } handle 'get_greeting' with (evt) {
    recall 'Hello'
  } handle 'get_audience' with ({ payload: { numberOfPersons } }) {
    if (numberOfPersons > 7e7) recall 'world'
    else if (numberOfPersons > 1) recall 'friends'
    else if (numberOfPersons === 1) recall 'friend'
    else recall 'no one'
  }
}

function getMessage ({ numberOfPersons }) {
  const greeting = perform { type: 'get_greeting' }
  return `${greeting}, ${getAudience({ numberOfPersons })}!`
}

function getAudience ({ numberOfPersons }) {
  perform { type: 'get_audience', payload: numberOfPersons }
}

module.exports.test = ({it, expect}) => {
  it('Should create hello-world from multiple-performs', async () => {
      const result = await main();
      expect(result).toBe('Hello, world!');
  });
};
