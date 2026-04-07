import Layout from "@/components/Layout";
import { MapPin, Bed, Bath, Square, Search, SlidersHorizontal } from "lucide-react";
import { useState } from "react";

const properties = [
  { title: "Sunrise Villa", location: "Whitefield, Bangalore", beds: 4, baths: 3, sqft: "3,200", price: "₹1.8 Cr", type: "Villa", img: "" },
  { title: "Palm Heights", location: "Noida Expressway", beds: 3, baths: 2, sqft: "2,100", price: "₹95 Lakh", type: "Apartment", img: "" },
  { title: "Royal Residency", location: "Jubilee Hills, Hyderabad", beds: 5, baths: 4, sqft: "4,500", price: "₹3.2 Cr", type: "Villa", img: "" },
  { title: "Green Meadows", location: "Sarjapur Road, Bangalore", beds: 3, baths: 2, sqft: "1,800", price: "₹72 Lakh", type: "Apartment", img: "" },
  { title: "Lakeview Towers", location: "Marine Drive, Mumbai", beds: 4, baths: 3, sqft: "2,800", price: "₹4.5 Cr", type: "Penthouse", img: "" },
  { title: "Heritage Homes", location: "Banjara Hills, Hyderabad", beds: 4, baths: 3, sqft: "3,600", price: "₹2.1 Cr", type: "Villa", img: "" },
];

const EstatePage = () => {
  const [filter, setFilter] = useState("All");
  const types = ["All", "Villa", "Apartment", "Penthouse"];
  const filtered = filter === "All" ? properties : properties.filter((p) => p.type === filter);

  return (
    <Layout>
      {/* Page Header */}
      <section className="bg-navy py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <p className="text-glow-blue font-semibold text-sm tracking-widest uppercase mb-3">Real Estate</p>
          <h1 className="font-display text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
            Premium Properties
          </h1>
          <p className="text-primary-foreground/60 max-w-2xl mx-auto text-lg">
            Discover handpicked premium properties across India's top cities.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-background py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-wrap items-center gap-4 mb-12">
            <SlidersHorizontal className="w-5 h-5 text-navy" />
            {types.map((t) => (
              <button
                key={t}
                onClick={() => setFilter(t)}
                className={`px-5 py-2 rounded-xl text-sm font-medium transition-all ${
                  filter === t ? "bg-navy text-primary-foreground" : "bg-surface-light text-foreground hover:bg-border"
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((p, i) => (
              <div key={i} className="bg-card rounded-2xl border border-border overflow-hidden hover-lift group cursor-pointer">
                <div className="aspect-[16/10] bg-surface-light flex items-center justify-center">
                  <Square className="w-12 h-12 text-navy/15" />
                </div>
                <div className="p-6">
                  <span className="text-glow-blue text-xs font-semibold uppercase tracking-wider">{p.type}</span>
                  <h3 className="font-display text-xl font-bold text-foreground mt-1 mb-2">{p.title}</h3>
                  <div className="flex items-center gap-1 text-body text-sm mb-4">
                    <MapPin className="w-3.5 h-3.5" /> {p.location}
                  </div>
                  <div className="flex items-center gap-4 text-body text-xs mb-4">
                    <span className="flex items-center gap-1"><Bed className="w-3.5 h-3.5" />{p.beds} Beds</span>
                    <span className="flex items-center gap-1"><Bath className="w-3.5 h-3.5" />{p.baths} Baths</span>
                    <span>{p.sqft} sq.ft</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="font-display text-xl font-bold text-navy">{p.price}</p>
                    <button className="text-glow-blue text-sm font-semibold hover:underline">View Details</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default EstatePage;
