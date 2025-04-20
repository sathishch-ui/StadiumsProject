import React from "react";
import { useNavigate } from "react-router";
import users from "../../data/users.json";

const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");

  const navigate = useNavigate();

  const handleLogin = () => {
    const user = users.find(
      (user) => user.email === email && user.password === password
    );
    if (user) {
      localStorage.setItem("isAuthenticated", true);
      navigate("/");
      console.log(user);
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-6">Sign In</h2>
        <input
          type="text"
          placeholder="Email"
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <button
          onClick={handleLogin}
          className="w-full bg-yellow-500 text-white p-2 rounded hover:bg-yellow-400"
        >
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Login;
