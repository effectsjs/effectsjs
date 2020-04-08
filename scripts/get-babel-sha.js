const cp = require("child_process");
const res = cp.execSync("git ls-tree HEAD babel").toString();
// "160000 commit 3f7d0bed4bfb7627f88c8446cbb9b0f350c3a11a	babel"
console.log(res.split(/\s/)[2])
// echo ::set-env name=BABEL_SHA::$(node scripts/get-babel-sha.js)
