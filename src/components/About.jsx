import { motion } from "framer-motion";
import { MapPin, Download, Globe, Heart,User, Backpack, Trophy } from "lucide-react";

export default function About() {
  const interests = [
    { name: "Badminton", icon: Trophy, color: "from-green-500 to-emerald-600" },
    { name: "Backpacking", icon: Backpack, color: "from-orange-500 to-amber-600" },
  ];

  const languages = [
    { name: "English", proficiency: "Professional" },
    { name: "Tamil", proficiency: "Native" },
  ];

  return (
    <section id="about" className="py-24 px-6 md:px-8 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-20 w-96 h-96 bg-cyan-100/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl"></div>
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
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 mb-6 shadow-lg shadow-cyan-500/25"
          >
            <User className="text-white" size={32} />
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">
            About Me
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Get to know me better
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
          {/* Left column - Professional Summary */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="relative bg-gradient-to-br from-slate-50 to-white p-8 rounded-2xl border-2 border-slate-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-cyan-100/30 to-transparent rounded-bl-full"></div>

              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  Professional Summary
                </h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Full Stack Developer Intern with hands-on experience in building responsive user interfaces, 
                  RESTful API integration, and role-based admin dashboards using React, Tailwind CSS, and Node.js. 
                  Also experienced in data analysis and visualization using Power BI, with hands-on experience in 
                  creating interactive dashboards for business insights.
                </p>

                {/* Location */}
                <div className="flex items-center gap-3 text-slate-700 mb-4">
                  <div className="p-2 rounded-lg bg-cyan-100">
                    <MapPin size={20} className="text-cyan-600" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Based in</p>
                    <p className="font-semibold">Erode, Tamil Nadu</p>
                  </div>
                </div>

                {/* Download Resume */}
                <motion.a
                  href="/PraneshResume.pdf"
                  download
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-500 hover:to-blue-500 transition-all shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/30"
                >
                  <Download size={20} />
                  <span>Download Resume</span>
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Right column - Languages & Interests */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Languages */}
            <div className="relative bg-gradient-to-br from-slate-50 to-white p-8 rounded-2xl border-2 border-slate-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-purple-100">
                  <Globe size={24} className="text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Languages</h3>
              </div>

              <div className="space-y-4">
                {languages.map((lang, index) => (
                  <motion.div
                    key={lang.name}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center justify-between p-4 rounded-xl bg-white border border-slate-200 hover:border-purple-300 transition-colors"
                  >
                    <span className="font-semibold text-slate-900">{lang.name}</span>
                    <span className="px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-sm font-medium">
                      {lang.proficiency}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Hobbies/Interests */}
            <div className="relative bg-gradient-to-br from-slate-50 to-white p-8 rounded-2xl border-2 border-slate-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-orange-100">
                  <Heart size={24} className="text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Hobbies</h3>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {interests.map((interest, index) => {
                  const Icon = interest.icon;
                  return (
                    <motion.div
                      key={interest.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, type: "spring" }}
                      whileHover={{ y: -5, scale: 1.05 }}
                      className="relative group p-6 rounded-xl bg-white border-2 border-slate-200 hover:border-transparent transition-all duration-300 overflow-hidden cursor-pointer"
                    >
                      {/* Gradient border on hover */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${interest.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-0.5 rounded-xl`}>
                        <div className="w-full h-full bg-white rounded-xl"></div>
                      </div>

                      <div className="relative z-10 flex flex-col items-center text-center">
                        <motion.div
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                          className={`p-3 rounded-xl bg-gradient-to-br ${interest.color} mb-3 shadow-lg`}
                        >
                          <Icon size={24} className="text-white" />
                        </motion.div>
                        <span className="font-semibold text-slate-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-orange-600 group-hover:to-amber-600 transition-all">
                          {interest.name}
                        </span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>

  
      </div>
    </section>
  );
}