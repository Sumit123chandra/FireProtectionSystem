export default function Products() {
  const products = [
    "Fire Alarm Panels",
    "Smoke & Heat Detectors",
    "Hooters & Manual Call Points",
    "CO₂ & Novec Cylinders",
    "Sprinklers & Hydrant Accessories",
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-6">Products</h1>
      <ul className="list-disc pl-6 space-y-2">
        {products.map((p, i) => <li key={i}>{p}</li>)}
      </ul>
    </div>
  );
}
