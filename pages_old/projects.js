export default function Projects() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-6">Projects</h1>
      <p>We have successfully completed installations in residential buildings, offices, malls, and factories.</p>
      <div className="grid md:grid-cols-3 gap-6 mt-6">
        <div className="border rounded-lg p-4 shadow">🏢 Commercial Tower – Fire Alarm System</div>
        <div className="border rounded-lg p-4 shadow">🏭 Factory – Hydrant & Sprinkler System</div>
        <div className="border rounded-lg p-4 shadow">💻 Data Center – Novec 1230 Suppression</div>
      </div>
    </div>
  );
}
