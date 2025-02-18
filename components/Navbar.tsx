"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Link from "next/link";
import { MenuIcon } from "lucide-react";
import { Button } from "./ui/button";
import { MaxWidthWrapper } from "./MaxWidthWrapper";

const LINKS = [
  { url: "/", label: "Home" },
  { url: "/cars", label: "Cars" },
  { url: "/about", label: "About" },
  { url: "/why-us", label: "Why Us" }, // Fixed invalid URL
  { url: "/testimonials", label: "Testimonials" },
  { url: "/contact", label: "Contact" },
];

const Navbar = () => {
  const currentPath = usePathname();

  return (
    <>
      <div className="py-4 shadow-lg hidden lg:block">
        <MaxWidthWrapper>
          <nav className="flex justify-between items-center">
            <Image src="/icons/logo.svg" width={120} height={120} alt="Logo" />{" "}
            {/* Fixed image path */}
            <ul className="flex gap-x-6 items-center">
              {LINKS.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.url} // Fixed href
                    className={`text-sm text-foreground ${
                      currentPath === link.url && "text-primary font-semibold"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </MaxWidthWrapper>
      </div>

      <Sheet>
        <SheetTrigger asChild dir="right">
          <div className="py-4 shadow-lg lg:hidden flex justify-between items-center">
            <Image
              src="/icons/logo.svg"
              width={100}
              height={100}
              alt="car Logo"
              className="ml-4"
            />
            <div className="flex items-center gap-x-4">
              <Button variant="ghost" aria-label="Open Menu">
                <MenuIcon
                  style={{ width: "30px", height: "30px", color: "black" }}
                />
              </Button>
            </div>
          </div>
        </SheetTrigger>
        <SheetContent side="left" className="flex flex-col h-full">
          <div className="flex flex-col space-y-4 mt-6">
            {LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.url}
                className={`${
                  currentPath === link.url
                    ? "bg-primary-foreground text-primary"
                    : "text-gray-400"
                } block p-4 text-lg font-semibold  hover:bg-primary-foreground hover:text-primary rounded`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default Navbar;
