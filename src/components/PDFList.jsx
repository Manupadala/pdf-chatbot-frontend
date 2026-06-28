import axios from "../api/api";
import { useState } from "react";

function PDFList() {

  const [fileName, setFileName] = useState("");

  const uploadPDF = async (e) => {

    try {

      const file = e.target.files[0];

      if (!file) return;

      setFileName(file.name);
const formData = new FormData();

formData.append("file", file);
formData.append(
  "email",
  localStorage.getItem("email")
);

      const res = await axios.post(
        "/upload-pdf",
        formData,
        {
          headers: {
            "Content-Type":
              "multipart/form-data",
          },
        }
      );

      alert(res.data.message);

    } catch (error) {

      console.error(error);

      alert("Upload Failed");
    }
  };

  return (
    <div>

      <label
        className="
          inline-block
          bg-blue-600
          text-white
          px-5
          py-3
          rounded-lg
          cursor-pointer
          hover:bg-blue-700
        "
      >
        Choose PDF

        <input
          type="file"
          accept=".pdf"
          onChange={uploadPDF}
          className="hidden"
        />

      </label>

      {fileName && (
        <p className="mt-3 text-gray-600">
          Selected: {fileName}
        </p>
      )}

    </div>
  );
}

export default PDFList;