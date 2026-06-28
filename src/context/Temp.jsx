import { createContext, useContext, useState } from "react";

const PDFContext = createContext();

export function PDFProvider({ children }) {

  const [selectedPDF, setSelectedPDF] = useState(
    localStorage.getItem("selectedPDF") || ""
  );

  const selectPDF = (pdf) => {
    setSelectedPDF(pdf);

    if (pdf) {
      localStorage.setItem("selectedPDF", pdf);
    } else {
      localStorage.removeItem("selectedPDF");
    }
  };

  return (
    <PDFContext.Provider
      value={{
        selectedPDF,
        selectPDF,
      }}
    >
      {children}
    </PDFContext.Provider>
  );
}

export const usePDF = () => useContext(PDFContext);