import Sidebar from "../components/Sidebar";
import PDFList from "../components/PDFList";

function Upload() {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 p-6">
        <h1 className="text-3xl font-bold mb-6">
          Upload PDF
        </h1>

        <PDFList />
      </div>
    </div>
  );
}

export default Upload;