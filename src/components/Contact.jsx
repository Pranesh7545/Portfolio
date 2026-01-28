import { motion } from "framer-motion";
import { Mail, Github, Linkedin, ArrowUpRight } from "lucide-react";

export default function Contact() {
  const socialLinks = [
    {
      name: "Email",
      icon: Mail,
      href: "mailto:pranesh7545@gmail.com",
      label: "pranesh7545@gmail.com",
      color: "from-red-500 to-orange-500",
    },
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/Pranesh7545",
      label: "github.com/Pranesh7545",
      color: "from-gray-700 to-gray-900",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "www.linkedin.com/in/pranesh-d-9092a2242",
      label: "linkedin.com/in/yourprofile",
      color: "from-blue-600 to-blue-700",
    },
  ];

  return (
    <section id="contact" className="py-24 px-6 md:px-8 relative bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block mb-6"
          >
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full blur-xl opacity-20"
              ></motion.div>
              <div className="relative px-6 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-300/30">
                <span className="text-sm font-semibold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                  Let's Connect
                </span>
              </div>
            </div>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-slate-900">
            Get In Touch
          </h2>
          <p className="text-slate-600 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative bg-white p-8 md:p-12 rounded-3xl border-2 border-slate-200 shadow-2xl shadow-slate-900/5 overflow-hidden"
        >
          {/* Decorative corner elements */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-cyan-100/30 to-transparent rounded-bl-full"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-blue-100/30 to-transparent rounded-tr-full"></div>

          <div className="relative z-10">
            <div className="mb-10">
              <motion.a
                href="mailto:pranesh7545@gmail.com"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-xl hover:from-cyan-500 hover:to-blue-500 transition-all duration-300 shadow-lg shadow-cyan-600/25 hover:shadow-xl hover:shadow-cyan-600/30 font-semibold text-white text-lg"
              >
                <Mail size={20} />
                <span>Say Hello</span>
                <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </motion.a>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-12">
              {socialLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="group relative p-6 bg-gradient-to-br from-slate-50 to-white rounded-2xl border-2 border-slate-200 hover:border-cyan-300 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10 overflow-hidden"
                  >
                    {/* Gradient overlay on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${link.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                    
                    <div className="relative z-10">
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                        className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${link.color} text-white mb-4 shadow-lg`}
                      >
                        <Icon size={24} />
                      </motion.div>
                      
                      <h3 className="font-bold text-lg text-slate-900 mb-2 group-hover:text-cyan-600 transition-colors">
                        {link.name}
                      </h3>
                      <p className="text-sm text-slate-600 group-hover:text-slate-700 transition-colors break-all">
                        {link.label}
                      </p>

                      {/* Arrow indicator */}
                      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        <ArrowUpRight size={16} className="text-cyan-600" />
                      </div>
                    </div>
                  </motion.a>
                );
              })}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 pt-8 border-t border-slate-200"
        >
          <p className="text-slate-500 text-sm flex items-center justify-center gap-2">
            <span>Designed & Built by</span>
            <span className="font-semibold text-slate-700">Pranesh</span>
            <motion.span
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              ✨
            </motion.span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}