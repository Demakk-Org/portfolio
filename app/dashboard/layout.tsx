"use client";

import { useEffect, useState } from "react";
import SideNav from "../../components/dashboard/side-nav";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../components/lib/firebase";
import LoginForm from "../../components/dashboard/authForm";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [loading, setLoading] = useState(true);

  const email = process.env.NEXT_PUBLIC_ADMIN_EMAIL;

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setLoading(true);

      try {
        if (user) {
          const idTokenResult = await user.getIdTokenResult(true);

          console.log("User token claims:", idTokenResult);

          if (user.email === email) {
            setIsAuthorized(true);
          } else {
            setIsAuthorized(false);
          }
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
        <div className="mx-5 flex ">
          <div className="bg-blue-300 rounded-lg">
            <SideNav />
          </div>
          <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
            {children}
          </div>
        </div>
      ) : (
        <LoginForm />
      )}
    </>
  );
}
