export default function VideoAndLocation() {
  return (
    <section className="bg-foreground pt-16 pb-16 px-2 md:px-16 lg:px-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="aspect-video  overflow-hidden">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/-1m3v-I1x-c?start=5"
            title="Car-Riesling"
            allowFullScreen
          />
        </div>
        <div className="text-center md:text-start">
          <h2 className="text-4xl md:text-4xl font-extrabold  text-light md: mb-6">
            Visit our showroom
          </h2>
          
          <p className="text-light/50 mb-2">70435 Stuttgart</p>
          <p className="text-light/50 md:mb-6 mb-2">Schwieberdinger Str 75</p>
          <p className="text-light/50">
            A brand-independent, family-run car dealership with over 20
            years of experience.
          </p>
          
        </div>
      </div>
    </section>
  );
}