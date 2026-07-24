"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Leaf } from "lucide-react";
import Image from "next/image";

interface NavbarProps {
  overHero?: boolean;
}

export default function Navbar({ overHero = false }: NavbarProps) {
  const pathname = usePathname();

  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    onScroll();

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const light = overHero && !scrolled;

  const navLinks = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "services",
      href: "/services",
    },
    // {
    //   label: "About & Impact",
    //   href: "/about",
    // },
  ];

  return (
    <div
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || !overHero
          ? "bg-(--cream)/85 backdrop-blur-md border-b border-border/60"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/logo-3.png"
            alt="Voice of Dryland Soils"
            width={220}
            height={100}
            className="h-20 w-auto"
            priority
          />
        </Link>
        {/* Desktop Navigation */}
        <nav
          className={`hidden items-center gap-9 text-md md:flex ${
            light ? "text-cream/90" : "text-foreground/80"
          }`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition-opacity hover:opacity-100 ${
                pathname === link.href
                  ? "border-b border-current pb-0.5 opacity-100"
                  : "opacity-80"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <Link
          href="/services#contact"
          className={`hidden rounded-full px-5 py-2.5 text-sm transition-all md:inline-flex ${
            light
              ? "bg-cream/95 text-forest hover:bg-cream"
              : "bg-forest text-cream hover:bg-forest/90"
          }`}
        >
          Partner with us
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className={`md:hidden ${light ? "text-cream" : "text-foreground"}`}
          aria-label="Toggle Menu"
        >
          <div className="mb-1.5 h-px w-6 bg-current" />
          <div className="mb-1.5 h-px w-6 bg-current" />
          <div className="ml-auto h-px w-4 bg-current" />
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="border-t border-border/60 bg-cream md:hidden">
          <div className="flex flex-col gap-4 px-6 py-5 text-sm">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={
                  pathname === link.href ? "font-medium text-forest" : ""
                }
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/services#contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-forest px-5 py-2.5 text-cream"
            >
              Partner with us
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
