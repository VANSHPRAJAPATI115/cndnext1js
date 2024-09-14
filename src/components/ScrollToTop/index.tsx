// import { useEffect, useState } from "react";

// export default function ScrollToTop() {
//   const [isVisible, setIsVisible] = useState(false);

//   // Top: 0 takes us all the way back to the top of the page
//   // Behavior: smooth keeps it smooth!
//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   };

//   useEffect(() => {
//     // Button is displayed after scrolling for 500 pixels
//     const toggleVisibility = () => {
//       if (window.pageYOffset > 300) {
//         setIsVisible(true);
//       } else {
//         setIsVisible(false);
//       }
//     };

//     window.addEventListener("scroll", toggleVisibility);

//     return () => window.removeEventListener("scroll", toggleVisibility);
//   }, []);

//   return (
//     <>
//     <div className="fixed bottom-8 right-8 z-[99]">
//       {isVisible && (
//         <div
//           onClick={scrollToTop}
//           aria-label="scroll to top"
//           className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-md bg-primary text-white shadow-md transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp"
//         >
//           <span className="mt-[6px] h-3 w-3 rotate-45 border-l border-t border-white"></span>
//         </div>
        
//       )}
//     </div>
    
//     </>
//   );
// }



import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      {/* Scroll to top button on the right */}
      <div className="fixed bottom-8 right-8 z-[99]">
        {isVisible && (
          <div
            onClick={scrollToTop}
            aria-label="scroll to top"
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-md bg-primary text-white shadow-md transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp"
          >
            <span className="mt-[6px] h-3 w-3 rotate-45 border-l border-t border-white"></span>
          </div>
        )}
      </div>

      {/* WhatsApp icon on the left */}
      <div className="fixed bottom-8 left-8 z-[99]">
        <a
          href="https://wa.me/your-phone-number?text=Hello, I would like to know more about your services!"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp chat"
          className="flex h-16 w-16 cursor-pointer items-center justify-center rounded-full bg-green-500 text-white shadow-md transition duration-300 ease-in-out hover:bg-green-600"
        >
          <FontAwesomeIcon icon={faWhatsapp} size="2x" />
        </a>
      </div>
    </>
  );
}
