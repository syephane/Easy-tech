import React from 'react'
import AnimatedContainer from "../components/AnimatedContainer";
function Container() {
  return (
    <div>

        <div className="min-h-screen bg-gray-100 p-4">
              <AnimatedContainer>
                <h1 className="text-3xl font-bold text-center my-8 text-gray-800">
                  OUR SERVICES
                </h1>
              </AnimatedContainer>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {[
                  {
                    title: "Classic Fedora",
                    description: "A timeless piece for any occasion.",
                    images: [
                      "https://img.daisyui.com/images/stock/daisyui-hat-1.webp",
                      "https://img.daisyui.com/images/stock/daisyui-hat-2.webp",
                      "https://img.daisyui.com/images/stock/daisyui-hat-3.webp",
                      "https://img.daisyui.com/images/stock/daisyui-hat-4.webp",
                    ],
                  },
                  {
                    title: "Summer Straw Hat",
                    description: "Stay cool and stylish in the sun.",
                    images: [
                      "https://img.daisyui.com/images/stock/daisyui-hat-1.webp",
                      "https://img.daisyui.com/images/stock/daisyui-hat-2.webp",
                      "https://img.daisyui.com/images/stock/daisyui-hat-3.webp",
                      "https://img.daisyui.com/images/stock/daisyui-hat-4.webp",
                    ],
                  },
                  {
                    title: "Cozy Beanie",
                    description: "Perfect for chilly weather.",
                    images: [
                      "https://img.daisyui.com/images/stock/daisyui-hat-1.webp",
                      "https://img.daisyui.com/images/stock/daisyui-hat-2.webp",
                      "https://img.daisyui.com/images/stock/daisyui-hat-3.webp",
                      "https://img.daisyui.com/images/stock/daisyui-hat-4.webp",
                    ],
                  },
                  {
                    title: "Stylish Beret",
                    description: "Add a touch of Parisian chic.",
                    images: [
                      "https://img.daisyui.com/images/stock/daisyui-hat-1.webp",
                      "https://img.daisyui.com/images/stock/daisyui-hat-2.webp",
                      "https://img.daisyui.com/images/stock/daisyui-hat-3.webp",
                      "https://img.daisyui.com/images/stock/daisyui-hat-4.webp",
                    ],
                  },
                  {
                    title: "Baseball Cap",
                    description: "Casual and comfortable for everyday wear.",
                    images: [
                      "https://img.daisyui.com/images/stock/daisyui-hat-1.webp",
                      "https://img.daisyui.com/images/stock/daisyui-hat-2.webp",
                      "https://img.daisyui.com/images/stock/daisyui-hat-3.webp",
                      "https://img.daisyui.com/images/stock/daisyui-hat-4.webp",
                    ],
                  },
                  {
                    title: "Elegant Top Hat",
                    description: "For those very special events.",
                    images: [
                      "https://img.daisyui.com/images/stock/daisyui-hat-1.webp",
                      "https://img.daisyui.com/images/stock/daisyui-hat-2.webp",
                      "https://img.daisyui.com/images/stock/daisyui-hat-3.webp",
                      "https://img.daisyui.com/images/stock/daisyui-hat-4.webp",
                    ],
                  },
                ].map((card, i) => (
                  <div
                    key={i}
                    className="bg-white p-4 rounded-xl shadow-lg w-full text-center"
                  >
                    <AnimatedContainer animationDelay={100 + i * 100}>
                      <svg
                        className="w-20 h-10 mx-auto mb-3 text-yellow-500"
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
                      <div className="mt-4">
                        <h2 className="text-lg font-bold text-gray-800">
                          {card.title}
                        </h2>
                        <p className="text-sm text-gray-600 mt-1">{card.description}</p>
                      </div>
                    </AnimatedContainer>
                  </div>
                ))}
              </div>
            </div>
    </div>
  )
}

export default Container