export default function Features() {
  const features = [
    {
      id: "01",
      title: "Multi-Sector Expertise",
      desc: "At 3ABH, we operate across Agriculture, Real Estate, and Support Services, delivering integrated solutions tailored to diverse needs.",
    },
    {
      id: "02",
      title: "Sustainable Value Creation",
      desc: "We are committed to building long-term value that supports economic growth while promoting sustainability across all our operations.",
    },
    {
      id: "03",
      title: "Empowering Growth",
      desc: "Through innovation and strategic execution, we empower individuals and businesses to grow, scale, and achieve lasting success.",
    },
    {
      id: "04",
      title: "Improving Quality of Life",
      desc: "Our solutions are designed to enhance everyday living by addressing real-world challenges in food security, housing, and essential services.",
    },
    {
      id: "05",
      title: "Community-Centered Development",
      desc: "We actively contribute to the sustainable development of communities by fostering inclusive progress and long-term social impact.",
    },
  ];

  return (
    <section className="px-8 md:px-20 py-16 bg-white">
      
      {/* Section Title */}
      <h2 className="text-3xl font-bold text-gray-600 mb-8 text-center md:text-left">
        What We Do
      </h2>

      <div className="space-y-8">
        {features.map((item) => (
          <div key={item.id} className="flex gap-6 items-start">
            <div className="bg-orange-500 text-white font-bold rounded-full w-10 h-10 flex items-center justify-center shrink-0">
              {item.id}
            </div>

            <div>
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
