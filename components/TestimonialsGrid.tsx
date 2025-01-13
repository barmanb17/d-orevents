export default function TestimonialsGrid() {
  const testimonials = [
    {
      name: "Bidyut Borah",
      text: "The attention to detail was incredible. Every aspect of our wedding was handled with such care and professionalism.",
      image: "/t1.jpeg",
      size: "large",
    },
    {
      name: "Sarah Haloi",
      text: "They turned our vision into reality. The decor was exactly what we dreamed of!",
      image: "/t2.jpeg",
      size: "small",
    },
    {
      name: "James Wilson",
      text: "Professional, creative, and incredibly organized. They made our special day truly memorable.",
      image: "/t3.jpg",
      size: "medium",
    },
    {
      name: "Priya Patel",
      text: "The team went above and beyond our expectations. They were responsive and handled everything perfectly.",
      image: "/t4.jpeg",
      size: "small",
    },
    {
      name: "Michael Roberts",
      text: "From planning to execution, everything was flawless. Highly recommend their services!",
      image: "/t5.jpeg",
      size: "small",
    },
  ]

  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h3 className="text-lg text-muted-foreground mb-4">Testimonials</h3>
        <h2 className="text-4xl md:text-5xl font-medium">
          Words from{" "}
          <span className="italic font-serif">happy couples</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`relative group overflow-hidden rounded-3xl 
              ${
                testimonial.size === "large"
                  ? "lg:col-span-2 lg:row-span-2"
                  : testimonial.size === "medium"
                  ? "lg:col-span-1 lg:row-span-2"
                  : ""
              }`}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/0 group-hover:from-black/80 transition-all duration-300" />
            <img
              src={testimonial.image}
              alt={`${testimonial.name}'s testimonial`}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
              
              <p className="text-lg mb-4 line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
                {testimonial.text}
              </p>
              <p className="font-medium">{testimonial.name}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

