import { useLoaderData } from "react-router-dom";
import { InputField } from "../components/LoginInput.jsx";
import { useState } from "react";
import axios from "axios";
export default function ItemPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleLogin = (e) => {
    e.preventDefault(); // Prevents form from refreshing the page
    axios.post('http://localhost:3000/login', { email, password });
  };
  

  return (
    <main className="w-full h-full flex items-center justify-center">
      <form className="w-40 h-40" >
        <input
          type="email"
          placeholder="www.im.com"
          className="w-full h-8 flex items-center px-4 gap-4 bg-gray-100 border border-gray-300 rounded-md p-2"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="abd123!"
          className="w-full h-8 flex items-center px-4 gap-4 bg-gray-100 border border-gray-300 rounded-md p-2"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          className="w-full h-8 flex items-center justify-center bg-red-500 text-white rounded-md"
          onClick={handleLogin}
        >
          
          Login
        </button>
      </form>
    </main>
  );
}
