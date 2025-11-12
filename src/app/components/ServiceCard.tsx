"use client";
import React from "react";
import AnimatedContainer from "./AnimatedContainer";

interface ServiceCardProps {
  title: string;
  description: string;
  image?: string;
  bullets?: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  image = "/images/wallpaper.png",
  bullets = [],
}) => {
  // WhatsApp contact number (Cameroon) - change if you prefer another number
  const waNumber = "237653021608";
  const waMessage = `Bonjour, je souhaite demander un devis pour : ${title}. Merci.`;
  const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(
    waMessage
  )}`;
  return (
    <AnimatedContainer className="h-full" animationDelay={120}>
      <article className="h-full bg-white rounded-2xl p-6 shadow-md flex flex-col">
        <div className="rounded-lg overflow-hidden h-44 mb-4">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>

        <h4 className="text-lg font-semibold text-gray-800">{title}</h4>
        <p className="text-sm text-gray-600 mt-2 flex-0">{description}</p>

        {bullets.length > 0 && (
          <ul className="mt-4 text-sm text-gray-600 space-y-2 flex-1">
            {bullets.map((b, i) => (
              <li key={i} className="flex items-start">
                <span className="mr-2 text-primary/90">•</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-6">
          <a
            href={waUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-primary text-white px-4 py-2 rounded-full text-sm hover:opacity-95"
          >
            Demander un devis
          </a>
        </div>
      </article>
    </AnimatedContainer>
  );
};

export default ServiceCard;
