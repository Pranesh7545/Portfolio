import { motion } from "framer-motion";
import { Award, CheckCircle, ExternalLink, Calendar } from "lucide-react";

const certifications = [
  {
    title: "Full Stack Development",
    issuer: "Tecsity",
    date: "2025",
    skills: ["React.js", "Node.js", "REST APIs", "MySQL", "JWT Authentication"],
    color: "from-blue-500 to-cyan-500",
    
  },
  {
    title: "Power BI and SQL",
    issuer: "Nurture InfoTech",
    date: "2024",
    skills: ["Power BI", "Data Visualization", "SQL", "Data Analysis", "Dashboard Design"],
    color: "from-purple-500 to-pink-500",
    
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 px-6 md:px-8 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-96 h-96 bg-yellow-100/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-100/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-500 to-orange-600 mb-6 shadow-lg shadow-yellow-500/25"
          >
            <Award className="text-white" size={32} />
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">
            Certifications
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Professional credentials and continuous learning achievements
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative bg-white rounded-2xl border-2 border-slate-200 p-8 overflow-hidden transition-all duration-300 hover:border-transparent shadow-lg hover:shadow-2xl">
                {/* Gradient border on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-0.5 rounded-2xl pointer-events-none`}>
                  <div className="w-full h-full bg-white rounded-2xl"></div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className={`p-4 rounded-xl bg-gradient-to-br ${cert.color} shadow-lg`}
                    >
                      <Award size={32} className="text-white" />
                    </motion.div>

                    {cert.verified && (
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 + 0.4, type: "spring" }}
                        className="flex items-center gap-1 px-3 py-1 rounded-full bg-green-100 border border-green-300"
                      >
                        <CheckCircle size={14} className="text-green-600" />
                        <span className="text-xs font-semibold text-green-700">Verified</span>
                      </motion.div>
                    )}
                  </div>

                  {/* Title and Issuer */}
                  <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:text-transparent group-hover:from-blue-600 group-hover:to-cyan-600 transition-all">
                    {cert.title}
                  </h3>

                  <div className="flex items-center gap-2 text-slate-600 mb-4">
                    <span className="font-semibold">{cert.issuer}</span>
                  </div>

                  {/* Date */}
                  <div className="flex items-center gap-2 text-sm text-slate-500 mb-6 pb-6 border-b border-slate-200">
                    <Calendar size={16} />
                    <span>Completed in {cert.date}</span>
                  </div>

                  {/* Skills Learned */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-slate-700 mb-3">Skills Covered:</h4>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, skillIndex) => (
                        <motion.span
                          key={skill}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.2 + skillIndex * 0.05 }}
                          className="px-3 py-1.5 text-xs font-medium bg-slate-100 text-slate-700 rounded-full border border-slate-200 hover:border-cyan-300 hover:bg-cyan-50 hover:text-cyan-700 transition-all"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* View Certificate Link */}
                  <motion.button
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-2 text-sm font-semibold text-cyan-600 group-hover:text-blue-600 transition-colors"
                  >
                    <span>View Certificate</span>
                    <ExternalLink size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </motion.button>
                </div>

                {/* Background pattern */}
                <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-bl-full pointer-events-none`}></div>

                {/* Bottom accent line */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${cert.color} origin-left`}
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-block p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-white border-2 border-slate-200 shadow-lg">
            <div className="flex items-center justify-center gap-8">
              <div>
                <div className="text-4xl font-bold text-slate-900 mb-2">2</div>
                <div className="text-sm text-slate-600">Certifications Earned</div>
              </div>
              <div className="w-px h-16 bg-slate-200"></div>
              <div>
                <div className="text-4xl font-bold text-slate-900 mb-2">10+</div>
                <div className="text-sm text-slate-600">Skills Acquired</div>
              </div>
              <div className="w-px h-16 bg-slate-200"></div>
              <div>
                <div className="text-4xl font-bold text-slate-900 mb-2">100%</div>
                <div className="text-sm text-slate-600">Completion Rate</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-slate-600 text-lg mb-6">
            Continuously learning and expanding my skill set
          </p>
        
        </motion.div>
      </div>
    </section>
  );
}