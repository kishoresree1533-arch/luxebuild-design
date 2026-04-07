import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";
import project6 from "@/assets/project-6.jpg";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  { img: project1, title: "Marina Bay Complex", location: "Bangalore" },
  { img: project2, title: "Palm Villa Residence", location: "Hyderabad" },
  { img: project3, title: "Skyline Apartments", location: "Delhi NCR" },
  { img: project4, title: "Heritage Townhomes", location: "Mumbai" },
  { img: project5, title: "Royal Interior Suite", location: "Chennai" },
  { img: project6, title: "Meridian Tower", location: "Pune" },
];

const ProjectsGallery = () => (
  <section className="bg-foreground py-24">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="text-center mb-16">
        <p className="text-glow-blue font-semibold text-sm tracking-widest uppercase mb-3">Portfolio</p>
        <h2 className="font-display text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
          Our Signature Projects
        </h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((p, i) => (
          <div key={i} className="group relative rounded-2xl overflow-hidden aspect-[4/3] cursor-pointer">
            <img src={p.img} alt={p.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/70 transition-all duration-500 flex items-end p-6">
              <div className="opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-400">
                <p className="text-primary-foreground/60 text-xs font-medium mb-1">{p.location}</p>
                <div className="flex items-center gap-2">
                  <h3 className="font-display text-xl font-bold text-primary-foreground">{p.title}</h3>
                  <ArrowUpRight className="w-5 h-5 text-primary-foreground/60" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link to="/projects" className="inline-flex items-center gap-2 text-primary-foreground font-semibold text-sm hover:gap-3 transition-all border border-primary-foreground/20 px-8 py-3 rounded-xl hover:bg-primary-foreground/5">
          View All Projects <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  </section>
);

export default ProjectsGallery;
