import { motion } from "framer-motion";
import profileImg from "../assets/profile.jpg";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0 },
};

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center px-6 md:px-8">
      <div className="max-w-6xl mx-auto w-full pt-28 md:pt-32 pb-20">
        <div className="grid lg:grid-cols-12 gap-10 items-center">

          {/* Left content */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="lg:col-span-7"
          >
            {/* Role */}
            <motion.p
              variants={item}
              transition={{ duration: 0.5 }}
              className="text-sm md:text-base text-slate-600"
            >
              Full Stack Developer Intern
              <span className="mx-2 text-slate-300">•</span>
              Building Scalable Web Applications
            </motion.p>

            {/* Name */}
            <motion.h1
              variants={item}
              transition={{ duration: 0.5 }}
              className="mt-5 text-5xl md:text-6xl font-semibold tracking-tight text-slate-900"
            >
              Pranesh D
            </motion.h1>

            {/* Tagline */}
            <motion.p
              variants={item}
              transition={{ duration: 0.5 }}
              className="mt-5 text-lg md:text-xl text-slate-700 leading-relaxed max-w-2xl"
            >
              I craft scalable web applications with clean UI, robust REST API
              integrations, and performance-focused architecture. Passionate
              about writing maintainable code and building real-world solutions.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={item}
              transition={{ duration: 0.5 }}
              className="mt-8 flex flex-col sm:flex-row gap-3"
            >
              <motion.a
                href="#projects"
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg 
                           bg-cyan-600 text-white font-semibold 
                           hover:bg-cyan-500 transition-colors"
              >
                View Projects
              </motion.a>

              <motion.a
                href="/PraneshResume.pdf"
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg 
                           border border-slate-300 text-slate-800 
                           hover:border-slate-400 hover:text-slate-900 
                           transition-colors bg-white"
              >
                View Resume
              </motion.a>
            </motion.div>

            {/* Tech Stack */}
            <motion.div
              variants={item}
              transition={{ duration: 0.5 }}
              className="mt-10 border-t border-slate-200 pt-6"
            >
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-600">
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.4 }}
                  className="text-slate-900 font-medium"
                >
                  Core:
                </motion.span>

                {[
                  "React",
                  "Node.js / Express",
                  "REST APIs",
                  "MySQL",
                  "JWT Auth",
                  "Power BI",
                ].map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right image */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <motion.div
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="w-full max-w-sm"
            >
              <div className="relative rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">
                <div className="aspect-[4/5] w-full overflow-hidden rounded-xl bg-slate-100">
                  <motion.img
                    src={profileImg}
                    alt="Pranesh portrait"
                    className="h-full w-full object-cover object-top"
                    loading="eager"
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                  <div className="h-full w-full flex items-center justify-center text-slate-500 text-sm">
                    Photo not found
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
