import logoWhite from "@/assets/iconic-investors-logo-white.png";

export default function Footer() {
  return (
    <footer className="bg-foreground py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <img src={logoWhite} alt="Iconic Partners" className="h-20" />
        <p className="text-sm text-background/40 text-center md:text-right">
          © {new Date().getFullYear()} Iconic Partners Pty Ltd | AFSL 450822 | ACN 167 051 470
        </p>
      </div>
    </footer>
  );
}
