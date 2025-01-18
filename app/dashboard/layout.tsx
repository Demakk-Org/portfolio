"use client";

import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../components/lib/firebase";
import LoginForm from "../../components/dashboard/authForm";
import NavLinks from "../../components/dashboard/nav-links";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
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
    });

    return () => unsubscribe();
  }, []);

  return (
    <>
      {isAuthorized ? (
        <div className="flex space-y-[100px] w-full flex-col tablet:flex-row tablet:space-y-0">
          <div className="flex fixed z-50 w-full flex-wrap px-[5%] py-[12px] gap-1 cursor-pointer bg-blue-300 rounded-lg tablet:flex-col tablet:items-start tablet:py-[50px] tablet:max-w-[10%] tablet:ml-[2%]">
            <NavLinks />
          </div>
          <div className="md:overflow-y-auto rounded-lg tablet:ml-[23%] desktop:max-w-[75%]">
            {children}
          </div>
        </div>
      ) : (
        <LoginForm />
      )}
    </>
  );
}
