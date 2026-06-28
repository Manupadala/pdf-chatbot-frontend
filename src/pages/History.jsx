import { useEffect, useState } from "react";
import axios from "../api/api";
import Sidebar from "../components/Sidebar";

function History() {

  const [history, setHistory] =
    useState([]);

  useEffect(() => {

    loadHistory();

  }, []);

  const loadHistory = async () => {

  const email = localStorage.getItem("email");

  const res = await axios.get(
    `/history?email=${email}`
  );

  setHistory(
    res.data
  );
};
  const deleteHistory = async (id) => {

  const email = localStorage.getItem("email");

  await axios.delete(
    `/history/${id}?email=${email}`
  );

  loadHistory();
};

  return (

    <div className="flex">
  <Sidebar />

  <div className="flex-1 ml-64 p-6">

        <h1 className="text-3xl font-bold mb-6">
          Chat History
        </h1>

        {history.map((chat) => (

          <div
  key={chat.id}
  className="border rounded p-4 mb-4 bg-white shadow"
>

  <div className="flex justify-between">

    <div>

      <p>
        <strong>PDF:</strong> {chat.pdf_name}
      </p>

      <p className="mt-2">
        <strong>Question:</strong> {chat.question}
      </p>

      <p className="mt-2">
        <strong>Answer:</strong> {chat.answer}
      </p>

    </div>

    <button
      onClick={() => deleteHistory(chat.id)}
      className="bg-red-600 text-white px-3 py-1 rounded h-10"
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

export default History;