// src/components/Bundle.jsx
import React, { useState, useEffect } from "react";
import portfolio from "./../api/profolio";
import logo from "./../assets/portfolio.png";
import Resume from "./../assets/Rahul_Resume.pdf";
import useThemeToggle from "../hooks/useThemeToggle";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";
import { FaBars, FaTimes, FaLinkedin } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { TypeAnimation } from "react-type-animation";
import { FiSun, FiMoon } from "react-icons/fi";
import { SiNativescript } from "react-icons/si";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { BsPhoneVibrateFill } from "react-icons/bs";
import { MdAttachEmail } from "react-icons/md";
import { SiReactiveresume } from "react-icons/si";
import GTranslateIcon from "@mui/icons-material/GTranslate";
import { BsQrCodeScan } from "react-icons/bs";
import boot from "./../assets/boot.jpeg";
import expr from "./../assets/expr.png";
import git from "./../assets/git.png";
import github from "./../assets/github.png";
import js from "./../assets/js.png";
import mongo from "./../assets/mongo.jpeg";
import mongoose from "./../assets/mongoose.png";
import my from "./../assets/my.png";
import next from "./../assets/next.png";
import node from "./../assets/node.png";
import postman from "./../assets/postman.jpeg";
import react from "./../assets/react.png";
import seq from "./../assets/seq.png";
import tail from "./../assets/tail.png";
import mui from "./../assets/mui.png";
import html from "./../assets/html.jpeg";
import css from "./../assets/css.png";
import bestoos from "./../assets/bestoo.png";
import birtdays from "./../assets/birthday.png";
import { img } from "motion/react-client";
import { FaBuilding } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa"; // Add at top



const Bundle = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lang, setLang] = useState(() => localStorage.getItem("lang") || "en");
  const [langToggle, setLangTogle] = useState(false);
  const { isDarkMode, isDark, toggleTheme, bgColor, textColor } =
    useThemeToggle();

  const getStructure = portfolio[lang];

  const navItems = [
    "Home",
    "Skills",
    "Experience",
    "Projects",
    "ContactUs",
    "More",
  ];

  const handleLangChange = () => {
    setLangTogle(!langToggle);
  };

  useEffect(() => {
    if (langToggle) {
      setLang("hi");
      localStorage.setItem("lang", "hi");
    } else {
      setLang("en");
      localStorage.setItem("lang", "en");
    }
  }, [langToggle]);

  const onButtonClick = () => {
    const link = document.createElement("a");
    link.href = Resume;
    link.download = "Rahul_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const skillIcon = {
    HTML5: html,
    JavaScript: js,
    CSS3: css,
    MongoDB: mongo,
    ReactJS: react,
    NodeJS: node,
    ExpressJS: expr,
    NextJs: next,
    MySQL: my,
    Sequelize: seq,
    Mongoose: mongoose,
    Bootstrap: boot,
    TailwindCss: tail,
    Git: git,
    Github: github,
    MaterialUi: mui,
    Postman: postman,
  };
    const [form, setForm] = useState({
      name: "",
      phone: "",
      company: "",
      position: "",
      customPosition: "",
      message: "",
    });

    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    const validate = () => {
      let newErrors = {};

      if (!form.name.trim()) newErrors.name = "Name is required";
      if (!form.phone.trim()) newErrors.phone = "Phone is required";

      if (form.company.trim() && !form.position) {
        newErrors.position = "Position is required if Company Name is filled";
      }

      if (form.position === "Other" && !form.customPosition.trim()) {
        newErrors.customPosition = "Custom position is required";
      }

      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
      setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      if (!validate()) return;

      setLoading(true);

      // Prepare email data
      const emailData = {
        name: form.name,
        phone: form.phone,
        company: form.company || "N/A",
        position:
          form.position === "Other"
            ? form.customPosition
            : form.position || "N/A",
        message: form.message || "No message provided",
      };

      // Replace with your EmailJS credentials
      emailjs
        .send(
          "YOUR_SERVICE_ID",
          "YOUR_TEMPLATE_ID",
          emailData,
          "YOUR_PUBLIC_KEY"
        )
        .then(
          () => {
            alert("Message sent successfully!");
            setForm({
              name: "",
              phone: "",
              company: "",
              position: "",
              customPosition: "",
              message: "",
            });
          },
          (error) => {
            console.error(error);
            alert("Failed to send message.");
          }
        )
        .finally(() => setLoading(false));
    };

  return (
    <section className="flex flex-col gap-1">
      <header
        className="w-full p-[6px_20px] flex justify-between items-center shadow-md fixed top-0 z-50"
        style={{ backgroundColor: isDarkMode ? "#F547A8" : "#f5f5f5" }}
      >
        <div className="flex items-center justify-between w-full">
          <div className="w-[50px] h-[50px] rounded-full bg-white">
            <img src={logo} alt="logo" className="rounded-full" />
          </div>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-3">
            {navItems.map((item, idx) => (
              <li
                key={idx}
                className={`font-semibold text-xl transition-colors duration-200 ${
                  isDark ? "hover:text-gray-400" : "hover:text-gray-800"
                }`}
                style={{ color: textColor }}
                data-aos="fade-down"
                data-aos-delay={`${idx * 100}`}
              >
                <a href={`#${item.toLowerCase()}`}>{item}</a>
              </li>
            ))}
            <li
              className="flex gap-3 items-center cursor-pointer"
              data-aos="fade-down"
              data-aos-delay={`${navItems.length * 100}`}
            >
              <GTranslateIcon onClick={handleLangChange} />
              <button
                onClick={toggleTheme}
                className="text-xl p-1 rounded hover:scale-110 transition-transform duration-300"
                title={
                  isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"
                }
                style={{ color: textColor }}
              >
                {isDark ? <FiSun /> : <FiMoon />}
              </button>
            </li>
          </ul>

          {/* Mobile Menu Toggle */}
          <div
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-xl cursor-pointer"
            style={{ color: textColor }}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden fixed top-[70px] right-0 h-[100vh] w-2/3 transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ backgroundColor: isDarkMode ? "#111" : "#f5f5f5" }}
      >
        <ul className="flex flex-col gap-4 p-5">
          <li className="flex gap-2 items-center cursor-pointer ">
            <GTranslateIcon onClick={handleLangChange} />
            <button
              onClick={toggleTheme}
              className="text-xl p-1 rounded hover:scale-110"
              title={isDarkMode ? "Light Mode" : "Dark Mode"}
              style={{ color: textColor }}
            >
              {isDarkMode ? <FiSun /> : <FiMoon />}
            </button>
          </li>
          {navItems.map((item, idx) => (
            <li
              key={idx}
              onClick={() => setMenuOpen(false)}
              className={`text-xl font-semibold transition-colors duration-200 ${
                isDark ? "hover:text-gray-400" : "hover:text-gray-800"
              }`}
              style={{ color: textColor }}
              data-aos="fade-left"
              data-aos-delay={`${idx * 100}`}
            >
              <a href={`#${item.toLowerCase()}`}>{item}</a>
            </li>
          ))}
        </ul>
      </div>

      {/* Hero Section */}
      <section
        className="flex flex-col-reverse md:flex-row justify-between items-center gap-8 p-6 pt-[90px] min-h-[500px]"
        style={{ backgroundColor: bgColor, color: textColor }}
      >
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold" data-aos="fade-right">
            {getStructure.Caption}
            <span className="text-indigo-600 ml-2">{getStructure.MyName}</span>
          </h1>
          <div className="mt-4 text-2xl">
            <TypeAnimation
              sequence={getStructure.Developer}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="font-semibold"
            />
          </div>

          {/* Social Icons */}
          <div className="mt-5 flex flex-wrap gap-5 text-2xl justify-center md:justify-start">
            {[
              {
                icon: <MdAttachEmail />,
                delay: 0,
                link: "mailto:rahul933579@gmail.com",
              },
              {
                icon: <BsGithub />,
                delay: 100,
                link: "https://github.com/Mrahul12",
              },
              {
                icon: <FaLinkedin />,
                delay: 200,
                link: "https://www.linkedin.com/in/rahul4618/",
              },
              {
                icon: <SiNativescript />,
                delay: 300,
                link: "https://www.naukri.com/mnjuser/profile",
              },
              {
                icon: <FaSquareWhatsapp />,
                delay: 400,
                link: "https://wa.link/4xohz4",
              },
              {
                icon: <BsPhoneVibrateFill />,
                delay: 500,
                link: "tel:+918102150657",
              },
              {
                icon: <BsQrCodeScan />,
                delay: 400,
                link: "https://wa.link/4xohz4",
              },
            ].map((item, idx) => (
              <a
                key={idx}
                href={item.link}
                target="_blank"
                className={`hover:bg-slate-200 hover:text-black text-white p-2 rounded-md bg-slate-800 shadow-lg transition-all duration-300`}
                data-aos="zoom-in"
                data-aos-delay={item.delay}
              >
                {item.icon}
              </a>
            ))}
            <button
              onClick={onButtonClick}
              className="hover:bg-slate-200 hover:text-black text-white  p-2 rounded-md bg-slate-800 shadow-lg transition-all duration-300"
              title="Resume DownLoad"
              data-aos="zoom-in"
              data-aos-delay="600"
            >
              <SiReactiveresume />
            </button>
          </div>
        </div>

        <div className="flex-1 flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&w=500&q=80"
            alt="developer"
            className="w-52 h-52 md:w-64 md:h-64 rounded-full object-cover shadow-lg border-4 border-white"
            data-aos="fade-up"
            data-aos-delay="300"
          />
        </div>
      </section>
      {/* Skill Section */}
      <section
        id="skills"
        className="w-full flex flex-col items-center gap-8 py-12 px-4 sm:px-8"
        style={{ backgroundColor: bgColor, color: textColor }}
      >
        {/* Title */}
        <h2
          className="text-3xl md:text-4xl font-bold relative pb-2 text-center"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {getStructure.skill}
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-[3px] bg-indigo-500 rounded"></span>
        </h2>

        {/* Skills Grid */}
        <div
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3 sm:gap-4 w-full px-2"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {getStructure.skills.languages.map((icon, ind) => (
            <div
              key={ind}
              className="flex flex-col items-center gap-2 p-3 rounded-xl 
        bg-gradient-to-br from-white/40 to-white/20 dark:from-gray-800/60 dark:to-gray-900/40 
        backdrop-blur-lg shadow-md hover:shadow-indigo-500/50 
        border border-white/20 
        hover:scale-105 transition-all duration-300 group"
              data-aos="zoom-in"
              data-aos-delay={ind * 80}
            >
              {/* Icon */}
              <div className="relative w-14 h-14 flex items-center justify-center rounded-full shadow-md overflow-hidden bg-white dark:bg-gray-700 border-2 border-indigo-400 group-hover:border-indigo-500 transition-all duration-300">
                <img
                  src={skillIcon[icon]}
                  alt={icon}
                  className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
                />
                {/* Glow Effect */}
                <span className="absolute inset-0 rounded-full bg-indigo-400 opacity-0 group-hover:opacity-20 transition duration-300 blur-md"></span>
              </div>
              <p className="text-xs font-semibold text-center">{icon}</p>
            </div>
          ))}
        </div>
      </section>
      {/* EXPERIENCE SECTION */}
      <section
        id="experience"
        className="py-1 px-4 relative overflow-hidden"
        style={{
          backgroundColor: bgColor,
          color: textColor,
        }}
      >
        {/* Decorative gradient blur */}
        <div className="absolute top-0 left-0 w-full h-full   pointer-events-none"></div>

        <h2 className="text-4xl font-bold  relative text-center mb-20 tracking-tight">
          Experience
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-40 h-[3px] bg-indigo-500 rounded"></span>
        </h2>

        <div className="relative max-w-6xl mx-auto">
          {/* Timeline spine */}
          <div className="absolute left-1/2 -translate-x-1/2 w-[6px] h-full bg-gradient-to-b from-pink-500 via-purple-500 to-indigo-500 rounded-full animate-pulse"></div>

          {getStructure.Experience.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className={`relative flex flex-col md:flex-row items-center md:justify-between mb-24 ${
                idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Card */}
              <div className="w-full md:w-[46%] group bg-white/10 dark:bg-gray-800/30 backdrop-blur-lg p-8 rounded-3xl  shadow-lg hover:shadow-[0_0_35px_rgba(245,71,168,0.4)] transform hover:-translate-y-2 transition-all duration-500">
                {/* Role + Icon */}
                <div className="flex items-center gap-4 mb-4">
                  <span className="p-4 rounded-full bg-gradient-to-br from-pink-500 to-indigo-500 text-white shadow-lg">
                    <FaBuilding className="text-lg" />
                  </span>
                  <h3 className="text-2xl font-semibold">{exp.Destination}</h3>
                </div>

                {/* Company + Duration */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 text-sm text-slate-700 dark:text-slate-700 font-semibold">
                  <span className="sm:mb-0 mb-2">{exp.company}</span>
                  <span>{exp.duration}</span>
                </div>

                {/* Points */}
                <ul className="list-disc list-inside text-sm space-y-2 opacity-80  font-semibold">
                  {exp.description.map((point, i) => (
                    <li key={i}>{Object.values(point)[0]}</li>
                  ))}
                </ul>
              </div>

              {/* Timeline dot */}
              <div className="z-10 w-12 h-12 bg-gradient-to-br from-pink-500 to-indigo-500 rounded-full border-[6px] border-white dark:border-gray-900 shadow-xl my-8 md:my-0"></div>

              {/* Empty space on alternate side */}
              <div className="hidden md:block w-[46%]"></div>
            </motion.div>
          ))}
        </div>
      </section>
      {/* Project Section */}
      <section
        id="projects"
        className="px-10 transition-colors duration-500"
        style={{ backgroundColor: bgColor, color: textColor }}
      >
        <h2 className="text-4xl font-bold relative text-center mb-16">
          Projects
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-[3px] bg-indigo-500 rounded"></span>
        </h2>

        <div className="relative max-w-6xl mx-auto">
          {/* Vertical timeline line - hidden on mobile */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-[3px] h-full bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500"></div>

          {getStructure.Projects.map((proj, idx) => {
            // Use alternate image for second project
            const imageSrc =
              idx === 1
                ? birtdays // 👈 Put your second project image path here
                : proj.imglink || bestoos;

            return (
              <div
                key={idx}
                className={`relative flex items-center justify-between mb-16 md:mb-24 flex-col md:flex-row ${
                  idx % 2 !== 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Text Details */}
                <div
                  className="w-full md:w-[45%] p-4 relative z-10"
                  data-aos={idx % 2 === 0 ? "fade-right" : "fade-left"}
                >
                  <h3 className="text-2xl font-semibold mb-2">{proj.name}</h3>
                  <ul className="list-disc list-inside text-sm mb-4 space-y-1">
                    {proj.summaryp.map((point, i) => (
                      <li key={i}>{Object.values(point)[0]}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {proj.techStack?.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  {proj.link && (
                    <a
                      href={proj.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-full text-sm transition-all duration-300"
                    >
                      Visit Site <FaExternalLinkAlt />
                    </a>
                  )}
                </div>

                {/* Timeline dot - hidden on mobile */}
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden md:flex z-10 w-8 h-8 bg-gradient-to-br from-indigo-500 to-pink-500 rounded-full border-4 border-white dark:border-gray-900 shadow-lg items-center justify-center hover:scale-110 transition-transform duration-300"
                  data-aos="zoom-in"
                >
                  <span className="sr-only">View {proj.name}</span>
                </a>

                {/* Image */}
                <div
                  className="w-full md:w-[45%] relative group overflow-hidden rounded-2xl shadow-lg"
                  data-aos={idx % 2 === 0 ? "fade-left" : "fade-right"}
                >
                  <img
                    src={imageSrc || birthdays}
                    alt={proj.name}
                    className="w-full h-64 object-cover transform group-hover:scale-105 transition-all duration-500"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Contact Us */}
      <div className="flex justify-center items-center min-h-screen px-4 py-8">
        <form onSubmit={handleSubmit} className="w-full max-w-2xl space-y-6">
          {/* Title */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800">Get in Touch</h2>
            <p className="text-gray-500 mt-2">
              Fill in the details below — fields marked * are required
            </p>
          </div>

          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name*
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="John Doe"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-400 shadow-sm"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number*
            </label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="+1 234 567 890"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-400 shadow-sm"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
            )}
          </div>

          {/* Company */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Company Name (Optional)
            </label>
            <input
              type="text"
              name="company"
              value={form.company}
              onChange={handleChange}
              placeholder="Acme Corp."
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-400 shadow-sm"
            />
          </div>

          {/* Position */}
          {form.company.trim() && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Position*
              </label>
              <select
                name="position"
                value={form.position}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-400 shadow-sm"
              >
                <option value="">Select</option>
                <option value="HR">HR</option>
                <option value="Manager">Manager</option>
                <option value="Recruiter">Recruiter</option>
                <option value="Other">Other</option>
              </select>
              {errors.position && (
                <p className="text-red-500 text-sm mt-1">{errors.position}</p>
              )}
            </div>
          )}

          {/* Custom Position */}
          {form.position === "Other" && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Specify Position*
              </label>
              <input
                type="text"
                name="customPosition"
                value={form.customPosition}
                onChange={handleChange}
                placeholder="Your position title"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-400 shadow-sm"
              />
              {errors.customPosition && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.customPosition}
                </p>
              )}
            </div>
          )}

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Message (Optional)
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows="4"
              placeholder="Write your message here..."
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-400 shadow-sm"
            ></textarea>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-3 rounded-lg shadow-md transition-all duration-200"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Bundle;
