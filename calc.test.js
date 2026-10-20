// Run with: node calc.test.js
const assert = require('assert');
const { reconstitution, pricePerMg } = require('./calc.js');
const close = (a, b) => assert.ok(Math.abs(a - b) < 1e-9, `${a} != ${b}`);

let r = reconstitution(10, 2);
close(r.mgPerMl, 5); close(r.mcgPerTenthMl, 500); close(r.mcgPerUnit, 50);
r = reconstitution(5, 2);
close(r.mgPerMl, 2.5); close(r.mcgPerUnit, 25);
assert.strictEqual(reconstitution(0, 2), null);
assert.strictEqual(reconstitution(10, -1), null);

let p = pricePerMg(40, 5, 3, 15, 0);
close(p.total, 135); close(p.totalMg, 15); close(p.perMg, 9);
p = pricePerMg(100, 10, 1, 0, 10);
close(p.perMg, 9);
assert.strictEqual(pricePerMg(0, 5, 1, 0, 0), null);
assert.strictEqual(pricePerMg(10, 5, 1, 0, 120), null);
console.log('All tests passed');
