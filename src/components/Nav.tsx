import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { nav } from "@/content/story";
import { cn } from "@/lib/utils";
import { Cake, Menu, X } from "lucide-react";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "site-nav-scrolled border-b backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 sm:px-7 sm:py-4"
      >
        <a
          href="#top"
          aria-label="Birthday cake, back to top"
          className={cn(
            "site-nav-brand inline-flex items-center justify-center",
            scrolled && "is-scrolled",
          )}
        >
          <Cake size={24} strokeWidth={1.7} aria-hidden="true" />
        </a>

        <ul className="site-nav-links hidden items-center gap-7 text-[0.65rem] uppercase tracking-[0.2em] xl:flex">
          {nav.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="link-cinema">
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setOpen((v) => !v)}
          className={cn(
            "site-menu-toggle flex h-11 w-11 items-center justify-center rounded-md transition-colors xl:hidden",
            scrolled && "is-scrolled",
          )}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.ul
            id="mobile-navigation"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.24, ease: "easeOut" }}
            className="site-mobile-nav flex flex-col gap-1 overflow-hidden border-t px-5 py-3 text-xs uppercase tracking-[0.2em] xl:hidden"
          >
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="link-cinema block rounded-xl px-3 py-3"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
}
