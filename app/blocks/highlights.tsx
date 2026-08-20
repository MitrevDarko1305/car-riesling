export default function Highlights() {
    const features = [
        {title: "Automotive Diversity", desc: "A wide range of makes and models to choose from."},
        {title: "Fast Test Drives", desc: "Test drive usually possible within 24 hours."},
        {title: "Flexible Financing", desc: "Attractive financing, leasing and insurance offers."},
        {title: "Trade-in Ready", desc: "Part-exchange,of your current vehicle possible."},
        {title: "Extended Warranty", desc: "Used car warranty available for up to 36 months"},
    ];

     return (
    <section className="bg-foreground pt-16 pb-20 px-2 md:px-16 lg:px-24">
      <div className="text-center md:mb-16 mb-12">
        <span className="text-accent font-medium tracking-wide capitalise text-sm">
          What We Offer
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-2">
          More than just a dealership
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-4 gap-1 text-center md:text-start">
        {features.map((f) => (
          <div
            key={f.title}
            className="bg-background border border-white/10  p-8 hover:border-light/18 transition-colors"
          >
            <h3 className="text-light text-lg font-extrabold mb-3">{f.title}</h3>
            <p className="text-light/50 md:text-md text-[14px]">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
