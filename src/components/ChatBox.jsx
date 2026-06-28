import { useState } from "react";

function ChatBox() {

  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const askQuestion = async () => {

    if (!question.trim()) {
      alert("Enter a question");
      return;
    }

    setAnswer("");
    setLoading(true);

    try {

      console.log("Question:", question);
      console.log(
  "Email:",
  localStorage.getItem("email")
);

console.log(
  "Selected PDF:",
  localStorage.getItem("selectedPDF")
);
      const response = await fetch(
        "https://quotation-dipped-overlying.ngrok-free.dev/ask-stream",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        body: JSON.stringify({
  question,
  email: localStorage.getItem("email"),
  filename: localStorage.getItem("selectedPDF"),
}),
        }
      );

      console.log("Status:", response.status);

      if (!response.ok) {
        throw new Error(
          `Backend Error: ${response.status}`
        );
      }

      if (!response.body) {
        throw new Error(
          "No response body received"
        );
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();

      let result = "";

      while (true) {

        const { done, value } =
          await reader.read();

        if (done) break;

        result += decoder.decode(
          value,
          { stream: true }
        );

        setAnswer(result);
      }

    } catch (error) {

      console.error(error);

      setAnswer(
        "Error generating answer. Check backend terminal."
      );

    } finally {

      setLoading(false);

    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow">

      <h2 className="text-2xl font-bold mb-4">
        Ask Your PDF
      </h2>

      <textarea
        className="border p-3 w-full rounded-lg"
        rows="4"
        placeholder="Ask anything from your PDF..."
        value={question}
        onChange={(e) =>
          setQuestion(e.target.value)
        }
      />

      <button
        onClick={askQuestion}
        disabled={loading}
        className="bg-blue-600 text-white px-5 py-2 mt-3 rounded-lg"
      >
        {loading ? "Thinking..." : "Ask"}
      </button>

      <div className="mt-5 border rounded-lg p-4 min-h-[120px] bg-gray-50">

        <h3 className="font-semibold mb-2">
          Answer
        </h3>

        <p className="whitespace-pre-wrap">
          {answer}
        </p>

      </div>

    </div>
  );
}

export default ChatBox;