"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { authClient } from "@/lib/auth-client";
import { FaUserCircle } from "react-icons/fa";
import { usePathname } from "next/navigation";

export default function MainNavbar({ poppins }) {

  const pathname = usePathname();

  const { data: session } = authClient.useSession()

  console.log(session)

  const user = session?.user

  console.log(user)

  const [isOpen, setIsOpen] = useState(false);

  const mainNavLinks = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "My Profile", href: "/my-profile" },
  ];
  const authNavLinks = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" }
  ];

  const navLinks = user ? mainNavLinks : authNavLinks;



  return (
    <nav
      className={`${poppins} sticky top-0 z-50 bg-base-100 shadow-sm`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#F77013]">
                SunCart
              </h2>
              <p className="text-[10px] md:text-xs font-medium tracking-wide text-[#AE8854]">
                Summer Essential Store
              </p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`text-lg font-semibold px-4 py-2 rounded-lg transition ${isActive
                        ? "bg-[#F77013] text-white"
                        : "text-[#F77013] hover:text-orange-700"
                      }`}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center gap-4">
            {
              user ? (<Link
                href="/my-profile"
                className="text-lg font-semibold px-5 py-2 flex gap-2 justify-center items-center rounded-full bg-orange-100  text-[#F77013]"
              >
                <span><FaUserCircle /></span>
                <span>{user.name}</span>
              </Link>) : (<Link
                href="/login"
                className="text-lg font-semibold px-5 py-2  text-[#F77013]"
              >
                Login
              </Link>)
            }

            {
              user ? (<Link
                onClick={async () => await authClient.signOut()}
                href="/login"
                className="text-[#F77013] px-5 py-2 rounded-lg text-lg font-semibold hover:bg-orange-700 transition"
              >
                Sign Out
              </Link>) : (<Link
                href="/register"
                className="bg-[#F77013] text-white px-5 py-2 rounded-lg text-lg font-semibold hover:bg-orange-600 transition"
              >
                Register
              </Link>)
            }
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-[#F77013]"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-5">
            <ul className="flex flex-col gap-4 border-t pt-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block text-[#F77013] font-semibold"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              {/* className="text-[#F77013] font-semibold" */}
              <div className="flex flex-col gap-3 pt-3">
                {
                  user ? (<Link
                    href="/my-profile"
                    className="font-semibold px-5 py-2 flex gap-2 justify-center items-center rounded-full bg-orange-100  text-[#F77013]"
                  >
                    <span><FaUserCircle /></span>
                    <span>{user.name}</span>
                  </Link>) : (<Link
                    href="/login"
                    className="text-[#F77013] font-semibold"
                  >
                    Login
                  </Link>)
                }
                {
                  user ? (<Link
                    onClick={async () => await authClient.signOut()}
                    href="/login"
                    className="text-[#F77013] font-semibold"
                  >
                    Sign Out
                  </Link>) : (<Link
                    href="/register"
                    className="bg-[#F77013] text-white px-5 py-2 rounded-lg text-lg font-semibold hover:bg-orange-600 transition"
                  >
                    Register
                  </Link>)
                }
              </div>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}