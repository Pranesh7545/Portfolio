import { motion } from "framer-motion";
import { Code2, Server } from "lucide-react";

export default function Services() {
  return (
    <section id="services" className="py-28 px-6 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <h2 className="text-4xl font-semibold text-slate-900 mb-2">
            Services
          </h2>
          <div className="mx-auto w-14 h-1 bg-cyan-500 rounded-full mb-4" />
          <p className="text-slate-600 text-lg">
            Core development capabilities
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-12">

          {/* Frontend */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
            className="group rounded-2xl border border-slate-200 p-10
                       transition-all duration-300
                       hover:border-cyan-300"
          >
            <div className="flex items-center gap-4 mb-8">
              <Code2 size={26} className="text-cyan-600" />
              <h3 className="text-2xl font-medium text-slate-900">
                Frontend Development
              </h3>
            </div>

            <ul className="space-y-4">
              {[
                "Reusable React components",
                "Responsive layouts with Tailwind CSS",
                "Client-side state management",
                "REST API integration",
                "UI interactions and animations",
                "Performance-oriented UI structure",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-slate-700
                             group-hover:text-slate-900 transition"
                >
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-500" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Backend */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
            className="group rounded-2xl border border-slate-200 p-10
                       transition-all duration-300
                       hover:border-cyan-300"
          >
            <div className="flex items-center gap-4 mb-8">
              <Server size={26} className="text-cyan-600" />
              <h3 className="text-2xl font-medium text-slate-900">
                Backend Development
              </h3>
            </div>

            <ul className="space-y-4">
              {[
                "RESTful API development",
                "JWT-based authentication",
                "Role-based access control",
                "Business logic implementation",
                "Database integration",
                "Validation and error handling",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-slate-700
                             group-hover:text-slate-900 transition"
                >
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-500" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
