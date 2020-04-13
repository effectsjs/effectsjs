const fetchSite = (uri) => new Promise((res, rej) => {
   const resources = {
       'thegoogle.com' : {uri, statusCode : 200, content : 'look for stuff', responseTime : 10},
       'thefacebook.com' : {uri, statusCode : 200, content : 'look at stuff', responseTime : 30},
       'thetumbler.com' : {uri, statusCode : 200, content : 'look like stuff', responseTime : 35},
       'thebing.com' : {uri, statusCode : 500, content : 'dog chewed the coord', responseTime : 50}
   };

   const result = resources[uri] || {uri, statusCode : 404, responseTime : 5};

   setTimeout(() => {
       if(result.statusCode === 500) rej(result);
       else res(result);
   }, result.responseTime);
});

const root = async () => {
  'use effects';
  try{
      return perform {type : 'morning_routine'};
  }handle 'morning_routine' with (e){
      const sites = await Promise.allSettled([
          fetchSite('thegoogle.com'),
          fetchSite('thefacebook.com'),
          fetchSite('thetumbler.com'),
          fetchSite('thebing.com'),
          fetchSite('thisdoesntexist.com'),
      ]);

      recall sites.map(({value, reason}) => (value || reason));
  }
};


module.exports.test = ({expect, it}) => {
    it(`Shouldn't bottleneck when performing concurrent behavior`, async () => {
        expect.assertions(1);
        const results = await Promise.all([
            root(),
            root(),
            root(),
            root(),
            root()
        ]);

        expect(results).toHaveLength(5);
    }, 70)
};