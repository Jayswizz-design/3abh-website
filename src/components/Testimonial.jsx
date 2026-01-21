import heroImage from "../assets/avatar-ali.png";
import heroImage1 from "../assets/avatar-anisha.png";
import heroImage2 from "../assets/avatar-richard.png";


export default function Testimonials() {
  const testimonials = [
    {
      name: "Aisha Usman",
      quote: "3ABH has supercharged our company’s workflow. The visibility keeps everyone motivated.",
      image: heroImage
    },
    {
      name: "Raheema Bello",
      quote: "We’ve been able to cancel so many other subscriptions since using 3ABH. Everyone is more focused.",
      image: heroImage1
    },
    {
      name: "Achraf Sadeen",
      quote: "3ABH allows us to provide structure and process. Keeps us organized and focused.",
      image: heroImage2
    },
  ];

  return (
    <section className="py-20 bg-gray-50 px-8 md:px-20 text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-12">
        Testimonials
      </h2>

  <div className="grid md:grid-cols-3 gap-6 mb-8">
        {testimonials.map((t) => (
          <div
            key={t.name}
            className="bg-white shadow-md p-6 rounded-xl text-center"
          >
            {/* User Image */}
            <img
              src={t.image}
              alt={t.name}
              className="w-16 h-16 mx-auto rounded-full object-cover mb-4"
            />

            {/* Name */}
            <h3 className="font-bold mb-2">{t.name}</h3>

            {/* Quote */}
            <p className="text-gray-600 text-sm">“{t.quote}”</p>
          </div>
        ))}
      </div>

      <button className="bg-orange-500 text-white py-3 px-8 rounded-full font-bold hover:bg-orange-600 cursor-pointer">
        Get Started
      </button>
    </section>
  );
}
