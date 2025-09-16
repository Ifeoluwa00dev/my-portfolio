import { useState } from "react";
import { ExternalLink, List } from "lucide-react";
import navautomobile from "../assets/images/screencapture-narautomobiles-netlify-app-2025-08-13-20_00_35.png";
import rosby from "../assets/images/screencapture-rosby-ecommerce-netlify-app-2025-09-15-21_30_57.png";
import VA from "../assets/images/screencapture-adeleganmercyportfolio-netlify-app-2025-08-13-18_14_06.png";
import otunba from "../assets/images/screencapture-otunbaphotography-netlify-app-2025-08-13-17_57_10.png";
import ladame from "../assets/images/screencapture-ladameshotit-netlify-app-2025-09-16-05_21_00.png";


// Projects Component
const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Redesign",
      category: "business",
      image: rosby,
      description:
        "Complete redesign of an e-commerce platform focusing on user experience and conversion optimization.",
      technologies: ["React", "Tailwind CSS", "Firebase", "Cloudinary", "Firestore"],
      features: [
        "Search functionality",
        "Responsive design (mobile/tablet/desktop)",
        "Advanced filtering system",
        "Checkout Functionality",
        "Customer reviews and ratings",
        "Cloudinary for image hosting (image URLs in Firestore)",
      ],
      links: [
        { href: "https://rosby-ecommerce.netlify.app/", label: "View Live", external: true },
      ],
    },
    {
      id: 2,
      title: "NAR Automobile",
      category: "business",
      image: navautomobile,
      description: "Responsive car-booking website for all car services.",
      technologies: ["React", "Unsplash API", "JavaScript", "Tailwind CSS", "EmailJS"],
      features: [
        "Finance dashboard",
        "Images from Unsplash",
        "Car booking form",
        "Car details/specifications page",
        "Customer remarks",
        "Responsive UI/UX design",
      ],
      links: [
        { href: "https://narautomobiles.netlify.app/", label: "View Live", external: true },
      ],
    },
    {
      id: 3,
      title: "Virtual Assistant Portfolio",
      category: "portfolio",
      image: VA,
      description:
        "Conversion-focused portfolio for a Virtual Assistant with services, packages, testimonials, and a contact funnel.",
      technologies: ["React", "Vite", "Firebase", "Tailwind CSS", "EmailJS"],
      features: ["Responsive UI/UX", "Lead capture form", "Service details & FAQs", "Contact Form "],
      links: [
        { href: "https://adeleganmercyportfolio.netlify.app/", label: "View Live", external: true },
      ],
    },
    {
      id: 4,
      title: "Photographer Portfolio",
      category: "portfolio",
      image: otunba,
      description: "Responsive portfolio website for a photographer.",
      technologies: ["React", "Vite", "Firebase", "Tailwind CSS"],
      features: ["Gallery display", "Subtle animations", "Contact form", "About the photographer"],
      links: [{ href: "https://your-photo-portfolio.netlify.app/", label: "View Live", external: true }],
    },
    {
      id: 5,
      title: "Portfolio of a Mobile Photographer",
      category: "portfolio",
      image: ladame,
      description: "High-converting portfolio page with tested design elements.",
      technologies: ["HTML", "CSS", "JavaScript", "Tailwind CSS"],
      features: ["Interactive showcases", "Scroll animations", "Testimonials carousel", "Strong CTAs"],
      links: [{ href: "https://your-landing.netlify.app/", label: "View Live", external: true }],
    },
  ];

  // Build category tabs dynamically from your data
  const categories = ["all", ...Array.from(new Set(projects.map((p) => p.category)))];

  const [activeTab, setActiveTab] = useState("all");

  const filteredProjects =
    activeTab === "all" ? projects : projects.filter((p) => p.category === activeTab);

  const labelFor = (cat) =>
    cat === "all"
      ? "All Projects"
      : cat === "portfolios"
      ? "Portfolios"
      : cat.charAt(0).toUpperCase() + cat.slice(1);

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6">My Projects</h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Here's a selection of my recent work. Each project represents a unique challenge and solution.
        </p>

        {/* Category Tabs */}
        <div className="flex justify-center flex-wrap gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-4 py-2 rounded-full ${
                activeTab === cat
                  ? "bg-indigo-600 text-white"
                  : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-100"
              }`}
            >
              {labelFor(cat)}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover object-top"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>

                {/* Technology Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-indigo-100 text-indigo-800 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Features */}
                <div className="mb-4">
                  <h4 className="text-lg font-semibold flex items-center mb-2">
                    <List size={18} className="mr-2 text-indigo-600" /> Key Features
                  </h4>
                  <ul className="pl-6 list-disc text-gray-700">
                    {project.features.map((feature, i) => (
                      <li key={i} className="mb-1">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Links */}
                <div className="flex flex-wrap gap-4">
                  {project.links?.map((link, i) => (
                    <a
                      key={link.href || i}
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      className="inline-flex items-center text-indigo-600 font-medium hover:text-indigo-800 transition-colors mt-2"
                    >
                      {link.label ?? "View Details"}
                      <ExternalLink size={16} className="ml-1" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
