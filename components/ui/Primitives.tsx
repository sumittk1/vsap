import { ReactNode, HTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ArrowRight, ImageIcon } from "lucide-react";

export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={cn("container-max", className)}>{children}</div>;
}

interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  className?: string;
  bg?: "white" | "lavender" | "purple" | "coral" | "gray" | "navy";
}

const bgMap = {
  white: "bg-white",
  lavender: "bg-brand-lavender",
  purple: "bg-brand-purple text-white",
  coral: "bg-brand-coral text-white",
  gray: "bg-[#F2F2F2]",
  navy: "bg-brand-navy text-white",
};

export function Section({ children, className, bg = "white", ...props }: SectionProps) {
  return (
    <section
      className={cn("py-16 md:py-24 lg:py-28", bgMap[bg], className)}
      {...props}
    >
      {children}
    </section>
  );
}

export function Eyebrow({
  children,
  className,
  light = false,
}: {
  children: ReactNode;
  className?: string;
  light?: boolean;
}) {
  return (
    <p
      className={cn(
        "text-sm font-bold mb-3",
        light ? "text-white" : "text-foreground",
        className
      )}
    >
      {children}
    </p>
  );
}

export function ImagePlaceholder({
  className,
  ratio = "aspect-[4/3]",
  label,
  src,
}: {
  className?: string;
  ratio?: string;
  label?: string;
  src?: string;
}) {
  return (
    <div
      className={cn(
        "img-placeholder rounded-card w-full overflow-hidden relative bg-[#F2F2F2]",
        ratio,
        className
      )}
    >
      {src ? (
        <img src={src} alt={label || "Visual"} className="object-cover w-full h-full" />
      ) : (
        <>
          <ImageIcon size={48} strokeWidth={1.25} />
          {label && (
            <span className="absolute bottom-3 left-3 text-xs font-medium text-brand-purple/60 bg-white/60 px-2 py-1 rounded">
              {label}
            </span>
          )}
        </>
      )}
    </div>
  );
}

export function ArrowLink({
  href,
  children,
  className,
  light = false,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  light?: boolean;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center gap-1.5 font-display font-semibold text-sm",
        light ? "text-white" : "text-foreground",
        className
      )}
    >
      {children}
      <ArrowRight
        size={16}
        className="transition-transform duration-300 group-hover:translate-x-1.5"
      />
    </Link>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "center" | "left";
  light?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl mb-12 md:mb-16",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {eyebrow && <Eyebrow light={light}>{eyebrow}</Eyebrow>}
      <h2 className={cn("text-h2 mb-4", light && "text-white")}>{title}</h2>
      {description && (
        <p className={cn("text-body-lg", light ? "text-white/75" : "text-muted")}>
          {description}
        </p>
      )}
    </div>
  );
}
