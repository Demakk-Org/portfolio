import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../components/lib/firebase";

export default function useAuthHandler() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

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

      const user = userCredential?.user;

      if (!user) {
        throw new Error("Not permitted as admin.");
      }
      setEmail("");
      setPassword("");
    } catch (authError) {
      console.log(authError);
      setError("Authentication error: " + authError);
    } finally {
      setLoading(false);
    }
  };

  return {
    error,
    loading,
    email,
    password,
    handleLogin,
    handleEmailChange,
    handlePasswordChange,
  };
}
