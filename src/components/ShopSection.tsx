"use client";

import { useState } from "react";
import Image from "next/image";
import { ShoppingCart, Eye } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Miuyses X1 Pro",
    price: "$1,299",
    image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=500&h=400&fit=crop",
    specs: "4K LCD, 3D Ready, 32GB RAM",
  },
  {
    id: 2,
    name: "Miuyses 3D Studio",
    price: "$1,899",
    image: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?w=500&h=400&fit=crop",
    specs: "120Hz 3D Display, RTX 5080",
  },
  {
    id: 3,
    name: "Miuyses Air",
    price: "$999",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=500&h=400&fit=crop",
    specs: "Ultra HD, 16GB RAM, 1TB SSD",
  },
  {
    id: 4,
    name: "Miuyses Flex",
    price: "$1,599",
    image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=500&h=400&fit=crop",
    specs: "360° Hinge, 3D Pen Support",
  },
];

const ShopSection = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="shop" className="py-24 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Shop the Collection
          </h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            Experience 3D like never before. Choose your perfect laptop.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group perspective-1000"
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div
                className={`relative w-full h-96 transition-all duration-500 transform-style-3d ${
                  hoveredId === product.id ? "rotate-y-180" : ""
                }`}
              >
                {/* Front of card */}
                <div className="absolute w-full h-full backface-hidden rounded-2xl overflow-hidden bg-slate-800/50 backdrop-blur-sm border border-slate-700 shadow-xl">
                  <div className="relative h-48 w-full">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-bold text-white">{product.name}</h3>
                    <p className="text-cyan-400 text-2xl font-bold mt-2">{product.price}</p>
                    <button className="mt-4 w-full py-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg text-white font-medium flex items-center justify-center gap-2 hover:scale-105 transition">
                      <ShoppingCart size={18} /> Buy Now
                    </button>
                  </div>
                </div>

                {/* Back of card */}
                <div className="absolute w-full h-full backface-hidden rotate-y-180 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-cyan-500/30 p-6 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{product.name}</h3>
                    <p className="text-slate-300 text-sm mb-4">{product.specs}</p>
                    <ul className="space-y-2 text-slate-400 text-sm">
                      <li>✓ 3D Glasses-free Display</li>
                      <li>✓ AI Accelerator Chip</li>
                      <li>✓ Up to 15h Battery</li>
                      <li>✓ Thunderbolt 5 ports</li>
                    </ul>
                  </div>
                  <button className="mt-6 w-full py-2 border border-cyan-400 rounded-lg text-cyan-400 font-medium flex items-center justify-center gap-2 hover:bg-cyan-400/10 transition">
                    <Eye size={18} /> View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="px-8 py-3 border border-cyan-500/50 rounded-full text-cyan-400 hover:bg-cyan-500/10 transition">
            View All Products →
          </button>
        </div>
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </section>
  );
};

export default ShopSection;