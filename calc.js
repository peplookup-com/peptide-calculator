/* Pure calculation functions (no DOM). Usable in browser and Node. MIT License, PepLookup. */
(function (root) {
  function isPos(n) { return typeof n === 'number' && isFinite(n) && n > 0; }

  /** Concentration after reconstitution. Returns null for invalid input. */
  function reconstitution(mg, ml) {
    if (!isPos(mg) || !isPos(ml)) return null;
    var mgPerMl = mg / ml;
    return {
      mgPerMl: mgPerMl,
      mcgPerTenthMl: mgPerMl * 100,      // 0.1 mL = mg/mL * 0.1 * 1000 mcg
      mcgPerUnit: mgPerMl * 10           // U-100: 1 unit = 0.01 mL → mg/mL * 0.01 * 1000
    };
  }

  /** Cost per mg for an order. Discount applies to product price, not shipping. */
  function pricePerMg(price, vialMg, qty, shipping, discountPct) {
    qty = qty == null ? 1 : qty; shipping = shipping || 0; discountPct = discountPct || 0;
    if (!isPos(price) || !isPos(vialMg) || !isPos(qty) || shipping < 0 || discountPct < 0 || discountPct > 100) return null;
    var product = price * qty * (1 - discountPct / 100);
    var total = product + shipping;
    var totalMg = vialMg * qty;
    return { total: total, totalMg: totalMg, perMg: total / totalMg };
  }

  var api = { reconstitution: reconstitution, pricePerMg: pricePerMg };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else root.PeptideCalc = api;
})(this);
