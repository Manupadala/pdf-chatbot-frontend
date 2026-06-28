import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import toast from "react-hot-toast";
function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {

  try {

    const res = await axios.post(
      "https://quotation-dipped-overlying.ngrok-free.dev/ask-stream",
      {
        email,
        password,
      }
    );

    localStorage.setItem(
      "token",
      res.data.access_token
    );

    localStorage.setItem(
      "email",
      email
    );
    localStorage.removeItem(
  "selectedPDF"
);

    toast.success(
  "Login Successful!"
);

    navigate("/chat");

  } catch (err) {

    console.error(err);

    toast.error(
  "Login Failed!"
);
  }
};
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">

      <div className="bg-white p-8 rounded-xl shadow-lg w-96">

        <h1 className="text-3xl font-bold text-center mb-2">
          PDF Chatbot
        </h1>

        <p className="text-center text-gray-500 mb-6">
          Login to continue
        </p>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          className="w-full border p-3 rounded mb-4"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
          className="w-full border p-3 rounded mb-4"
        />

        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white p-3 rounded"
        >
          Login
        </button>

        <p className="text-center mt-4 text-gray-600">
          Don't have an account?
        </p>

        <Link to="/register">
          <button
            className="w-full mt-2 border border-blue-600 text-blue-600 p-3 rounded hover:bg-blue-50"
          >
            Register
          </button>
        </Link>

      </div>

    </div>
  );
}

export default Login;