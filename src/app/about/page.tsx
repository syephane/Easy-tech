/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React from "react";

import TeamMember from "../components/TeamMember";

export default function AboutPage() {
  // NOTE: I used placeholder names and images from the project's public/images folder.
  // You can replace names, bios and images with real content as needed.
  return (
    <main className="max-w-7xl mx-auto px-4 py-12">
      <section className="bg-white rounded-2xl shadow-md overflow-hidden grid grid-cols-1 md:grid-cols-3 gap-6 items-center p-6">
        <div className="md:col-span-1 flex justify-center">
          <div className="w-48 h-48 rounded-full overflow-hidden shadow-lg">
            <img
              src="/images/cora1.jpeg"
              alt="Director photo"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="md:col-span-2">
          <h1 className="text-3xl font-bold text-gray-800">
            Directeur Général
          </h1>
          <h2 className="text-xl text-primary/90 mt-2">MR KWAGNOU GEORGES</h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            EASY-TECH Service SARL est dirigée par un directeur expérimenté qui
            s'engage à fournir des solutions de haute qualité dans les domaines
            des réseaux, de la sécurité, des télécommunications et de
            l'intégration de systèmes. Notre directeur apporte une approche
            pratique et concrète à la gestion de projet, au support client et à
            la stratégie technologique.
          </p>
        </div>
      </section>

      <section>
        <div className="flex items-center justify-between mt-6">
          <div>
            <h3 className="text-2xl font-semibold text-gray-800">Our Team</h3>
            <p className="text-grey-600 mt-4">
                Notre team Easy-Tech
            </p>
          </div>
        </div>

        <div className="grid mt-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <TeamMember
            name="Alice Mbarga"
            role="Network Engineer"
            bio="Specialist in LAN/WAN design and cabling."
            image="/images/ip_phone.jpg"
            // socials={{ linkedin: "#" }}
          />

          <TeamMember
            name="Paul Nouv"
            role="Security Specialist"
            bio="Vidéosurveillance et systèmes d'alarme avancés."
            image="/images/secu1.jpg"
            // socials={{ facebook: "#" }}
          />

          <TeamMember
            name="Jeanne K"
            role="Systems Administrator"
            bio="Administration serveur et virtualisation."
            image="/images/para1.jpg"
            // socials={{ twitter: "#" }}
          />

          <TeamMember
            name="Marc L"
            role="Technical Support"
            bio="Customer support and field maintenance."
            image="/images/video.jpg"
          />

          {/* Add more TeamMember entries as needed */}
        </div>
      </section>

      <section
        id="contact"
        className="mt-12 bg-white rounded-2xl p-8 shadow-md"
      >
        <h3 className="text-2xl font-semibold text-gray-800">ABOUT US</h3>
        <p className="text-gray-600 mt-2">
          Depuis sa création en 2012,EASY-TECH SERVICES SARL est une structure
          spécialisée dans les services personnalisés en réseau,
          télécommunication, sécurité, système, vidéosurveillance, A l'écoute
          constante des entreprises,particuliers et des technologies , EASY-TECH
          SERVICES SARL préconise des solutions innovantes et apporte les
          compétences nécessaires à leur mise en place.
        </p>
        <p className="text-gray-600 mt-2">
          EASY-TECH s'engage à vous fournir une technologie de pointe (VoIP,
          Domotique, Vidéosurveillance IP) soutenue par un service client
          réactif. Nous sommes votre partenaire technique pour un avenir où vos
          systèmes sont toujours sécurisés, toujours alimentés et toujours
          opérationnels.
        </p>
      </section>
    </main>
  );
}
