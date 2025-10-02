export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-yellow-100 to-red-200">
      <h1 className="animate__animated animate__fadeInDown text-5xl font-extrabold text-red-700 mb-4">
        🍕 Pizza Pantry
      </h1>
      <p className="animate__animated animate__fadeInUp animate__delay-1s text-xl text-gray-700">
        Fresh, Hot & Delicious – Every Slice Counts!
      </p>
      <button className="animate__animated animate__pulse animate__infinite mt-8 px-6 py-3 bg-red-600 text-white rounded-xl shadow-lg hover:bg-red-700 transition">
        Order Now
      </button>
    </section>
  );
}
