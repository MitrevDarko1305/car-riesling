export default function FinancingPartners() {
  const banks = [
    "Santander BANK", "BANK 11", "Autowunsch", "DSL BANK",
    "PSD Bank", "Allgemeine Beamten Bank", "SWK Bank",
    "ADAC BANK", "NOVIDUS BANK", "AUXMONEY", "ING DIBA",
  ];

  return (
    <section className="bg-background py-20 px-6 md:px-16 lg:px-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-light mb-4">
          Financing partners
        </h2>
        <p className="text-light/50 text-sm">
          Wide range of financing options to help you find your dream car.
        </p>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
        {banks.map((bank) => (
          <span
            key={bank}
            className="text-light/50 hover:text-light transition-colors text-sm"
          >
            {bank}
          </span>
        ))}
      </div>
    </section>
  );
}