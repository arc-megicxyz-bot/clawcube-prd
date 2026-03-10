import { products } from "@/lib/products";

export default function ComparisonTable() {
  // Collect all unique spec labels across products
  const allLabels = Array.from(
    new Set(products.flatMap((p) => p.specs.map((s) => s.label)))
  );

  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full min-w-[640px] border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-white/10">
            <th className="px-4 py-4 text-sm font-semibold text-gray-400">
              Spec
            </th>
            {products.map((product) => (
              <th
                key={product.slug}
                className="px-4 py-4 text-sm font-semibold text-white"
              >
                <div className="flex items-center gap-2">
                  {product.name}
                  {product.badge === "Most Popular" && (
                    <span className="rounded-full bg-[#3b82f6] px-2.5 py-0.5 text-xs font-medium text-white">
                      Most Popular
                    </span>
                  )}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {allLabels.map((label, i) => (
            <tr
              key={label}
              className={`border-b border-white/5 ${
                i % 2 === 0 ? "bg-white/[0.02]" : ""
              }`}
            >
              <td className="px-4 py-3 font-medium text-gray-400">{label}</td>
              {products.map((product) => {
                const spec = product.specs.find((s) => s.label === label);
                return (
                  <td
                    key={product.slug}
                    className="px-4 py-3 text-gray-300"
                  >
                    {spec?.value ?? "\u2014"}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
