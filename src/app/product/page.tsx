import React from "react";
import ServiceCard from "../components/ServiceCard";
import AnimatedContainer from "../components/AnimatedContainer";

export default function PRODUCTPAGE() {
  const services = [
    {
      title: "Network & Cabling",
      description:
        "Conception et installation de câblage structuré, LAN/WAN et fibre optique pour une connectivité fiable.",
      image: "/images/cablage_structure_reseaux_2019.jpg",
      bullets: [
        "Câblage structuré (Cat6/Cat6a)",
        "Liaisons fibre et terminaison",
        "Audits réseau",
      ],
    },
    {
      title: "Security & CCTV",
      description:
        "Systèmes de vidéosurveillance, alarmes anti-intrusion et contrôle d'accès pour sécuriser les locaux.",
      image: "/images/securite.jpg",
      bullets: [
        "Caméras IP et NVR",
        "Surveillance à distance",
        "Intégration d'alarmes",
      ],
    },
    {
      title: "Telephony & VoIP",
      description:
        "Solutions VoIP professionnelles et systèmes téléphoniques IP pour les entreprises de toutes tailles.",
      image: "/images/ip_phone.jpg",
      bullets: [
        "Configuration de PBX",
        "Trunking SIP",
        "Communications unifiées",
      ],
    },
    {
      title: "Home & Building Automation",
      description:
        "Domotique et automatisation du bâtiment : éclairage, climatisation et solutions de contrôle à distance.",
      image: "/images/domotique.jpg",
      bullets: [
        "Automatisation de l'éclairage",
        "Gestion énergétique",
        "Applications de contrôle à distance",
      ],
    },
    {
      title: "Energy Solutions",
      description:
        "Optimisation énergétique et intégrations d'énergies renouvelables pour réduire les coûts d'exploitation.",
      image: "/images/energy.jpg",
      bullets: [
        "Audits énergétiques",
        "Intégration solaire",
        "Systèmes de secours par batterie",
      ],
    },
    {
      title: "Audio/Video & Multimedia",
      description:
        "Salles de conférence, systèmes PA et installations multimédia pour espaces professionnels.",
      image: "/images/video.jpg",
      bullets: [
        "Installation de salles de conférence",
        "Projecteurs et écrans",
        "Systèmes de sonorisation (PA)",
      ],
    },
  ];

  return (
    <main className="max-w-7xl mx-auto px-4 py-12">
      <AnimatedContainer>
        <section className="bg-gradient-to-r from-green-400 to-green-200 rounded-2xl p-8 shadow-sm">
          <div className="md:flex md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-800">
                Nos produits et services
              </h1>
              <p className="text-gray-600 mt-3 max-w-2xl">
                EASY-TECH propose une gamme complète de solutions — réseau,
                sécurité, téléphonie, domotique et optimisation énergétique.
                Vous trouverez ci-dessous un aperçu détaillé de nos principaux
                services. Cliquez sur « Demander un devis » pour commencer la
                conversation.
              </p>
            </div>

            <div className="mt-6 md:mt-0">
              <a
                href={`https://wa.me/237653021608?text=${encodeURIComponent(
                  "Bonjour, je souhaite obtenir un devis pour vos services."
                )}`}
                target="_blank"
                rel="noreferrer"
                className="inline-block bg-primary text-white px-5 py-3 rounded-full shadow"
              >
                Demander un devis
              </a>
            </div>
          </div>
        </section>
      </AnimatedContainer>

      <section className="mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <ServiceCard
              key={i}
              title={s.title}
              description={s.description}
              image={s.image}
              bullets={s.bullets}
            />
          ))}
        </div>
      </section>

      <section
        id="contact"
        className="mt-12 bg-white rounded-2xl p-8 shadow-md"
      >
        <h3 className="text-2xl font-semibold text-gray-800">Contactez-nous</h3>
        <p className="text-gray-600 mt-2">
          Parlez-nous de votre projet et nous préparerons un devis sur mesure.
        </p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 border rounded-lg">
            <h4 className="font-semibold">Téléphone</h4>
            <p className="text-gray-600 mt-1">
              (+237) 653 02 16 08 / 699 84 94 30
            </p>
          </div>
          <div className="p-4 border rounded-lg">
            <h4 className="font-semibold">Courriel</h4>
            <p className="text-gray-600 mt-1">info@easy-techsarl.com</p>
          </div>
          <div className="p-4 border rounded-lg">
            <h4 className="font-semibold">Bureau</h4>
            <p className="text-gray-600 mt-1">Douala, Cameroun</p>
          </div>
        </div>
      </section>
    </main>
  );
}
