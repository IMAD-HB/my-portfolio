import React, { useEffect, useState } from "react";

const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const fullText = "<Hello World />";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(interval);

        setTimeout(() => {
          onComplete();
        }, 1000);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center px-4">
      <div className="mb-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-mono font-bold text-center max-w-full break-words">
        {text} <span className="animate-blink ml-1"> | </span>
      </div>

      <div className="w-full max-w-xs sm:max-w-sm md:max-w-md h-1 bg-gray-800 rounded relative overflow-hidden">
        <div className="w-2/5 h-full bg-green-500 shadow-[0_0_15px_#3b82f6] animate-loading-bar"></div>
      </div>
    </div>
  );
};

export default LoadingScreen;
