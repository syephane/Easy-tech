"use client";
import React, { useEffect } from "react";
import Link from "next/link";

function Navbar() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-gradient-to-r from-primary to-secondary p-1 sticky top-0 z-50">
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
                <Link href="/about">A PROPOS DE NOUS</Link>
              </li>
              <li>
                <Link href="/solution">SOLUTION</Link>
              </li>
              <li>
                <Link href="/realisation">REALISATION</Link>
              </li>
            </ul>
          </div>
          <Link href="/" className="btn btn-ghost text-xl">
            EASY TECH
          </Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal ">
            <li>
              <Link href="/about">A PROPOS DE NOUS</Link>
            </li>
            <li>
              <Link href="/solution">SOLUTION</Link>
            </li>
            <li>
              <Link href="/realisation">REALISATION</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
