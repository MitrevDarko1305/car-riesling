"use client";

export default function ExpandingGallery() {
  const items = [
    {
      title: "Audi A6",
      description:
      "A refined executive sedan that blends understated luxury with confident performance. The A6 offers a spacious, tech-forward cabin, smooth ride quality, and Audi's signature quattro all-wheel drive for year-round confidence. Ideal for buyers who want premium comfort without unnecessary flash — well-suited for both daily commuting and longer autobahn drives.",
      src: "Gallery-Images/Gallery-1.jpg",
      position: "object-center",
    },
    {
      title: "Luxury Interior",
      description:
        "Fully-equipped luxury interior - leather upholstery, heated and ventilated seats.premium sound system, ambient lighting, and the latest infotainment tech.",
      src: "Gallery-Images/Gallery-3.jpg",
      position: "object-right",
    },
    {
      title: "Mercedes Benz G-Class",
      description:
        "Bold, boxy and unmistakably iconic - the G-Class delivers rugged off-road capability wrapped in serious luxury.A commanding presence on the road, A premium cabin inside and the kind of built quality that's kept this design legendary for decades.For buyers who want to stand out, without compromising on comfort.",
      src: "Gallery-Images/Gallery-6.jpg",
      position: "object-center",
    },
    {
      title: "Audi S4 Avant",
      description:
        "A performance wagon that doesn't compromise on practicality. Twin-turbo V6 Power, quattro all-wheel drive, and Audi's signature sport styling. - quad exhaust tips, red brake calipers and a purposeful stance.Built for drivers who want speed and space in one package. ",
      src: "Gallery-Images/Gallery-4.jpg",
      position: "object-center",
    },
    {
      title: "Volkswagen Golf GTI",
      description:
        "The hot hatch that started it all. Sharp handling, a punchy turbocharged engine, and the signature red grille stripe that's instantly recognizable. Practical enough for daily driving,quick enough to put a smile on your face every time you get behind the wheel.",
      src: "Gallery-Images/Gallery-7.jpg",
      position: "object-center",
    },
    {
      title: "Mercedes-AMG GT",
      description:
        "A pure sports coupe with serious presence,Handcrafted AMG power under a long, sculpted hood, agressive stance, and a design that turns heads before you've even started the engine.Built for drivers who want performance and drama in equal measure.",
      src: "Gallery-Images/Gallery-8.jpg",
      position: "object-center",
    },
  ];

  return (
    <section className="w-full pt-28 pb-24 max-w-7xl px-16">
      <h1 className="text-4xl text-light font-extrabold text-start">
        Our current inventory
      </h1>

      <p className="text-md text-light/50 text-start mt-2">
        A look at the vehicles currently on our lot - each one inspected,detailed, and ready for a test drive
      </p>

     <div className="flex items-center gap-2 h-[400px] w-full max-w-6xl mt-10 mx-auto">
      {items.slice(0, 3).map((item, i) => (
     <div
      key={i}
      className="relative group flex-grow transition-all w-56 h-[400px] duration-500 hover:w-full overflow-hidden"
      >
      <img
        src={item.src}
        alt={item.title}
        className={`h-full w-full object-cover ${item.position}`}
      />
      <div className="absolute inset-0 flex flex-col justify-end p-10 text-white bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300">
        <h2 className="text-3xl">{item.title}</h2>
        <p className="text-sm mt-1">{item.description}</p>
      </div>
    </div>
  ))}
</div>

   <div className="flex items-center gap-2 h-[400px] w-full max-w-6xl mt-2 mx-auto">
    {items.slice(3, 6).map((item, i) => (
    <div
      key={i}
      className="relative group flex-grow transition-all w-56 h-[400px] duration-500 hover:w-full overflow-hidden"
    >
      <img
        src={item.src}
        alt={item.title}
        className={`h-full w-full object-cover ${item.position}`}
      />
      <div className="absolute inset-0 flex flex-col justify-end p-10 text-white bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300">
        <h2 className="text-3xl">{item.title}</h2>
        <p className="text-sm mt-1">{item.description}</p>
      </div>
   </div>
   ))}
  </div>
    </section>
  );
}
