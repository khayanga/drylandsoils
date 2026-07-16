import { ArrowRight, Leaf, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-ink text-cream/80">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-2.5 text-cream mb-1 ">
              <Link href="/" className="mb-1 inline-block">
                <Image
                  src="/logo-2.png"
                  alt="Voice of Dryland Soils"
                  width={220}
                  height={150}
                  className="h-48 w-auto bg-sand p-2 rounded-lg"
                  priority
                />
              </Link>
            </div>
            <p className="max-w-sm text-cream/70 leading-relaxed">
              A social enterprise dedicated to the restoration of Africa's
              dryland soils through science, advocacy, and the wisdom of the
              farmers who steward them.
            </p>
          </div>
          <div className="md:col-span-3">
            <p className="text-cream text-sm mb-5">Explore</p>
            <ul className="space-y-3 text-sm">
              <li>
                <Link className="hover:text-cream transition-colors" href="/">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-cream transition-colors"
                  href="/solutions"
                >
                  Solutions
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-cream transition-colors"
                  href="/about"
                >
                  About & Impact
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-cream transition-colors"
                  href="/about#contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="md:col-span-4">
            <p className="text-cream text-sm mb-5">Get in touch</p>
            <a
              href="mailto:hello@voiceofdrylandsoils.org"
              className="inline-flex items-center gap-2 text-cream hover:text-sand transition-colors mb-4"
            >
              <Mail className="w-4 h-4" strokeWidth={1.5} />
              hello@voiceofdrylandsoils.org
            </a>
            <p className="text-cream/60 text-sm">
               Nairobi, Kenya
              <br />
              Regional teams · Kenya 
            </p>
            <Link
              href="/partnerships"
              className="mt-6 inline-flex items-center gap-2 text-sm text-cream border-b border-cream/40 hover:border-cream pb-1"
            >
              Start a partnership <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-cream/10 flex flex-wrap justify-between gap-4 text-xs text-cream/50">
          <p>
            © {new Date().getFullYear()} The Voice of Dryland Soils. All rights
            reserved.
          </p>
          <p>Regenerating 1,000 hectares by 2030.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
