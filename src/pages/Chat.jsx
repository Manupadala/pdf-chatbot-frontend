import Sidebar from "../components/Sidebar";
import PDFList from "../components/PDFList";
import ChatBox from "../components/ChatBox";

function Chat() {

  return (
    <div className="flex">
  <Sidebar />

  <div className="flex-1 ml-64 p-6">

      

        <h1 className="text-3xl font-bold mb-6">
          AI PDF Chatbot
        </h1>

        <div className="bg-white p-4 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-3">
            Upload PDF
          </h2>

          <PDFList />
        </div>

        <div className="mt-6">
          <ChatBox />
        </div>

      </div>

    </div>
  );
}

export default Chat;