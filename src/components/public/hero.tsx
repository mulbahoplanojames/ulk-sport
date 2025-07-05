export default function Hero({
  label,
  description,
}: {
  label: string;
  description: string;
}) {
  return (
    <section className="bg-gradient-to-r from-yellow-400 via-blue-700 to-blue-800 text-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{label}</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
