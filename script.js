(function () {
  var $ = function (id) { return document.getElementById(id); };
  var num = function (id) { var v = parseFloat($(id).value); return isNaN(v) ? NaN : v; };
  var fmt = function (n, d) { return Number(n).toLocaleString('en-US', { maximumFractionDigits: d, minimumFractionDigits: 0 }); };
  var money = function (n) { return '$' + Number(n).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }); };

  function updateRecon() {
    var r = PeptideCalc.reconstitution(num('r-mg'), num('r-ml'));
    var rows = '';
    if (!r) {
      $('r-mgml').textContent = $('r-01').textContent = $('r-unit').textContent = '–';
    } else {
      $('r-mgml').textContent = fmt(r.mgPerMl, 3);
      $('r-01').textContent = fmt(r.mcgPerTenthMl, 1);
      $('r-unit').textContent = fmt(r.mcgPerUnit, 2);
      [5, 10, 20, 25, 50, 100].forEach(function (u) {
        rows += '<tr><td>' + u + ' units</td><td>' + fmt(u / 100, 2) + ' mL</td><td>' + fmt(r.mcgPerUnit * u, 1) + ' mcg</td></tr>';
      });
    }
    $('r-table').innerHTML = rows || '<tr><td colspan="3">Enter positive values above.</td></tr>';
  }

  function updatePrice() {
    var p = PeptideCalc.pricePerMg(num('p-price'), num('p-mg'), num('p-qty'), num('p-ship') || 0, num('p-disc') || 0);
    $('p-ppm').textContent = p ? money(p.perMg) : '–';
    $('p-total').textContent = p ? money(p.total) : '–';
    $('p-totalmg').textContent = p ? fmt(p.totalMg, 2) : '–';
  }

  ['r-mg', 'r-ml'].forEach(function (id) { $(id).addEventListener('input', updateRecon); });
  ['p-price', 'p-mg', 'p-qty', 'p-ship', 'p-disc'].forEach(function (id) { $(id).addEventListener('input', updatePrice); });
  updateRecon(); updatePrice();
})();
