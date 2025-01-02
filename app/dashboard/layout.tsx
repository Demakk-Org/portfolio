"use client";

import { useEffect, useState } from "react";
import SideNav from "../../components/dashboard/side-nav";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../components/lib/firebase";
import LoginForm from "../../components/dashboard/authForm";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setLoading(true);

      try {
        if (user) {
          setIsAuthorized(true);
        } else {
          setIsAuthorized(false);
        }
      } catch (error) {
        console.error("Error verifying token claims:", error);
        setIsAuthorized(false);
      }

      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return <div className="p-[300px]">Loading...</div>;
  }
  return (
    <>
      {isAuthorized ? (
        <div className="flex">
          <div className="fixed left-5 bg-blue-300 rounded-lg">
            <SideNav />
          </div>
          <div className="ml-[150px] px-[100px] md:overflow-y-auto rounded-lg">
            {children}
          </div>
        </div>
      ) : (
        <LoginForm />
      )}
    </>
  );
}
