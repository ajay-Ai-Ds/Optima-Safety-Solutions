import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
  light?: boolean; // If true, rendering logo styled for dark backgrounds (white text)
}

export default function Logo({ className = "", iconOnly = false, light = false }: LogoProps) {
  return (
    <Link href="/" className={`flex items-center gap-2 sm:gap-3 select-none group flex-shrink-0 ${className}`} aria-label="Optima Safety Solutions Home">
      {/* Optima Safety Solutions Logo Icon */}
      <div className="relative flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-lg overflow-hidden transition-transform duration-300 group-hover:scale-105">
        <Image
          src="/images/hero/logo-icon-v4.png"
          alt="Optima Safety Solutions Logo"
          fill
          sizes="(max-width: 640px) 40px, (max-width: 768px) 48px, (max-width: 1024px) 56px, 64px"
          className="object-contain"
          priority
        />
      </div>

      {/* Corporate Logo Typography */}
      {!iconOnly && (
        <div className="flex flex-col leading-tight justify-center flex-shrink-0">
          <span
            className={`text-[15px] sm:text-lg md:text-xl lg:text-2xl font-extrabold tracking-tight whitespace-nowrap transition-colors duration-200 ${light ? "text-white" : "text-primary-700"
              }`}
          >
            Optima Safety Solutions
          </span>
          <span
            className={`text-[8px] sm:text-[9px] md:text-[10px] lg:text-[11px] font-bold uppercase tracking-[0.1em] sm:tracking-[0.15em] whitespace-nowrap transition-colors duration-200 ${light ? "text-slate-300" : "text-slate-500"
              }`}
          >
            Safety Nets & Invisible Grills
          </span>
        </div>
      )}
    </Link>
  );
}


