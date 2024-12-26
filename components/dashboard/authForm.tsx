"use client";

import { useState } from "react";
import { auth } from "../lib/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential?.user

      if (!user) {
        throw new Error("Not permitted as admin.");
      }
    } catch (authError: any) {
      setError("Authentication error: " + authError.message);
    } finally {
      setLoading(false);
      setEmail("");
      setPassword("");
    }
  };

  return (
    <form
      onSubmit={handleLogin}
      className="max-w-4xl mx-auto p-6 bg-slate-400 rounded-md shadow-md space-y-6"
    >
      <h2 className="text-2xl font-bold mb-6 text-gray-700 text-center">
        Login as Admin
      </h2>
      {error && <p className="text-red-500">{error}</p>}
      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email Address
        </label>
        <input
          id="email"
          type="email"
          className="mt-1 p-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-700"
        >
          Password
        </label>
        <input
          id="password"
          type="password"
          className="mt-1 p-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button
        type="submit"
        className={`w-full px-4 py-2 text-white rounded-lg ${
          loading ? "bg-gray-500" : "bg-indigo-600 hover:bg-indigo-700"
        }`}
        disabled={loading}
      >
        {loading ? "loading..." : "login as Admin"}
      </button>
    </form>
  );
};

export default LoginForm;
