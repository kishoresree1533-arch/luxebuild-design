import Layout from "@/components/Layout";
import { ArrowUpRight, MapPin } from "lucide-react";
import { useState } from "react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";
import project6 from "@/assets/project-6.jpg";

const allProjects = [
  { img: project1, title: "Marina Bay Complex", location: "Downtown, Bangalore", category: "Residential" },
  { img: project2, title: "Palm Villa Residence", location: "Whitefield, Bangalore", category: "Villa" },
  { img: project3, title: "Skyline Apartments", location: "Noida, Delhi NCR", category: "Residential" },
  { img: project4, title: "Heritage Townhomes", location: "Jubilee Hills, Hyderabad", category: "Villa" },
  { img: project5, title: "Royal Interior Suite", location: "Bandra, Mumbai", category: "Interiors" },
  { img: project6, title: "Meridian Tower", location: "Gurgaon, Delhi NCR", category: "Commercial" },
];

const ProjectsPage = () => {
  const [filter, setFilter] = useState("All");
  const categories = ["All", "Residential", "Villa", "Commercial", "Interiors"];
  const filtered = filter === "All" ? allProjects : allProjects.filter((p) => p.category === filter);

  return (
    <Layout>
      <section className="bg-navy py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <p className="text-glow-blue font-semibold text-sm tracking-widest uppercase mb-3">Portfolio</p>
          <h1 className="font-display text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">Our Projects</h1>
          <p className="text-primary-foreground/60 max-w-2xl mx-auto text-lg">
            A showcase of craftsmanship, innovation, and timeless design.
          </p>
        </div>
      </section>

      <section className="bg-background py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`px-5 py-2 rounded-xl text-sm font-medium transition-all ${
                  filter === c ? "bg-navy text-primary-foreground" : "bg-surface-light text-foreground hover:bg-border"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p, i) => (
              <div key={i} className="group relative rounded-2xl overflow-hidden aspect-[4/3] cursor-pointer">
                <img src={p.img} alt={p.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/70 transition-all duration-500 flex items-end p-6">
                  <div className="opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-400">
                    <span className="text-glow-blue text-xs font-semibold uppercase tracking-wider">{p.category}</span>
                    <div className="flex items-center gap-2 mt-1">
                      <h3 className="font-display text-xl font-bold text-primary-foreground">{p.title}</h3>
                      <ArrowUpRight className="w-5 h-5 text-primary-foreground/60" />
                    </div>
                    <div className="flex items-center gap-1 text-primary-foreground/50 text-sm mt-1">
                      <MapPin className="w-3.5 h-3.5" /> {p.location}
                    </div>
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

export default ProjectsPage;
