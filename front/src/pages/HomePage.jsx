import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";  // Import useNavigate
export default function ItemPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent form from refreshing the page
    
    try {
      // Make a POST request to the server
      const res = await axios.post('http://localhost:3000/users/register', {
        email, 
        password, 
        name
      }, { withCredentials: true });
      console.log(res.data);  // Log the response data (you can handle success here)
      navigate("/about")
    } catch (error) {
      console.error("Error registering user:", error);
    }
  };

  return (
    <main className="w-full h-full flex items-center justify-center">
      <form className="w-40 h-40">
        <input
          type="email"
          placeholder="www.im.com"
          className="w-full h-8 flex items-center px-4 gap-4 bg-gray-100 border border-gray-300 rounded-md p-2"
          value={email}  // Make sure to bind state value to input
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="abd123!"
          className="w-full h-8 flex items-center px-4 gap-4 bg-gray-100 border border-gray-300 rounded-md p-2"
          value={password}  // Make sure to bind state value to input
          onChange={(e) => setPassword(e.target.value)}
        />

        <input
          type="text"
          placeholder="Janna!"
          className="w-full h-8 flex items-center px-4 gap-4 bg-gray-100 border border-gray-300 rounded-md p-2"
          value={name}  // Make sure to bind state value to input
          onChange={(e) => setName(e.target.value)}
        />

        <button onClick={handleLogin}
          type="submit"
          className="w-full h-8 flex items-center justify-center bg-red-500 text-white rounded-md"
        >
          Register
        </button>
      </form>
    </main>
  );
}
