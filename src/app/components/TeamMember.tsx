"use client";
import React from "react";

interface SocialLinks {
  linkedin?: string;
  facebook?: string;
  twitter?: string;
}

interface TeamMemberProps {
  name: string;
  role: string;
  bio?: string;
  image?: string;
  socials?: SocialLinks;
}

const TeamMember: React.FC<TeamMemberProps> = ({
  name,
  role,
  bio,
  image = "/images/logoeasytech.png",
  socials,
}) => {
  return (
    <article className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center">
      <div className="w-28 h-28 rounded-full overflow-hidden mb-4">
        <img
          src={image}
          alt={`${name} photo`}
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
      <p className="text-sm text-primary/90 mb-2">{role}</p>
      {bio && <p className="text-sm text-gray-600">{bio}</p>}

      {socials && (
        <div className="flex space-x-3 mt-4">
          {socials.linkedin && (
            <a
              href={socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-gray-500 hover:text-gray-700"
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 3A2 2 0 0121 5v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14zM8.5 17v-6.5H6V17h2.5zm-1.25-7.5a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5zM18 17v-3.5c0-2.2-1.2-3-2.25-3s-1.75.95-2 1.5V17h2.5v-3.2c0-.65.18-1.2.98-1.2s1.02.8 1.02 1.2V17H18z" />
              </svg>
            </a>
          )}
          {socials.facebook && (
            <a
              href={socials.facebook}
              target="_blank"
              rel="noreferrer"
              className="text-gray-500 hover:text-gray-700"
              aria-label="Facebook"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22 12a10 10 0 10-11.5 9.9v-7H8.5v-2.9h2v-2.2c0-2 1.2-3.1 3-3.1.9 0 1.8.16 1.8.16v2h-1c-1 0-1.3.63-1.3 1.3v1.8h2.2l-.35 2.9h-1.85V22A10 10 0 0022 12z" />
              </svg>
            </a>
          )}
          {socials.twitter && (
            <a
              href={socials.twitter}
              target="_blank"
              rel="noreferrer"
              className="text-gray-500 hover:text-gray-700"
              aria-label="Twitter"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22 5.92a8.2 8.2 0 01-2.36.65 4.1 4.1 0 001.8-2.27 8.22 8.22 0 01-2.6.99A4.11 4.11 0 0012.1 7a11.66 11.66 0 01-8.46-4.28 4.1 4.1 0 001.27 5.48A4.07 4.07 0 012.8 9.71v.05a4.11 4.11 0 003.29 4.02 4.1 4.1 0 01-1.85.07 4.11 4.11 0 003.83 2.85A8.25 8.25 0 012 18.41 11.64 11.64 0 008.29 20c7.54 0 11.68-6.25 11.68-11.68 0-.18-.01-.36-.02-.54A8.3 8.3 0 0022 5.92z" />
              </svg>
            </a>
          )}
        </div>
      )}
    </article>
  );
};

export default TeamMember;
