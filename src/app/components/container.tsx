/* eslint-disable @next/next/no-img-element */
import React from "react";
import AnimatedContainer from "../components/AnimatedContainer";
import Link from "next/link";
function Container() {
  return (
    <div>
      <div className="min-h-[10vh] bg-gray-100 p-4">
        <AnimatedContainer>
          <h1 className="text-3xl font-bold text-center my-8 text-gray-800">
            OUR SERVICES
          </h1>
        </AnimatedContainer>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {[
            {
              title: "INTERNET SERVICE PROVIDER",
              description:
                "Fourniture de connexions Internet haut débit, fiables et souvent symétriques , essentielles pour les entreprises qui dépendent d'une performance constante.",
              images: ["/images/wallpaper.png"],
              href: "/ISP",
            },
            {
              title: "TELEPHONE SUR IP",
              description:
                "La Téléphonie sur IP est la technologie qui permet de faire passer les communications vocales par le réseau Internet de l'entreprise, plutôt que par le réseau téléphonique traditionnel (RTC)",
              images: ["/images/telephone.png"],
              href: "/TSI",
            },
            {
              title: "VIDEO SURVEILLANCE",
              description:
                "EASY-TECH propose différents types d'appareils de télésurveillance et aussi de nombreuse formules de télésurveillance.Nous vous permettons de garder toujours un regard sur votre activités et vos locaux.",
              images: ["/images/camera.png"],
              href: "/VS",
            },
            {
              title: "SECURITE INFORMATIQUE",

              description:
                "Sécurisation de votre réseau (pare-feu, antivirus et anti-ransomware) pour prévenir les intrusions numériques et le cryptage de vos données",
              images: ["/images/securite.jpg"],
              href: "/sECURITE",
            },
            {
              title: "ENERGY RENOUVELABLES",
              description:
                "Solutions d'Énergie Solaire. Mise en place de systèmes de back-up ou d'alimentation solaire autonomes pour garantir que vos serveurs et équipements réseau restent opérationnels, même en cas de coupure du réseau principal.",
              images: ["/images/energy.jpg"],
              href: "/EN",
            },
            {
              title: "LA DOMOTIQUE",
              description:
                "Installation de systèmes domotiques pour le contrôle intelligent de l'éclairage, du climat (climatisation), des accès (serrures connectées) et des systèmes audiovisuels, pour les bureaux ou les résidences de luxe.",
              images: ["images/domotique.jpg"],
              href: "/DOMOTIQUE",
            },
            {
              title: "INTERCONNEXION",
              description:
                "Optimisez la collaboration au sein de votre entreprise grâce à une infrastructure réseau unifiée. Que ce soit pour relier vos agences (VPN/ MPLS) ou interconnecter vos applications critiques, nous garantissons une transmission de données fluide, rapide et hautement sécurisée pour une continuité de service absolue. ",
              images: ["images/interconnection.png"],
              href: "/interconnetion",
            },
          ].map((card, i) => (
            <div
              key={i}
              className="bg-sky-100 p-6 rounded-xl shadow-lg w-full text-center"
            >
              <AnimatedContainer animationDelay={100 + i * 100}>
                <svg
                  className="w-20 h-10 mx-auto mb-3 text-green-500"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M4.5 20.5C3.4 20.5 2.5 19.6 2.5 18.5V6.5C2.5 5.4 3.4 4.5 4.5 4.5C5.6 4.5 6.5 5.4 6.5 6.5V18.5C6.5 19.6 5.6 20.5 4.5 20.5Z" />
                  <path d="M9.5 20.5C8.4 20.5 7.5 19.6 7.5 18.5V6.5C7.5 5.4 8.4 4.5 9.5 4.5C10.6 4.5 11.5 5.4 11.5 6.5V18.5C11.5 19.6 10.6 20.5 9.5 20.5Z" />
                  <path d="M14.5 20.5C13.4 20.5 12.5 19.6 12.5 18.5V6.5C12.5 5.4 13.4 4.5 14.5 4.5C15.6 4.5 16.5 5.4 16.5 6.5V18.5C16.5 19.6 15.6 20.5 14.5 20.5Z" />
                  <path d="M19.5 20.5C18.4 20.5 17.5 19.6 17.5 18.5V6.5C17.5 5.4 18.4 4.5 19.5 4.5C20.6 4.5 21.5 5.4 21.5 6.5V18.5C21.5 19.6 20.6 20.5 19.5 20.5Z" />
                  <style>{`path { animation: wave 1.5s infinite; } @keyframes wave { 0%, 100% { transform: rotate(0); } 50% { transform: rotate(20deg); } } path:nth-child(2) { animation-delay: 0.1s; } path:nth-child(3) { animation-delay: 0.2s; } path:nth-child(4) { animation-delay: 0.3s; }`}</style>
                </svg>
              </AnimatedContainer>
              <AnimatedContainer animationDelay={300 + i * 100}>
                <figure className="hover-gallery max-w-60">
                  {card.images.map((imgSrc, imgIndex) => (
                    <img
                      key={imgIndex}
                      src={imgSrc}
                      alt={`${card.title} image ${imgIndex + 1}`}
                    />
                  ))}
                </figure>
              </AnimatedContainer>
              <AnimatedContainer animationDelay={500 + i * 100}>
                <div className="mt-5">
                  <Link href={card.href}>
                    <h2 className="text-lg font-bold text-gray-800">
                      {card.title}
                    </h2>
                  </Link>
                  <p className="text-sm text-gray-600 mt-2">
                    {card.description}
                  </p>
                </div>
              </AnimatedContainer>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Container;
