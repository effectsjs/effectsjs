const fs = require('fs');

const logPurgeType = 'log_purge';

const LogPurgeEffect = () => ({type : logPurgeType});

const withLogPurgeHandler = (fn) => {
  try{
      fn();
  } handle(e){
    if(e.type === logPurgeType){
        fs.unlink(__dirname+'./log.txt', (err) => {
            if(err){
                recall new Error(`Failed to purge logs`);
            }

            recall null;
        })
    }
  }
};

module.exports = {
    LogPurgeEffect,
    withLogPurgeHandler
};