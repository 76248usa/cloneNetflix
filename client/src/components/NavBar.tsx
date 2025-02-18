import { useEffect, useState } from "react";

const tabs = [
  "Home",
  "Series",
  "Films",
  "New & Popular",
  "My List",
  "Browse by Languages",
];

function NavBar() {
  const [showBackground, setShowBackground] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      //console.log(window.scrollY);
      if (window.scrollY > 700) {
        setShowBackground(true);
      } else {
        setShowBackground(false);
      }
    });
  }, []);
  return (
    <nav className="w-full fixed z-40">
      <div
        className={`px-16 py-4 flex items-center ${
          showBackground ? "bg-black bg-opacity-90" : null
        }`}
      >
        <img
          className="h-16"
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          alt="logo"
        />
        <div className="flex gap-7 ml-8">
          {tabs.map((tab) => (
            <div
              className="text-white hover:text-gray-300 cursor-pointer"
              key={tab}
            >
              {tab}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
