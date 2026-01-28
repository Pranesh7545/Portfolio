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
    <section id="education" className="py-24 px-6 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-100/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 mb-6 shadow-lg shadow-cyan-500/25"
          >
            <GraduationCap className="text-white" size={32} />
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent">
            Education
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            My academic journey and qualifications
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Central vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-500 hidden md:block -translate-x-1/2"></div>

          {pipeline.map((edu, index) => {
            const Icon = edu.icon;
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={edu.title}
                initial={{ opacity: 0, x: isLeft ? -50 : 50, y: 20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 100,
                  damping: 15
                }}
                className={`relative flex ${isLeft ? "md:justify-start" : "md:justify-end"} justify-center mb-12 md:mb-16`}
              >
                {/* Timeline dot - center */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.15 + 0.3 }}
                  className="absolute left-1/2 top-8 -translate-x-1/2 w-6 h-6 rounded-full bg-white border-4 border-cyan-500 shadow-lg shadow-cyan-500/30 z-10 hidden md:block"
                >
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-0 rounded-full bg-cyan-500/20"
                  ></motion.div>
                </motion.div>

                {/* Connecting line from dot to card */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.15 + 0.4 }}
                  className={`absolute top-8 h-0.5 bg-gradient-to-r ${
                    isLeft 
                      ? "left-1/2 origin-left from-cyan-500 to-transparent" 
                      : "right-1/2 origin-right from-transparent to-cyan-500"
                  } hidden md:block`}
                  style={{ width: "calc(4% + 12px)" }}
                ></motion.div>

                {/* Card */}
                <motion.div
                  whileHover={{ 
                    y: -8, 
                    scale: 1.02,
                    boxShadow: "0 20px 40px rgba(6, 182, 212, 0.15)"
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="w-full md:w-[46%] group"
                >
                  <div className="relative rounded-2xl border-2 border-slate-200 bg-white p-6 
                                  transition-all duration-300 hover:border-cyan-400
                                  shadow-md hover:shadow-xl overflow-hidden">
                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-50/0 to-blue-50/0 
                                    group-hover:from-cyan-50/50 group-hover:to-blue-50/30 
                                    transition-all duration-300 pointer-events-none"></div>
                    
                    {/* Content */}
                    <div className="relative z-10">
                      {/* Icon and title */}
                      <div className="flex items-start gap-4 mb-4">
                        <motion.div
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                          className="h-14 w-14 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 
                                     flex items-center justify-center flex-shrink-0 shadow-lg shadow-cyan-500/25
                                     group-hover:shadow-xl group-hover:shadow-cyan-500/30 transition-shadow"
                        >
                          <Icon size={24} className="text-white" />
                        </motion.div>
                        
                        <div className="flex-1">
                          <h3 className="font-bold text-lg text-slate-900 mb-1 group-hover:text-cyan-600 transition-colors">
                            {edu.title}
                          </h3>
                          <p className="text-slate-600 text-sm leading-relaxed">
                            {edu.institute}
                          </p>
                        </div>
                      </div>

                      {/* Divider */}
                      <div className="h-px bg-gradient-to-r from-slate-200 via-slate-300 to-slate-200 my-4"></div>

                      {/* Period and score */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm text-slate-500">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          <span>{edu.period}</span>
                        </div>
                        
                        <div className="px-3 py-1.5 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 
                                        border border-cyan-500/20 group-hover:border-cyan-500/40 transition-colors">
                          <span className="text-sm font-semibold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                            {edu.score}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Corner accent */}
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-cyan-400/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                </motion.div>

                {/* Year badge on mobile */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 + 0.2 }}
                  className="absolute -top-3 left-1/2 -translate-x-1/2 md:hidden 
                             px-3 py-1 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 
                             text-white text-xs font-semibold shadow-lg"
                >
                  {edu.period.split('–')[0].trim()}
                </motion.div>
              </motion.div>
            );
          })}

          {/* Bottom fade effect */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-12 bg-gradient-to-b from-purple-500 to-transparent hidden md:block"></div>
        </div>

        {/* Download transcript button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
         
        </motion.div>
      </div>
    </section>
  );
}