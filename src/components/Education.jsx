import { motion } from "framer-motion";
import { GraduationCap, School, BookOpen } from "lucide-react";

const pipeline = [
  {
    title: "BE – Computer Science and Engineering",
    institute: "Knowledge Institute of Technology, Salem",
    period: "2021 – 2025",
    score: "CGPA: 7.7",
    icon: GraduationCap,
  },
  {
    title: "HSC",
    institute: "Erode Hindu Kalvi Nilayam",
    period: "2020 – 2021",
    score: "85%",
    icon: School,
  },
  {
    title: "SSLC",
    institute: "Erode Hindu Kalvi Nilayam",
    period: "2018 – 2019",
    score: "80%",
    icon: BookOpen,
  },
];

export default function Education() {
  return (
    <section id="education" className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-semibold mb-4 text-slate-900">
            Education 
          </h2>
         
        </motion.div>

        {/* Bent pipeline */}
        <div className="relative space-y-24">

          {pipeline.map((edu, index) => {
            const Icon = edu.icon;
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={edu.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
                className={`relative flex ${isLeft ? "justify-start" : "justify-end"}`}
              >
                {/* Card */}
                <div className="w-full md:w-[46%] rounded-xl border border-slate-200 bg-white p-6
                                transition-all duration-300 hover:border-cyan-300
                                hover:shadow-md hover:shadow-cyan-500/10">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="h-12 w-12 rounded-full border border-slate-300 flex items-center justify-center">
                      <Icon size={22} className="text-slate-600" />
                    </div>
                    <h3 className="font-semibold text-slate-900">
                      {edu.title}
                    </h3>
                  </div>

                  <p className="text-slate-600">
                    {edu.institute}
                  </p>

                  <div className="mt-3 text-sm text-slate-500">
                    <p>{edu.period}</p>
                    <p className="font-medium text-slate-700 mt-1">
                      {edu.score}
                    </p>
                  </div>
                </div>

                {/* Vertical pipe */}
                {index !== pipeline.length - 1 && (
                  <div className="absolute left-1/2 top-full h-24 w-px bg-slate-300 hidden md:block" />
                )}

                {/* Horizontal bend */}
                {index !== pipeline.length - 1 && (
                  <div
                    className={`absolute top-full hidden md:block h-px bg-slate-300
                      ${isLeft ? "left-[46%] w-[8%]" : "right-[46%] w-[8%]"}`}
                  />
                )}
              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
}
