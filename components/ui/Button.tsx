import Link from "next/link";
import { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost" | "white";
  size?: "sm" | "md" | "lg";
  withArrow?: boolean;
  children: ReactNode;
  className?: string;
}

// Relume-style "pressed button": solid fill, dark border, offset hard shadow
const variants = {
  primary:
    "bg-brand-lavender-mid text-foreground border border-black/80 shadow-[2px_2px_0_0_rgba(0,0,0,0.85)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0_0_rgba(0,0,0,0.85)]",
  secondary:
    "bg-[#F2F2F2] text-foreground border border-black/80 shadow-[2px_2px_0_0_rgba(0,0,0,0.85)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0_0_rgba(0,0,0,0.85)]",
  outline:
    "bg-transparent text-foreground border border-current hover:bg-foreground hover:text-white",
  ghost: "bg-transparent text-foreground hover:bg-black/5",
  white:
    "bg-white text-foreground border border-black/80 shadow-[2px_2px_0_0_rgba(0,0,0,0.85)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0_0_rgba(0,0,0,0.85)]",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-2.5 text-sm md:text-base",
  lg: "px-6 py-3 text-base md:text-lg",
};

export default function Button({
  href,
  variant = "primary",
  size = "md",
  withArrow = false,
  children,
  className,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-[8px] font-display font-semibold whitespace-nowrap",
    "transition-all duration-150 ease-smooth",
    "min-h-[44px]",
    variants[variant],
    sizes[size],
    className
  );

  const content = (
    <>
      <span>{children}</span>
      {withArrow && (
        <ArrowRight
          size={size === "lg" ? 20 : 16}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={cn(classes, "group")}>
        {content}
      </Link>
    );
  }

  return (
    <button className={cn(classes, "group")} {...props}>
      {content}
    </button>
  );
}
