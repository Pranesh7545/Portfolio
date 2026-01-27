import { motion } from "framer-motion";

const projects = [
  {
    title: "Admin Panel System",
    desc: "Role-based dashboard with JWT authentication and CRUD features. Built with React and Node.js for seamless user management.",
    tech: ["React", "Node.js", "JWT", "MySQL"],
  },
  {
    title: "DMart Sales Dashboard",
    desc: "Interactive Power BI dashboard with advanced slicers and trend analysis for data-driven business insights.",
    tech: ["Power BI", "Data Visualization", "Analytics"],
  },
  {
    title: "Responsive Website",
    desc: "Modern, mobile-friendly multi-page website with smooth animations and optimized performance.",
    tech: ["HTML", "CSS", "JavaScript"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 md:px-8 bg-slate-50 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            A selection of projects showcasing my skills and experience
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative bg-white p-6 md:p-8 rounded-2xl border border-slate-200 hover:border-cyan-300 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10 overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-cyan-500/0 group-hover:from-cyan-500/5 group-hover:to-cyan-500/0 transition-all duration-300"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-3 text-slate-900 group-hover:text-cyan-700 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  {project.desc}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium bg-cyan-50 text-cyan-700 rounded-full border border-cyan-100"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center text-cyan-700 group-hover:text-cyan-800 transition-colors">
                  <span className="text-sm font-medium">View Project</span>
                  <svg
                    className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
  