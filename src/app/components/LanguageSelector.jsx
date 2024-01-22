import { useState } from "react";

export default function LanguageSelector() {
  const [language, setLanguage] = useState("EN");

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "EN" ? "DA" : "EN"));
  };

  return (
    <div onClick={toggleLanguage} style={{ cursor: "pointer" }}>
      <p>{language}</p>
    </div>
  );
}
