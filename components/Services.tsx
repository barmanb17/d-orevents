import Image from 'next/image'  // Import the Next.js Image component

export default function ServicesSection() {
  const services = [
    {
      title: "Wedding Decor",
      description: "From initial design to flawless execution, we bring your vision to life!",
      image: "/s1.png",
    },
    {
      title: "Catering",  // Corrected spelling
      description: "Make your wedding day unforgettable with a culinary experience that lasts a lifetime.",
      image: "/s2.jpg",
    },
    {
      title: "Venue Consultation",
      description: "Receive professional guidance to choose the ideal venue for your special day.",
      image: "/s9.png",  // Fixed missing leading slash
    },
    {
      title: "Customised Package",
      description: "Our exclusive offerings for extravagant, luxury weddings that make a statement.",
      image: "/s8.png",  // Fixed missing leading slash
    },
  ];

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <p className="text-lg text-muted-foreground mb-4">
          Convenient packages & reliable pricing
        </p>
        <h2 className="text-4xl md:text-5xl font-medium">
          Services we offer
        </h2>
      </div>

      <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {services.map((service) => (
          <div
            key={service.title}  // Using service title as a unique key
            className="rounded-xl mx-8 lg:mx-0 bg-gray-100 p-3 flex flex-col items-center text-center"
          >
            <div className="w-full aspect-square mb-6 rounded-xl overflow-hidden">
              <Image
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover "
                width={500}  // You can adjust the width and height as needed
                height={500} // Ensuring aspect ratio and optimization
              />
            </div>
            <h3 className="text-2xl font-medium mb-3">{service.title}</h3>
            <p className="text-muted-foreground">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
