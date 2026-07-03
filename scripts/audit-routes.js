const http = require('http');

const routes = [
  '/',
  '/about',
  '/careers',
  '/careers/ai-engineer',
  '/careers/clinical-director',
  '/careers/fintech-lead',
  '/careers/robotics-engineer',
  '/careers/fmcg-marketing',
  '/careers/ecommerce-product',
  '/careers/quant-trader',
  '/careers/cloud-architect',
  '/careers/supply-chain-lead',
  '/careers/retail-analytics',
  '/hire-talent',
  '/contact',
  '/industries/bfsi',
  '/industries/healthcare',
  '/industries/it-tech',
  '/industries/manufacturing',
  '/industries/retail',
  '/industries/fmcg',
  '/industries/automobile',
  '/industries/aviation',
  '/industries/construction',
  '/industries/education',
  '/industries/engineering',
  '/industries/logistics',
  '/industries/media',
  '/industries/oil-gas',
  '/industries/telecom',
  '/industries/travel',
  '/services/executive-search',
  '/services/permanent-staffing',
  '/services/contract-staffing',
  '/services/campus-hiring',
  '/services/hr-consulting',
  '/services/payroll-solutions',
  '/insights',
  '/insights/scaling-tech-teams',
  '/insights/executive-compensation',
  '/insights/future-of-work',
];

let results = { ok: [], fail: [] };
let pending = routes.length;

routes.forEach(path => {
  const req = http.get(`http://localhost:3000${path}`, { timeout: 8000 }, (res) => {
    const status = res.statusCode;
    if (status === 200 || status === 304) {
      results.ok.push(`  ✅ ${status}  ${path}`);
    } else {
      results.fail.push(`  ❌ ${status}  ${path}`);
    }
    res.resume();
    if (--pending === 0) done();
  });
  req.on('error', (e) => {
    results.fail.push(`  ❌ ERR  ${path} — ${e.message}`);
    if (--pending === 0) done();
  });
  req.on('timeout', () => {
    req.destroy();
    results.fail.push(`  ❌ TIMEOUT  ${path}`);
    if (--pending === 0) done();
  });
});

function done() {
  console.log('\n=== ROUTE AUDIT RESULTS ===\n');
  console.log(`✅ PASSING (${results.ok.length}):`);
  results.ok.sort().forEach(l => console.log(l));
  if (results.fail.length) {
    console.log(`\n❌ FAILING (${results.fail.length}):`);
    results.fail.sort().forEach(l => console.log(l));
  } else {
    console.log('\n🎉 All routes passing!');
  }
  console.log(`\nTotal: ${routes.length} routes checked`);
}
