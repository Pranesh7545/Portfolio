import { motion } from "framer-motion";

export default function Contact() {
  const socialLinks = [
    {
      name: "Email",
      icon: "✉️",
      href: "mailto:pranesh7545@gmail.com",
      label: "pranesh7545@gmail.com",
    },
    {
      name: "GitHub",
      icon: "💻",
      href: "https://github.com",
      label: "github.com/yourusername",
    },
    {
      name: "LinkedIn",
      icon: "💼",
      href: "https://linkedin.com",
      label: "linkedin.com/in/yourprofile",
    },
  ];

  return (
    <section id="contact" className="py-24 px-6 md:px-8 relative bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-slate-600 text-lg mb-12 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-slate-50 p-8 md:p-12 rounded-2xl border border-slate-200 shadow-xl shadow-slate-200/50"
        >
          <div className="mb-8">
            <a
              href="mailto:pranesh7545@gmail.com"
              className="inline-block px-8 py-4 bg-cyan-600 rounded-lg hover:bg-cyan-500 transition-all duration-300 shadow-lg shadow-cyan-600/20 font-semibold text-white text-lg"
            >
              Say Hello
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group p-6 bg-white rounded-xl border border-slate-200 hover:border-cyan-300 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10"
              >
                <div className="text-3xl mb-3">{link.icon}</div>
                <h3 className="font-semibold text-slate-900 mb-2 group-hover:text-cyan-700 transition-colors">
                  {link.name}
                </h3>
                <p className="text-sm text-slate-600 group-hover:text-slate-700 transition-colors">
                  {link.label}
                </p>
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-slate-500 text-sm mt-12"
        >
          Designed & Built by Pranesh
        </motion.p>
      </div>
    </section>
  );
}
  