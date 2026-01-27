import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import {
  Server,
  Rocket,
  Database,
  BarChart3,
  Palette,
  Code2,
  Plug,
  Zap,
} from "lucide-react";

const skills = [
  { name: "Vite + React", icon: Zap, color: "from-yellow-400 to-orange-500" },
  { name: "Node.js", icon: Server, color: "from-green-400 to-green-600" },
  { name: "Express", icon: Rocket, color: "from-blue-400 to-blue-600" },
  { name: "MySQL", icon: Database, color: "from-indigo-400 to-purple-600" },
  { name: "Power BI", icon: BarChart3, color: "from-pink-400 to-red-500" },
  { name: "Tailwind CSS", icon: Palette, color: "from-cyan-400 to-teal-600" },
  { name: "JavaScript", icon: Code2, color: "from-amber-400 to-yellow-500" },
  { name: "REST APIs", icon: Plug, color: "from-purple-400 to-pink-500" },
];

const SkillCard = ({ skill, index }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, threshold: 0.3 });
  const [isHovered, setIsHovered] = useState(false);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useMotionValue(0), { stiffness: 500, damping: 100 });
  const rotateY = useSpring(useMotionValue(0), { stiffness: 500, damping: 100 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!cardRef.current) return;
      
      const rect = cardRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const x = (e.clientX - centerX) / rect.width;
      const y = (e.clientY - centerY) / rect.height;
      
      mouseX.set(x);
      mouseY.set(y);
      rotateX.set(y * 10);
      rotateY.set(x * 10);
    };

    const handleMouseLeave = () => {
      rotateX.set(0);
      rotateY.set(0);
    };

    const card = cardRef.current;
    if (card) {
      card.addEventListener('mousemove', handleMouseMove);
      card.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (card) {
        card.removeEventListener('mousemove', handleMouseMove);
        card.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [mouseX, mouseY, rotateX, rotateY]);

  const Icon = skill.icon;

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        type: "spring",
        stiffness: 100
      }}
      whileHover={{ scale: 1.05, z: 10 }}
      style={{ 
        rotateX,
        rotateY,
        transformStyle: "preserve-3d"
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-500 hover:border-cyan-300 hover:shadow-2xl hover:shadow-cyan-500/20 cursor-pointer overflow-hidden"
    >
      {/* Background gradient */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
      />
      
      {/* Floating particles */}
      {isHovered && (
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full"
              initial={{ 
                x: Math.random() * 200,
                y: Math.random() * 200,
                opacity: 0 
              }}
              animate={{
                x: Math.random() * 200,
                y: Math.random() * 200,
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: 2,
                delay: i * 0.1,
                repeat: Infinity
              }}
            />
          ))}
        </div>
      )}

      <div className="relative z-10" style={{ transform: "translateZ(20px)" }}>
        <motion.div 
          className="flex justify-center mb-4"
          whileHover={{ rotate: 360, scale: 1.2 }}
          transition={{ duration: 0.6, type: "spring" }}
        >
          <Icon
            size={40}
            className="text-slate-600 group-hover:text-cyan-600 transition-colors duration-300"
          />
        </motion.div>

        <h3 className="text-center font-semibold text-slate-900 group-hover:text-cyan-700 transition-colors">
          {skill.name}
        </h3>
      </div>

      {/* Glowing border effect */}
      <motion.div
        className="absolute inset-0 rounded-2xl"
        style={{
          background: `conic-gradient(from 0deg, transparent, ${isHovered ? '#0891b2' : 'transparent'}, transparent)`,
          padding: '1px',
        }}
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
      >
        <div className="w-full h-full bg-white rounded-2xl" />
      </motion.div>
    </motion.div>
  );
};

export default function Skills() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.1 });

  return (
    <section ref={sectionRef} id="skills" className="py-24 px-6 md:px-8 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-10 right-10 w-32 h-32 bg-cyan-200/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-24 h-24 bg-blue-200/30 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl md:text-6xl font-bold tracking-tight mb-4 text-slate-900"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          >
            Skills & 
            <motion.span
              className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              {" "}Technologies
            </motion.span>
          </motion.h2>
          
          <motion.p 
            className="text-slate-600 text-lg max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Technologies and tools I use to build scalable, modern web applications with cutting-edge performance
          </motion.p>
        </motion.div>

        {/* Skills grid */}
        <div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          style={{ perspective: "1000px" }}
        >
          {skills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>

        {/* Interactive footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="text-center mt-16"
        >
       
        </motion.div>
      </div>
    </section>
  );
}
