# Peptide Calculator

Free, open-source **reconstitution** and **price-per-mg** calculator for peptide researchers.

**▶ Live demo:** https://peplookup-com.github.io/peptide-calculator/
**▶ Full version with live supplier prices:** https://www.peplookup.com/tools/calculator

## Features
- **Reconstitution maths:** concentration in mg/mL, mcg per 0.1 mL and mcg per U-100 syringe unit, plus a units-to-mcg reference table
- **Price per mg:** compare vial sizes, multi-vial kits, shipping and discount codes fairly
- No tracking, no sign-up, no dependencies, works offline, dark mode

## How the maths works
- Concentration (mg/mL) = peptide in vial (mg) ÷ water added (mL)
- mcg per 0.1 mL = mg/mL × 100
- mcg per syringe unit (U-100, 1 unit = 0.01 mL) = mg/mL × 10
- Cost per mg = (price × vials × (1 − discount%) + shipping) ÷ (vial mg × vials)

## Use it
Open `index.html` in any browser, or use the live demo.

## Embed on your site
```html
<iframe src="https://peplookup-com.github.io/peptide-calculator/" width="100%" height="900" style="border:0" title="Peptide Calculator by PepLookup"></iframe>
<p>Peptide calculator by <a href="https://www.peplookup.com">PepLookup</a></p>
```

## Run the tests
```
node calc.test.js
```

## About
Built by [PepLookup](https://www.peplookup.com), which compares research peptide prices per mg across 90+ suppliers, with COAs and coupon codes.

*Research use only. Not medical advice. These calculations are maths conversions only, not dosing guidance.*

## License
[MIT](LICENSE)
