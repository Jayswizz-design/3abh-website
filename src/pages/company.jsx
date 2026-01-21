export default function Company() {
  return (
    <section className="px-8 md:px-20 py-20 bg-white">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Company</h1>

      <div className="space-y-4 text-gray-700 text-lg">
        <p className="font-semibold text-gray-900">3ABH Company</p>
        <p>12A Road 2, Housing Estate Rumuibekwe, Port Harcourt, Rivers, Nigeria</p>
        <p><span className="font-semibold">Phone:</span> +234 8177 338 887</p>
        <p>
          <span className="font-semibold">Email:</span>{" "}
          <a href="mailto:King.abhulimen@gmail.com" className="text-orange-500 hover:underline">
            Kings.abhulimen@gmail.com
          </a>
        </p>
        <p><span className="font-semibold">Hours:</span> Mon – Fri: 9:00am to 6:00pm</p>
      </div>
    </section>
  );
}