import { useEffect, useState } from "react";
import axios from "../api/api";
import Sidebar from "../components/Sidebar";
import toast from "react-hot-toast";
import { usePDF } from "../context/PDFContext";

function MyPDFs() {

  const [pdfs, setPdfs] = useState([]);
 const {
  selectedPDF,
  selectPDF: setSelectedPDF
} = usePDF();

  useEffect(() => {
    loadPDFs();
  }, []);
 
  const loadPDFs = async () => {

    const email = localStorage.getItem("email");

const res = await axios.get(
  `/pdfs?email=${email}`
);

    setPdfs(
      res.data.pdfs
    );
  };

const selectPDF = async (filename) => {

  try {

    await axios.post(
  "/select-pdf",
  {
    filename,
    email: localStorage.getItem("email")
  }
);

    setSelectedPDF(filename);

    toast.success(
      `${filename} selected`
    );

  } catch (err) {

    toast.error(
      "Failed to select PDF"
    );

  }

};
  const deletePDF = async (filename) => {

  try {

    const email = localStorage.getItem("email");

await axios.delete(
  `/delete-pdf/${filename}?email=${email}`
);

    toast.success(
      "PDF deleted"
    );

    loadPDFs();

  } catch {

    toast.error(
      "Delete failed"
    );

  }

};
  return (
    <div className="flex">
  <Sidebar />

  <div className="flex-1 ml-64 p-6">

        <h1 className="text-2xl font-bold mb-4">
          My PDFs
        </h1>

        {pdfs.map((pdf) => (

          <div
  key={pdf}
  className={`border p-3 rounded mb-3 flex justify-between items-center ${
  selectedPDF === pdf
    ? "bg-green-50 border-green-500"
    : ""
}`}
>

  <span>{pdf}</span>

  <div className="space-x-2">

    {selectedPDF === pdf ? (

  <button
    disabled
    className="bg-green-600 text-white px-3 py-1 rounded cursor-default"
  >
    ✓ Selected
  </button>

) : (

  <button
    onClick={() => selectPDF(pdf)}
    className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded"
  >
    Select
  </button>

)}

    <button
      onClick={() => deletePDF(pdf)}
      className="bg-red-600 text-white px-3 py-1 rounded"
    >
      Delete
    </button>

  </div>

</div>

        ))}

      </div>

    </div>
  );
}

export default MyPDFs;