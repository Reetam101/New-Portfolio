"use client";
import { useEffect, useState } from "react";

type NavItem = {
  id: string;
  label: string;
};

const NAV_ITEMS: NavItem[] = [
  { id: "home", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

export const Header: React.FC = () => {
  const [active, setActive] = useState<string>("home");
  const NAVBAR_HEIGHT = 80; // px

  useEffect(() => {
    let observer: IntersectionObserver | null = null;
    let tries = 0;

    const createObserver = () => {
      const sections = document.querySelectorAll<HTMLElement>("[id]");
      if (!sections.length && tries < 10) {
        tries++;
        setTimeout(createObserver, 200);
        return;
      }

      const options: IntersectionObserverInit = {
        root: null,
        rootMargin: `-${NAVBAR_HEIGHT}px 0px 0px 0px`,
        threshold: 0.6,
      };

      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          console.log(entry);
          if (entry.isIntersecting && entry.target instanceof HTMLElement) {
            console.log(entry.target);
            setActive(entry.target.id);
          }
        });
      }, options);

      sections.forEach((section) => observer?.observe(section));
    };

    createObserver();

    return () => {
      if (observer) observer.disconnect();
    };
  }, []);

  const handleClick = (id: string) => {
    setActive(id); // instantly highlight
    const el = document.getElementById(id);
    if (!el) return;

    const top = el.getBoundingClientRect().top + window.scrollY - NAVBAR_HEIGHT;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-50">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur overflow-x-auto no-scrollbar max-w-full">
        {NAV_ITEMS.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => handleClick(id)}
            className={`px-4 py-2 rounded-full transition-colors duration-200 focus:outline-none
              ${
                active === id
                  ? "bg-white text-gray-900"
                  : "text-white hover:bg-white/20"
              }`}
          >
            {label}
          </button>
        ))}
      </nav>
    </div>
  );
};
