export default function AboutSection() {
  return (
    <section id="about" className="bg-black pt-8 pb-20 sm:pt-20 sm:pb-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold text-accent">
            Our Story
          </p>

          <h2 className="mt-3 text-4xl font-extrabold  tracking-tight text-neutral-950 dark:text-neutral-50 sm:text-5xl">
            About Us
          </h2>

          <p className="mt-5 text-lg leading-relaxed text-light/50">
            We are a passionate team dedicated to helping you find the right car - combining honest advice, careful sourcing, and a personal touch that makes buying a car feel simple, not stressful.
          </p>
        </div>

        {/* Main Content */}
        <div className="mt-14  border border-light/10 bg-background p-8 shadow-sm  sm:p-12">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            {/* Text */}
            <div>
              <h3 className="text-2xl font-extrabold tracking-tight text-neutral-950 dark:text-neutral-50">
                Who We Are
              </h3>

              <div className="mt-6 space-y-4 text-light/50">
                <p className="text-lg leading-relaxed">
                 At Car-Riesling, we bellieve every car is more than just a vehicle.
                 - It is the key to fulfill your dreams.Our mission is to make car ownership simple, reliable, and enjoyable for everyone.
                 With certified used cars, fair pricing, and complete transparency.We ensure that every customer drives away with confidence.
                 Our experienced team is dedicated to proving top-quality services.
                </p>

                <p className="text-lg leading-relaxed">
                  From vehicle selection to after-sales support. <span className="text-light font-extrabold"> Whether you are searching for your first car or upgrading to your dream model. </span> We are here to make  your journey smooth, safe, and full of trust.
                </p>
              </div>

              {/* Stats */}
              <div className="mt-10 grid grid-cols-2 gap-6">
                {[
                  { value: "80", label: "Cars Sold" },
                  { value: "60+", label: "Happy Clients" },
                  { value: "15", label: "Years Experience" },
                  { value: "5", label: "Team Members" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className=" border border-light/10  bg-light/2 p-5 text-center"
                  >
                    <div className="text-3xl font-semibold text-light/50">
                      {stat.value}
                    </div>
                    <div className="mt-1 text-sm text-light/50 font-extrabold">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Image Placeholder */}
            <div className="overflow-hidden  bg-black">
                 <img src="/Hero-Images/about-1.jpg"/>
            </div>
            {/* If you want a real image later, replace the block above with:
                <img src="/about.jpg" alt="..." className="h-96 w-full object-cover" />
            */}
          </div>
        </div>
      </div>
    </section>
  );
}