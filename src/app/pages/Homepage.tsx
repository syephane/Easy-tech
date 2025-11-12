"use client";
import React from "react";
import AnimatedContainer from "../components/AnimatedContainer";
import Container from "../components/container";

const features = [
  {
    title: "MISE A JOUR REGULIERES",
    description: "Nos services et equipement sont mis à jour régulièrement .",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-12 h-12 mx-auto text-blue-500"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.125-.504 1.125-1.125V14.25m-17.25 4.5v-9m17.25 9v-9m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V5.625c0-.621-.504-1.125-1.125-1.125zM12 4.875v10.125"
        />
      </svg>
    ),
  },
  {
    title: "Assistance 24/7",
    description: "Notre équipe est à votre disposition en permanence.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-12 h-12 mx-auto text-blue-500"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: "Secure Payments",
    description: "Shop with confidence using our secure payment methods.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-12 h-12 mx-auto text-blue-500"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H4.5a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
        />
      </svg>
    ),
  },
];

const aboutImages = [
  "/images/about-1.jpg",
  "/images/about-2.jpg",
  "/images/about-3.jpg",
  "/images/about-4.jpg",
  "/images/about-5.jpg",
  "/images/about-6.jpg",
  "/images/about-7.jpg",
  "/images/about-8.jpg",
  "/images/about-9.jpg",
  "/images/about-10.jpg",
  "/images/about-11.jpg",
  "/images/about-12.jpg",
];

function Homepage() {
  return (
    <div>
      <div>
        <Container />
      </div>
      <div className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              CELA FAIT PLUS DE 13 ANS QUE NOUS ACCOMPAGNONS NOS CLIENTS
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              C'est une affirmation de longévité, de confiance et d'engagement
              envers votre clientèle.
            </p>
            <div className="mt-10">
              <div className="stats shadow">
                <div className="stat">
                  <div className="stat-figure text-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="inline-block h-8 w-8 stroke-current"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      ></path>
                    </svg>
                  </div>
                  <div className="stat-title">PROBLEM RESOLU</div>
                  <div className="stat-value text-primary">100%</div>
                </div>

                <div className="stat">
                  <div className="stat-figure text-secondary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="inline-block h-8 w-8 stroke-current"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      ></path>
                    </svg>
                  </div>
                  <div className="stat-title">NOS PARTENER</div>
                  <div className="stat-value text-secondary">50</div>
                  <div className="stat-desc">PLUS DE 50 COLABORATION </div>
                </div>

                <div className="stat">
                  <div className="stat-figure text-secondary">
                    <div className="avatar avatar-online">
                      <div className="w-16 rounded-full">
                        <img src="https://img.daisyui.com/images/profile/demo/anakeen@192.webp" />
                      </div>
                    </div>
                  </div>
                  <div className="stat-value">100%</div>
                  <div className="stat-title">CLIENT/COMAPANY SATISFAIRE</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2
              id="our-features-section"
              className="text-3xl font-extrabold text-gray-900 sm:text-4xl"
            >
              Our Features
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              DÉCOUVREZ LES AVANTAGES DE TRAVAILLER AVEC NOUS.
            </p>
          </div>

          <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, i) => (
              <AnimatedContainer key={feature.title}>
                <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                  {feature.icon}
                  <h3 className="mt-5 text-lg font-medium text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-base text-gray-500">
                    {feature.description}
                  </p>
                </div>
              </AnimatedContainer>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedContainer>
            <div className="text-center">
              <h2
                id="about-us-section"
                className="text-3xl font-extrabold text-gray-900 sm:text-4xl"
              >
                Our Partners
              </h2>
              <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {aboutImages.map((src, i) => (
                  <AnimatedContainer key={i} animationDelay={100 + i * 50}>
                    <div className="bg-gray-200 h-32 w-full rounded-lg overflow-hidden">
                      <img
                        src={src}
                        alt={`About us image ${i + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </AnimatedContainer>
                ))}
              </div>
            </div>
          </AnimatedContainer>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
