import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaDownload,
} from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiVercel,
  SiNetlify,
} from "react-icons/si";
import Swal from "sweetalert2";

/* ================= SKILLS ================= */
const skills = [
  <FaHtml5 className="text-orange-500" />,
  <FaCss3Alt className="text-blue-500" />,
  <FaJs className="text-yellow-400" />,
  <FaReact className="text-cyan-400" />,
  <FaNodeJs className="text-green-500" />,
  <SiExpress className="text-gray-800" />,
  <SiMongodb className="text-green-600" />,
  <SiTailwindcss className="text-sky-400" />,
  <SiVercel />,
  <SiNetlify className="text-teal-400" />,
];

const Hero = () => {
  /* typing */
  const [text, setText] = useState("");
  const fullText = "MERN Stack Developer";

  useEffect(() => {
    let i = 0;
    const t = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(t);
    }, 100);
    return () => clearInterval(t);
  }, []);

  /* rotation */
  const controls = useAnimation();
  const [pause, setPause] = useState(false);

  useEffect(() => {
    if (!pause) {
      controls.start({
        rotate: 360,
        transition: {
          duration: 45,
          repeat: Infinity,
          ease: "linear",
        },
      });
    } else {
      controls.stop();
    }
  }, [pause, controls]);

  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT */}
        <div className="text-center lg:text-left">
          <p className="text-dark-accent font-mono">Hi, my name is</p>
          <h1 className="text-5xl font-bold mt-2">MD Foyzullah</h1>

          <h2 className="text-2xl mt-4 h-10">
            <span className="text-dark-accent">{text}</span>
            <span className="animate-pulse">|</span>
          </h2>

          <p className="mt-6 text-dark-text max-w-md">
            I build modern, scalable & responsive MERN stack applications.
          </p>

          <button
            onClick={() =>
              Swal.fire({
                toast: true,
                position: "top",
                icon: "success",
                title: "Resume coming soon!",
                showConfirmButton: false,
                timer: 2000,
              })
            }
            className="mt-6 px-6 py-3 bg-dark-accent text-black rounded-lg"
          >
            <FaDownload className="inline mr-2" />
            Resume
          </button>

          <div className="flex gap-6 mt-8 text-2xl">
            <FaGithub />
            <FaLinkedin />
            <FaFacebook />
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative flex justify-center">
          {/* ORBIT WRAPPER (BIG & VISIBLE) */}
          <div className="relative w-[320px] h-[320px] sm:w-[360px] sm:h-[360px] lg:w-[440px] lg:h-[440px] overflow-visible">

            {/* ROTATING ICONS */}
            <motion.div
              animate={controls}
              className="absolute inset-0 z-20"
            >
              {skills.map((Icon, i) => {
                const angle = (360 / skills.length) * i;
                return (
                  <div
                    key={i}
                    className="absolute top-1/2 left-1/2"
                    style={{
                      transform: `
                        rotate(${angle}deg)
                        translateX(160px)
                        rotate(-${angle}deg)
                      `,
                    }}
                    onMouseEnter={() => setPause(true)}
                    onMouseLeave={() => setPause(false)}
                  >
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-xl border hover:scale-110 transition">
                      <span className="text-2xl">{Icon}</span>
                    </div>
                  </div>
                );
              })}
            </motion.div>

            {/* IMAGE CENTER */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <img
                src="/portfolio.png"
                alt="profile"
                className="w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full object-cover border-4 border-dark-accent"
              />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
