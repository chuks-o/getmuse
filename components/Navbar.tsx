import Link from "next/link";
import NavItems from "./NavItems";

const Navbar = () => (
  <nav className="border-b bg-background">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex h-16 items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/" className="text-2xl font-bold text-foreground hover:text-foreground/80 transition-colors font-sans">
            Muse
          </Link>
        </div>
        <NavItems />
      </div>
    </div>
  </nav>
);


export default Navbar;
