
interface Stat {
    value: string;
    label: string;
}


const STATS: Stat[] = [
    { value: "9+", label: "Jahre Erfahrung"},
    { value: "500+", label: "Verkaufte Fahrzeuge"},
]

export default function FounderSection() {
    return (
        <section className="bg-background relative px-6 pt-12 pb-20 lg:px-10">
            <div className="mx-auto grid max-w-5xl items-center sm:gap-12 gap-6 lg:grid-cols-2 lg:gap-20">

                 {/* Photo */}
               <div className="relative">
               {/* TODO: replace with a real photo of the founder */}
                <img
                 src="/Hero-Images/Founder.jpg"
                 alt="Gründer von Fair Cars Stuttgart"
                 className="h-[450px] w-full object-[center_20%]"
                />
               </div>

          <div className="pt-8 lg:pt-0">
            <span className="inline-block  px-4 py-1.5 text-[14px] font-semibold text-accent">
            About Us
           </span>
             <h2 className="mt-4 font-heading text-3xl font-extrabold leading-tight text-light sm:text-4xl">
               Personal, and local in Stuttgart
             </h2>

              <blockquote className="mt-6 border-l-4 border-primary pl-5 text-lg font-medium leading-relaxed text-light/50">
            {/* TODO: replace with a real quote from the founder */}
            "Every vehicle that i sell, I would also recommend to my own family <br /> Fair prices and honest advice - that's something you can count on with me."
          </blockquote>

           <p className="mt-6 text-light leading-relaxed text-lg font-semibold">
            {/* TODO: replace with real bio copy */}
           For over 9 years, Fair Cars Stuttgart has stood for trust and quality in vehicle sales, Every car is personally inspected before it joins our inventory - so you can rely on exactly what you see.
          </p>

           {/* TODO: swap for the founder's actual name */}
          <div className="mt-8 font-heading text-xl font-bold text-light">
            Roman
            <span className="mt-1 block text-sm font-normal text-light/60">
              Gründer, Car-Riesling Stuttgart
            </span>
          </div>


          </div>
        </div>
        </section>
       )
      }