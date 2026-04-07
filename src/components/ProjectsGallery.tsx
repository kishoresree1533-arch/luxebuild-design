import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";
import project6 from "@/assets/project-6.jpg";
import { ArrowUpRight } from "lucide-react";

const projects = [
  { img: project1, title: "Marina Bay Complex", category: "Commercial" },
  { img: project2, title: "Palm Villa Residence", category: "Residential" },
  { img: project3, title: "Skyline Apartments", category: "Multi-Family" },
  { img: project4, title: "Heritage Townhomes", category: "Townhomes" },
  { img: project5, title: "Royal Interior Suite", category: "Interior" },
  { img: project6, title: "Meridian Tower", category: "Commercial" },
];

const ProjectsGallery = () => (
  <section id="projects" className="bg-foreground py-24">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="text-center mb-16">
        <p className="text-glow-blue font-semibold text-sm tracking-widest uppercase mb-3">Portfolio</p>
        <h2 className="font-display text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
          Our Signature Projects
        </h2>
        <p className="text-primary-foreground/50 max-w-2xl mx-auto">
          A showcase of craftsmanship, innovation, and timeless design.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((p, i) => (
          <div
            key={i}
            className="group relative rounded-xl overflow-hidden aspect-[4/3] cursor-pointer"
          >
            <img
              src={p.img}
              alt={p.title}
              loading="lazy"
              width={768}
              height={512}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/70 transition-all duration-400 flex items-end p-6">
              <div className="opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                <p className="text-glow-blue text-xs font-semibold uppercase tracking-wider mb-1">{p.category}</p>
                <div className="flex items-center gap-2">
                  <h3 className="font-display text-xl font-bold text-primary-foreground">{p.title}</h3>
                  <ArrowUpRight className="w-5 h-5 text-primary-foreground/60" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsGallery;
