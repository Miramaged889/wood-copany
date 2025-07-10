

const Partners = () => {
  const partners = [
    {
      id: 1,
      name: "شريك استراتيجي",
      logo: "/images/partners/one.png",
    },
    {
      id: 2,
      name: "شريك استراتيجي",
      logo: "/images/partners/two.png",
    },
    {
      id: 3,
      name: "شريك استراتيجي",
      logo: "/images/partners/three.png",
    },
    {
      id: 4,
      name: "شريك استراتيجي",
      logo: "/images/partners/four.webp",
    },
    {
      id: 5,
      name: "شريك استراتيجي",
      logo: "/images/partners/five.jpg",
    },
    {
      id: 6,
      name: "شريك استراتيجي",
      logo: "/images/partners/six.jpg",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-[#F5F2EC]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-[#2E2E2E] mb-6 relative inline-block">
            شركاؤنا
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#C49E55]"></div>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-8">
            نفتخر بشراكتنا مع نخبة من أفضل الشركات والمؤسسات في مجال صناعة
            الأخشاب
          </p>
        </div>

        {/* Partners Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 lg:gap-12">
            {partners.map((partner) => (
              <div
                key={partner.id}
                className="transform hover:scale-105 transition-all duration-300"
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-48 flex items-center justify-center group">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
