import Sidebar from "../components/Sidebar";

function Dashboard() {
  return (
    <div className="flex min-h-screen bg-slate-100">

      <Sidebar />

      <div className="flex-1 p-8">

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold">
            PDF Chatbot Dashboard
          </h1>

          <p className="text-gray-500 mt-2">
            Upload PDFs and chat with your documents using AI.
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-5">

          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-gray-500 text-sm">
              Total PDFs
            </h2>

            <p className="text-3xl font-bold mt-2">
              0
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-gray-500 text-sm">
              Total Chats
            </h2>

            <p className="text-3xl font-bold mt-2">
              0
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-gray-500 text-sm">
              Questions Asked
            </h2>

            <p className="text-3xl font-bold mt-2">
              0
            </p>
          </div>

        </div>

        {/* Upload Section */}
        <div className="bg-white p-6 rounded-xl shadow mt-8">

          <h2 className="text-2xl font-semibold mb-4">
            Upload PDF
          </h2>

          <input
            type="file"
            accept=".pdf"
            className="border p-3 rounded w-full"
          />

          <button
            className="mt-4 bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
          >
            Upload PDF
          </button>

        </div>

        {/* Recent PDFs */}
        <div className="bg-white p-6 rounded-xl shadow mt-8">

          <h2 className="text-2xl font-semibold mb-4">
            Recent PDFs
          </h2>

          <div className="border rounded p-4">
            No PDFs uploaded yet
          </div>

        </div>

        {/* Chat Section */}
        <div className="bg-white p-6 rounded-xl shadow mt-8">

          <h2 className="text-2xl font-semibold mb-4">
            AI Chat
          </h2>

          <div className="h-64 border rounded p-4 overflow-y-auto bg-slate-50">
            Upload a PDF to start chatting
          </div>

          <div className="flex gap-3 mt-4">

            <input
              type="text"
              placeholder="Ask a question..."
              className="flex-1 border p-3 rounded"
            />

            <button
              className="bg-green-600 text-white px-6 rounded"
            >
              Send
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;