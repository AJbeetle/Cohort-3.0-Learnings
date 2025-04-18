const fs = require('fs');

console.log();
const s = fs.readFileSync("aj.txt","utf-8");

const l = s.trim().split(/\s+/);
console.log(l);
console.log(l.length);
