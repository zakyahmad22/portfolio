import { useState, useEffect } from "react";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setActive(true);
      } else {
        setActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        active ? "bg-black/70 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}>
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-white">MyPortfolio</h1>

        {/* Menu Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          <li>
            <a
              href="#hero"
              className="text-gray-200 hover:text-indigo-400 transition">
              Beranda
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="text-gray-200 hover:text-indigo-400 transition">
              Tentang
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="text-gray-200 hover:text-indigo-400 transition">
              Proyek
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-gray-200 hover:text-indigo-400 transition">
              Kontak
            </a>
          </li>
        </ul>

        {/* Hamburger Button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-md">
          <ul className="flex flex-col items-center gap-6 py-6">
            <li>
              <a
                href="#hero"
                onClick={() => setMenuOpen(false)}
                className="text-gray-200 hover:text-indigo-400 transition">
                Beranda
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={() => setMenuOpen(false)}
                className="text-gray-200 hover:text-indigo-400 transition">
                Tentang
              </a>
            </li>
            <li>
              <a
                href="#projects"
                onClick={() => setMenuOpen(false)}
                className="text-gray-200 hover:text-indigo-400 transition">
                Proyek
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="text-gray-200 hover:text-indigo-400 transition">
                Kontak
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
