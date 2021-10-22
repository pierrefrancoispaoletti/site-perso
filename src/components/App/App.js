import React, { useEffect } from "react";
import Directory from "../Directory/Directory";
import Header from "../Header/Header";

const App = () => {
  useEffect(() => {
    let i = 0;
    const text =
      "< Expert en développement d'applications pour les restaurateurs />";
    const title = document.querySelector(".first-title");
    const typeWriter = () => {
      if (i < text.length) {
        title.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
      }
    };
    typeWriter();
  }, []);
  return (
    <div>
      <Header />
      <Directory />
    </div>
  );
};

export default App;
