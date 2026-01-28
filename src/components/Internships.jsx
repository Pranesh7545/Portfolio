import { motion } from "framer-motion";
import { Briefcase, Code, BarChart3, Laptop2, Laptop } from "lucide-react";

const internships = [
  {
    role: "Full Stack Developer Intern",
    company: "Tecsity",
    duration: "Sep 2025 – Present",
    description:
      "Worked on role-based admin panels, REST API development, and React integration following Agile practices.",
    icon: Code,
  },
  {
    role: "Web Development Intern",
    company: "Exposys Data Labs",
    duration: "Aug 2022 – Sep 2022",
    description:
      "Developed responsive multi-page websites using HTML and CSS with improved UI usability.",
    icon: Briefcase,
  },
  {
    role: "Junior Data Analyst Intern",
    company: "Nurture InfoTech",
    duration: "—",
    description:
      "Built interactive Power BI dashboards with charts, slicers, and filters for data-driven insights.",
    icon: BarChart3,
  },
];

export default function Internships() {
  return (
    <section id="internships" className="py-24 px-6 md:px-8 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, type: "spring" }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-2xl
             bg-gradient-to-br from-cyan-500 to-blue-600
             mb-5 shadow-lg shadow-cyan-500/25"
          >
            <Laptop2 size={32} className="text-white" />
          </motion.div>


          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4 text-slate-900">
            Internships
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Hands-on industry experience and real-world exposure
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {internships.map((intern, index) => {
            const Icon = intern.icon;

            return (
              <motion.div
                key={intern.role}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                className="group relative rounded-xl border border-slate-200 bg-white p-6
                           transition-all duration-300 hover:border-cyan-300
                           hover:shadow-md hover:shadow-cyan-500/10"
              >
                {/* Icon */}
                <div className="flex justify-center mb-4">
                  <Icon
                    size={36}
                    className="text-slate-600 group-hover:text-cyan-600 transition-colors"
                  />
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-center text-slate-900 group-hover:text-cyan-700 transition-colors">
                  {intern.role}
                </h3>

                <p className="text-center text-slate-600 mt-1">
                  {intern.company}
                </p>

                <p className="text-center text-sm text-slate-500 mt-1">
                  {intern.duration}
                </p>

                <p className="mt-4 text-sm text-slate-600 leading-relaxed text-center">
                  {intern.description}
                </p>

                {/* Soft hover overlay */}
                <div className="pointer-events-none absolute inset-0 rounded-xl
                                bg-cyan-500/0 group-hover:bg-cyan-500/5
                                transition-colors duration-300" />
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
