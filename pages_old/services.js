export default function Services() {
  const services = [
    { name: "Fire Alarm Systems", desc: "Installation of panels, detectors, hooters." },
    { name: "Fire Suppression (CO₂, Novec)", desc: "Automatic suppression systems for server rooms & critical areas." },
    { name: "Sprinkler & Hydrant Systems", desc: "Complete water-based fire fighting solutions." },
    { name: "AMC & Maintenance", desc: "Annual contracts for hassle-free maintenance." },
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-6">Our Services</h1>
      <div className="grid md:grid-cols-2 gap-8">
        {services.map((s, i) => (
          <div key={i} className="p-6 border rounded-lg shadow">
            <h2 className="text-xl font-semibold">{s.name}</h2>
            <p className="mt-2 text-gray-600">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
