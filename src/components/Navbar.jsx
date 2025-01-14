import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isTyping, setIsTyping] = useState(true);  // To control when to show the cursor
  const phrases = ["Web Developer", "Web Designer", "Coder"];
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const typingSpeed = 150; // Typing speed (in ms)
  const deletingSpeed = 80; // Deleting speed (in ms)
  const pauseDuration = 1000; // Time to pause before erasing (in ms)

  useEffect(() => {
    let interval;
    
    if (isTyping && !isDeleting) {
      interval = setInterval(() => {
        setDisplayedText((prev) => {
          const fullText = phrases[currentPhraseIndex];
          if (prev.length < fullText.length) {
            return fullText.substring(0, prev.length + 1);
          } else {
            setTimeout(() => setIsDeleting(true), pauseDuration);
            return fullText; // Complete the word and stop typing
          }
        });
      }, typingSpeed);
    } else if (isDeleting) {
      interval = setInterval(() => {
        setDisplayedText((prev) => {
          const fullText = phrases[currentPhraseIndex];
          if (prev.length > 0) {
            return prev.substring(0, prev.length - 1); // Remove one character at a time
          } else {
            setIsDeleting(false);
            setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length); // Move to the next word
            return "";
          }
        });
      }, deletingSpeed);
    }

    // Add the cursor effect while typing
    const cursorInterval = setInterval(() => {
      setIsTyping(!isTyping);
    }, 500); // Blink cursor every 500ms

    return () => {
      clearInterval(interval);
      clearInterval(cursorInterval);
    };
  }, [displayedText, isDeleting, currentPhraseIndex, isTyping]);

  return (
    <header className="w-full bg-[#000000] text-[#E0E0E0] shadow-md">
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-3xl font-extrabold">
          <Link 
            to="/" 
            className="text-transparent bg-clip-text bg-gradient-to-r from-[#8A2BE2] via-[#0E76A8] to-[#D3D3D3] transition-all duration-300"
          >
            Shreyas Patil | {displayedText}
            <span className="text-[#D3D3D3]">{isTyping ? "|" : " "}</span>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
