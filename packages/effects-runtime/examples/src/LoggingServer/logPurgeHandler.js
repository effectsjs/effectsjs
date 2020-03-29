const fs = require('fs');
const path = require('path');
const logPurgeType = 'log_purge';

const LogPurgeEffect = () => ({type : logPurgeType});

const withLogPurgeHandler = (fn) => {
  try{
      return fn();
  } handle logPurgeType with(e){
    fs.unlink(path.resolve(__dirname, 'log.txt'), (err) => {
        if(err){
            recall err;
        }

        recall null;
    });
  }
};

module.exports = {
    LogPurgeEffect,
    withLogPurgeHandler
};