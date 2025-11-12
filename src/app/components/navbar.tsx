"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Navbar() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const pathname = usePathname() || "/";
  const isActive = (href: string) => {
    // exact match or prefix match for section routes (e.g. /realisation/...)
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  };

  return (
    <div
      className="p-1 sticky top-0 z-50"
      style={{
        background:
          "linear-gradient(90deg, #0b3d91 0%, #4f7bd1 33%, #22c55e 66%, #7dd3a6 100%)",
      }}
    >
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link
                  href="/about"
                  className={isActive("/about") ? "font-bold " : ""}
                  aria-current={isActive("/about") ? "page" : undefined}
                >
                  A PROPOS DE NOUS
                </Link>
              </li>
              <li>
                <Link
                  href="/solution"
                  className={isActive("/solution") ? "font-bold " : ""}
                  aria-current={isActive("/solution") ? "page" : undefined}
                >
                  PRODUITS
                </Link>
              </li>
              {/* <li>
                <Link
                  href="/realisation"
                  className={isActive("/realisation") ? "font-bold " : ""}
                  aria-current={isActive("/realisation") ? "page" : undefined}
                >
                  REALISATION
                </Link>
              </li> */}
            </ul>
          </div>
          <Link
            href="/"
            className="flex items-center gap-3 btn btn-ghost text-xl"
          >
            <img
              src="/images/Gemini_Generated_Image_gnz94dgnz94dgnz9.png"
              alt="Easy Tech logo"
              className="h-10 w-8 object-contain"
            />
            EASY TECH
          </Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal ">
            <li>
              <Link
                href="/about"
                className={isActive("/about") ? "font-bold text-white px-3 py-1 rounded" : "text-white/90 px-3 py-1"}
                aria-current={isActive("/about") ? "page" : undefined}
              >
                A PROPOS DE NOUS
              </Link>
            </li>
            <li>
              <Link
                href="/solution"
                className={isActive("/solution") ? "font-bold text-white px-3 py-1 rounded" : "text-white/90 px-3 py-1"}
                aria-current={isActive("/solution") ? "page" : undefined}
              >
                PRODUITS
              </Link>
            </li>
            {/* <li>
              <Link
                href="/realisation"
                className={isActive("/realisation") ? "font-bold text-white px-3 py-1 rounded" : "text-white/90 px-3 py-1"}
                aria-current={isActive("/realisation") ? "page" : undefined}
              >
                REALISATION
              </Link>
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
