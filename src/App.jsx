function App() {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-between bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white relative overflow-hidden w-full px-6 md:px-20 py-10">
        {/* Background Glows */}
        <div className="absolute w-[600px] h-[600px] bg-purple-600 rounded-full blur-3xl opacity-20 -top-40 -left-40 animate-glowSlow"></div>
        <div className="absolute w-[500px] h-[500px] bg-indigo-600 rounded-full blur-3xl opacity-20 bottom-0 right-0 animate-glowSlow"></div>

        {/* Teks Hero */}
        <div className="z-10 flex-1 text-center md:text-left space-y-6">
          <h1 className="text-5xl md:text-5xl font-extrabold tracking-wide drop-shadow-lg animate-fade-up delay-200">
            Halo, Saya Ahmad Zaky
          </h1>
          <p className="text-lg md:text-2xl text-gray-300 animate-fade-up delay-400">
            <span className="text-indigo-400 font-semibold">Web Developer</span>{" "}
            |{" "}
            <span className="text-indigo-400 font-semibold">
              UI/UX Designer
            </span>{" "}
            |{" "}
            <span className="text-indigo-400 font-semibold">
              Tech Enthusiast
            </span>
          </p>
          <p className="text-gray-400 max-w-lg animate-fade-up delay-600">
            Saya membuat aplikasi berbasis web menggunakan{" "}
            <span className="text-indigo-300 font-semibold">React</span>,{" "}
            <span className="text-indigo-300 font-semibold">PHP</span>, dan{" "}
            <span className="text-indigo-300 font-semibold">Laravel</span>.
            Selalu ingin belajar hal baru dan menciptakan solusi kreatif.
          </p>
          <a
            href="#about"
            className="inline-block bg-indigo-600 hover:bg-indigo-700 px-8 py-4 rounded-full shadow-lg text-white font-semibold transition transform hover:scale-110 animate-fade-up delay-800">
            Lihat Selengkapnya
          </a>
        </div>

        {/* Foto Profil */}
        <div className="mb-8 md:mb-0 md:ml-12 flex-shrink-0 z-10 animate-fade-up delay-1000">
          <img
            src="/assets/img/profile.jpg"
            alt="Foto Ahmad Zaky"
            className="w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-indigo-500 shadow-xl object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Animasi Tailwind Custom */}
        <style>
          {`
      @keyframes fadeUp {
        0% { opacity: 0; transform: translateY(40px); }
        100% { opacity: 1; transform: translateY(0); }
      }
      @keyframes glowSlow {
        0%, 100% { transform: translateY(0) translateX(0); }
        50% { transform: translateY(20px) translateX(20px); }
      }
      .animate-fade-up {
        animation: fadeUp 1s forwards;
      }
      .animate-glowSlow {
        animation: glowSlow 6s ease-in-out infinite alternate;
      }
      .delay-200 { animation-delay: 0.2s; }
      .delay-400 { animation-delay: 0.4s; }
      .delay-600 { animation-delay: 0.6s; }
      .delay-800 { animation-delay: 0.8s; }
      .delay-1000 { animation-delay: 1s; }
    `}
        </style>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-950 text-gray-200 w-full relative overflow-hidden px-6 md:px-20 py-20">
        {/* Background Glows */}
        <div className="absolute w-[400px] h-[400px] bg-indigo-600 rounded-full blur-3xl opacity-20 -top-20 -left-10 animate-glowSlow"></div>
        <div className="absolute w-[300px] h-[300px] bg-pink-600 rounded-full blur-3xl opacity-20 -bottom-10 -right-10 animate-glowSlow"></div>

        {/* Foto Profil */}
        <div className="flex-shrink-0 mb-8 md:mb-0 md:mr-12 z-10 animate-fade-up delay-200">
          <img
            src="/assets/img/profile.jpg"
            alt="Foto Ahmad Zaky"
            className="w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-indigo-500 shadow-xl object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Teks dan Skill */}
        <div className="flex-1 text-center md:text-left space-y-8 relative z-10">
          <h2 className="text-5xl font-bold mb-4 text-indigo-400 animate-fade-up delay-400">
            Tentang Saya
          </h2>
          <p className="text-xl leading-relaxed text-gray-400 max-w-3xl animate-fade-up delay-600">
            Saya adalah mahasiswa{" "}
            <span className="text-indigo-300 font-semibold">
              Manajemen Informatika
            </span>{" "}
            dengan minat besar di bidang{" "}
            <span className="text-indigo-300 font-semibold">
              Web Development
            </span>{" "}
            dan{" "}
            <span className="text-indigo-300 font-semibold">UI/UX Design</span>.
            Berpengalaman membuat aplikasi berbasis web menggunakan React, PHP,
            dan Laravel.
            <span className="block mt-4 italic text-indigo-300">
              "Sebenranya otak kita sama saja, yang membedakan hanya siapa yang
              mulai belajar duluan dan siapa yang belajar terus menerus"
            </span>
          </p>

          {/* Skill Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {[
              {
                icon: "💻",
                title: "Web Development",
                desc: "React, PHP, Laravel, Tailwind CSS",
                progress: 90,
              },
              {
                icon: "🎨",
                title: "UI/UX Design",
                desc: "Figma, Adobe XD, Prototyping",
                progress: 85,
              },
              {
                icon: "⚡",
                title: "Problem Solving",
                desc: "Algorithm, Logic, Debugging",
                progress: 80,
              },
            ].map((skill, i) => (
              <div
                key={i}
                className="bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transform transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${i * 0.3 + 0.8}s` }}>
                <span className="text-3xl mb-2 block">{skill.icon}</span>
                <h3 className="text-xl font-semibold mb-1">{skill.title}</h3>
                <p className="text-gray-400 text-sm mb-2">{skill.desc}</p>
                {/* Progress Bar */}
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-indigo-500 h-2 rounded-full"
                    style={{
                      width: `${skill.progress}%`,
                      transition: "width 1s ease-in-out",
                    }}></div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <a
            href="/assets/cv-zaky.pdf"
            className="inline-block px-8 py-3 bg-indigo-500 text-white rounded-full font-semibold hover:bg-indigo-600 transition-colors duration-300 animate-fade-up delay-1400 mt-8"
            target="_blank">
            Download CV
          </a>
        </div>

        {/* Animasi Tailwind Custom */}
        <style>
          {`
      @keyframes fadeUp {
        0% { opacity: 0; transform: translateY(40px); }
        100% { opacity: 1; transform: translateY(0); }
      }
      @keyframes glowSlow {
        0%, 100% { transform: translateY(0) translateX(0); }
        50% { transform: translateY(20px) translateX(20px); }
      }
      .animate-fade-up { animation: fadeUp 1s forwards; }
      .animate-glowSlow { animation: glowSlow 6s ease-in-out infinite alternate; }
      .delay-200 { animation-delay: 0.2s; }
      .delay-400 { animation-delay: 0.4s; }
      .delay-600 { animation-delay: 0.6s; }
      .delay-800 { animation-delay: 0.8s; }
      .delay-1000 { animation-delay: 1s; }
      .delay-1400 { animation-delay: 1.4s; }
    `}
        </style>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="min-h-screen flex items-center justify-center bg-black text-gray-200 w-full py-20 relative overflow-hidden">
        {/* Background Glows */}
        <div className="absolute w-[500px] h-[500px] bg-indigo-600 rounded-full blur-3xl opacity-20 -top-20 -left-20 animate-glowSlow"></div>
        <div className="absolute w-[400px] h-[400px] bg-pink-600 rounded-full blur-3xl opacity-20 -bottom-20 -right-10 animate-glowSlow"></div>

        <div className="w-full px-6 md:px-20 relative z-10">
          <h2 className="text-5xl font-bold text-center mb-16 text-indigo-400 animate-fade-up">
            Proyek Saya
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Sistem Reservasi Makanan",
                desc: "Aplikasi reservasi makanan online dengan fitur pemesanan, pembayaran, dan manajemen menu berbasis PHP & MySql.",

                link: "#",
                img: "/assets/img/reservasi.png",
                tags: ["PHP", "MySql", "JavaScript", "Tailwind"],
                status: "✅ Selesai",
              },
              {
                title: "Website Pesantren",
                desc: "Website profil Pondok Pesantren dengan sistem pendaftaran santri baru berbasis PHP, MySql, & Tailwind.",

                link: "#",
                img: "/assets/img/pesantren.png",
                tags: ["PHP", "MySql", "Tailwind"],
                status: "✅ Selesai",
              },
              {
                title: "Portfolio",
                desc: "Website portfolio pribadi untuk menampilkan proyek, skill, dan kontak.",

                link: "#",
                img: "/assets/img/portfolio.png",
                tags: ["React", "Tailwind", "Vite"],
                status: "✅ Selesai",
              },
            ].map((project, index) => (
              <div
                key={index}
                className="bg-gray-900/60 backdrop-blur-lg p-6 rounded-2xl shadow-xl border border-gray-800 hover:border-indigo-500 transition transform hover:-translate-y-3 hover:shadow-indigo-500/50 group animate-fade-up"
                style={{ animationDelay: `${index * 0.3 + 0.5}s` }}>
                {/* Thumbnail */}
                <img
                  src={project.img}
                  alt={project.title}
                  className="rounded-lg mb-4 w-full h-40 object-cover shadow-md"
                />

                <span className="text-4xl mb-2 block">{project.icon}</span>
                <h3 className="text-2xl font-semibold mb-2 text-white">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-2">{project.desc}</p>

                {/* Status */}
                <span className="text-xs mb-2 inline-block text-green-400">
                  {project.status}
                </span>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs bg-indigo-500/20 text-indigo-400 px-2 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-2">
                  <a
                    href={project.link}
                    className="inline-block px-4 py-2 bg-indigo-500 text-white rounded-full text-sm font-semibold hover:bg-indigo-600 transition">
                    Lihat Project
                  </a>
                  <a
                    href={project.link}
                    className="inline-block px-4 py-2 bg-gray-700 text-white rounded-full text-sm font-semibold hover:bg-gray-600 transition">
                    Demo
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <style>
          {`
      @keyframes fadeUp {
        0% { opacity: 0; transform: translateY(40px); }
        100% { opacity: 1; transform: translateY(0); }
      }
      @keyframes glowSlow {
        0%, 100% { transform: translateY(0) translateX(0); }
        50% { transform: translateY(20px) translateX(20px); }
      }
      .animate-fade-up { animation: fadeUp 1s forwards; }
      .animate-glowSlow { animation: glowSlow 6s ease-in-out infinite alternate; }
    `}
        </style>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-950 via-purple-950 to-black text-white w-full relative overflow-hidden py-20">
        {/* Background Glow */}
        <div className="absolute w-[400px] h-[400px] bg-indigo-600 rounded-full blur-3xl opacity-20 -top-20 -left-10 animate-glowSlow"></div>
        <div className="absolute w-[300px] h-[300px] bg-pink-600 rounded-full blur-3xl opacity-20 -bottom-10 -right-10 animate-glowSlow"></div>

        <div className="w-full px-6 md:px-20 relative z-10">
          <h2 className="text-5xl font-bold mb-8 text-indigo-300 animate-fade-up">
            Hubungi Saya
          </h2>
          <p className="mb-12 text-gray-300 text-lg animate-fade-up delay-200">
            Silahkan hubungi saya melalui email, media sosial, atau kirim pesan
            langsung:
          </p>

          {/* Contact Cards */}
          <div className="flex flex-col md:flex-row justify-center gap-8 mb-12">
            {[
              {
                icon: "📧",
                title: "Email",
                desc: "zaky@example.com",
                link: "mailto:zaky@example.com",
                color: "text-indigo-400",
              },
              {
                icon: "💻",
                title: "GitHub",
                desc: "github.com/username",
                link: "https://github.com/username",
                color: "text-green-400",
              },
              {
                icon: "🔗",
                title: "LinkedIn",
                desc: "linkedin.com/in/username",
                link: "https://linkedin.com/in/username",
                color: "text-blue-400",
              },
              {
                icon: "📱",
                title: "WhatsApp",
                desc: "+62 812-3456-7890",
                link: "https://wa.me/6281234567890",
                color: "text-green-500",
              },
            ].map((contact, i) => (
              <div
                key={i}
                className="bg-gray-900/60 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-gray-800 hover:border-indigo-400 hover:shadow-indigo-500/40 transform transition hover:-translate-y-2 animate-fade-up"
                style={{ animationDelay: `${i * 0.2 + 0.5}s` }}>
                <span className={`${contact.color} text-3xl mb-4 block`}>
                  {contact.icon}
                </span>
                <h3 className="text-2xl font-semibold mb-2">{contact.title}</h3>
                <p className="text-gray-300 mb-4">{contact.desc}</p>
                <a
                  href={contact.link}
                  target="_blank"
                  className="inline-block px-6 py-2 bg-indigo-500 text-white rounded-full hover:bg-indigo-600 transition-colors duration-300">
                  Kunjungi / Kirim
                </a>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="max-w-3xl mx-auto bg-gray-900/50 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-gray-800 animate-fade-up">
            <h3 className="text-2xl font-semibold mb-6 text-white">
              Kirim Pesan Langsung
            </h3>
            <form className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Nama"
                className="p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-indigo-500 outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                className="p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-indigo-500 outline-none"
              />
              <textarea
                placeholder="Pesan"
                className="p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-indigo-500 outline-none h-32"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-indigo-500 rounded-full text-white font-semibold hover:bg-indigo-600 transition">
                Kirim Pesan
              </button>
            </form>
          </div>
        </div>

        <style>
          {`
      @keyframes fadeUp {
        0% { opacity: 0; transform: translateY(40px); }
        100% { opacity: 1; transform: translateY(0); }
      }
      @keyframes glowSlow {
        0%, 100% { transform: translateY(0) translateX(0); }
        50% { transform: translateY(20px) translateX(20px); }
      }
      .animate-fade-up { animation: fadeUp 1s forwards; }
      .animate-glowSlow { animation: glowSlow 6s ease-in-out infinite alternate; }
    `}
        </style>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute w-[400px] h-[400px] bg-indigo-600 rounded-full blur-3xl opacity-20 -top-20 -left-20 animate-pulse-slow"></div>
        <div className="absolute w-[300px] h-[300px] bg-pink-500 rounded-full blur-3xl opacity-20 -bottom-10 -right-10 animate-pulse-slow"></div>

        <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8 relative z-10">
          {/* Column 1 - Brand */}
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-white animate-fade-in-up">
              Zaky
            </h3>
            <p className="text-gray-400 animate-fade-in-up delay-150">
              Building modern and elegant web experiences.
            </p>
          </div>

          {/* Column 2 - Quick Links */}
          <div className="space-y-2 text-center md:text-left">
            <h4 className="text-lg font-semibold text-white mb-2 animate-fade-in-up delay-300">
              Quick Links
            </h4>
            <ul className="space-y-1">
              {["Home", "About", "Portfolio", "Contact"].map((link, i) => (
                <li
                  key={i}
                  className="animate-fade-in-up delay-[${i * 100 + 400}ms]">
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="hover:text-indigo-400 transition-colors duration-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Social Media */}
          <div className="space-y-2 text-center md:text-left">
            <h4 className="text-lg font-semibold text-white mb-2 animate-fade-in-up delay-700">
              Follow Me
            </h4>
            <div className="flex space-x-4 justify-center md:justify-start text-2xl">
              {["🐦", "📸", "💻", "🔗"].map((icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="hover:scale-125 hover:text-indigo-400 transition-transform duration-300 animate-fade-in-up delay-[${i * 150 + 800}ms]">
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-4 text-center text-sm text-gray-500 animate-fade-in-up delay-1200">
          <p>
            © {new Date().getFullYear()} Zaky Portfolio. All rights reserved.
          </p>
          <p>
            Made with <span className="text-red-500">❤️</span> by Zaky
          </p>
        </div>

        {/* Animations */}
        <style jsx>{`
          @keyframes fadeInUp {
            0% {
              opacity: 0;
              transform: translateY(20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fade-in-up {
            animation: fadeInUp 0.8s forwards;
          }
          .animate-pulse-slow {
            animation: pulse 6s infinite;
          }
        `}</style>
      </footer>
    </>
  );
}

export default App;
