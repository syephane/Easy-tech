import React from "react";
import ServiceCard from "../components/ServiceCard";
import AnimatedContainer from "../components/AnimatedContainer";

export default function PRODUCTPAGE() {
  const services = [
    {
      title: "INTERNET SERVICE PROVIDER",
      description:
        "Fourniture de connexions Internet haut débit, fiables et souvent symétriques , essentielles pour les entreprises qui dépendent d'une performance constante",
      image: "/images/cablage_structure_reseaux_2019.jpg",
      bullets: [
        "Débit Symétrique : Vitesse d'envoi égale à la vitesse de réception.",
        "Haute Disponibilité : Connexion stable conçue pour un usage intensif.",
        "Usage Pro : Optimisé pour le transfert de données critiques et la continuité d'activité.",
      ],
    },
    {
      title: "SECURITE INFORMATIQUE",
      description:
        "Sécurisation de votre réseau (pare-feu, antivirus et anti-ransomware) pour prévenir les intrusions numériques et le cryptage de vos données",
      image: "/images/securite.jpg",
      bullets: [
        "AudiProtection Périmétrique : Installation de pare-feux pour filtrer les entrées/sorties.t et Sécurisation :Analyse de vos vulnérabilités et renforcement du réseau.",
        "Protection Périmétrique : Installation de pare-feux pour filtrer les entrées/sorties.",
        "Lutte Anti-Virus : Déploiement de solutions robustes pour prévenir les intrusions numériques.",
        "Intégrité des Données : Protection contre le vol et la corruption de fichiers.",
      ],
    },
    {
      title: "Telephony IP",
      description:
        "Solutions VoIP professionnelles et systèmes téléphoniques IP pour les entreprises de toutes tailles.",
      image: "/images/ip_phone.jpg",
      bullets: [
        "Infrastructure unifiée : Plus besoin de câblage téléphonique dédié. Vos téléphones se branchent directement sur le réseau Internet de l'entreprise.",
        "Qualité HD : Une clarté de voix supérieure pour vos échanges professionnels.",
        "Fonctionnalités avancées : Profitez de services modernes (Standard automatique, messagerie vers email, conférence) souvent inaccessibles ou coûteux sur le réseau RTC classique.",
      ],
    },
    {
      title: "Home & Building Automation",
      description:
        "Domotique et automatisation du bâtiment : éclairage, climatisation et solutions de contrôle à distance.",
      image: "/images/domotique.jpg",
      bullets: [
        "Gestion de l'Éclairage : Installation de détecteurs de présence et de variateurs. Ne laissez plus jamais les lumières allumées inutilement dans les bureaux vides.",
        "Contrôle Total à Distance : Une application unique sur votre tablette ou smartphone pour tout gérer (volets, lumières, clim), que vous soyez dans votre canapé ou à l'autre bout du monde.",
        "Éclairage Intelligent : Créez des scénarios d'ambiance et éteignez tout en un clic.",
      ],
    },
    {
      title: "Energy Solutions",
      description:
        "Optimisation énergétique et intégrations d'énergies renouvelables pour réduire les coûts d'exploitation.",
      image: "/images/energy.jpg",
      bullets: [
        "Solutions de Back-up (Secours) : Installation d'onduleurs et de parcs de batteries pour assurer le maintien opérationnel de vos serveurs, routeurs et caméras lors des coupures du réseau public",
        "Centrales Solaires Autonomes : Dimensionnement et pose de panneaux photovoltaïques pour alimenter vos équipements de jour comme de nuit, réduisant votre dépendance au réseau local.",
        "Systèmes Hybrides : Gestion intelligente entre le solaire, les batteries et le réseau électrique.",
        "Continuité d'Activité : Vos serveurs et votre connexion Internet restent allumés, même sans courant secteur.",
      ],
    },
    {
      title: "VIDEO SURVEILLANCE",
      description:
        "EASY-TECH propose différents types d'appareils de télésurveillance et aussi de nombreuse formules de télésurveillance.Nous vous permettons de garder toujours un regard sur votre activités et vos locaux.",
      image: "/images/video.jpg",
      bullets: [
        "Formules d'Accès : Nous vous permettons de garder toujours un regard sur votre activités et vos locaux grâce à de nombreuses formules de télésurveillance, incluant l'accès à distance sécurisé et la consultation des historiques.",
        "Consultation et Matériel : Nous proposons différents types d'appareils de télésurveillance (caméras IP intelligentes) sélectionnés pour leur fiabilité et leur qualité d'image (HD/4K).",
        "Stockage sécurisé : Enregistreurs numériques (NVR) avec sauvegarde optimisée.",
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

     
    </main>
  );
}
