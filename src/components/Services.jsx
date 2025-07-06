// src/components/Services.jsx

export default function Services() {
  const services = [
    {
      title: 'Anxiety & Stress Management',
      image: '/anexity.png',
      description:
        'Evidence-based techniques to help manage anxiety, build resilience, and reduce stress.',
    },
    {
      title: 'Relationship Counseling',
      image: '/relation.jpg',
      description:
        'Improve communication, reconnect emotionally, and navigate relationship challenges.',
    },
    {
      title: 'Trauma Recovery',
      image: '/trauma.jpg',
      description:
        'Heal from past trauma with support, mindfulness, and evidence-backed therapy approaches.',
    },
  ];

  return (
    <section className="bg-[#f3f5f7] py-16 px-6">
      <h2 className="text-3xl font-serif text-center text-[#3a5a77] mb-12">How I Help</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div key={index} className="bg-[#bce0e4] p-6 rounded-lg shadow-md border">
            <img src={service.image} alt={service.title} className="w-full h-48 object-cover rounded mb-4" />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{service.title}</h3>
            <p className="text-gray-700 text-sm">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
