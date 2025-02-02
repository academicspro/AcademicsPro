"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Footer } from "@/components/landing/Footer";
import Realnavbar from "@/components/landing/Navbar/Navbar";


export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (result?.error) {
      setError("Invalid email or password.");
    } else {

      const response = await fetch("/api/auth/session");
      const session = await response.json();
      const role = session?.user?.role;

      // Redirect based on role
      switch (role) {
        case "superadmin":
          router.push("/superadmin");
          break;
        case "admin":
          router.push("/admin");
          break;
        case "teacher":
          router.push("/teacher");
          break;
        case "student":
          router.push("/student");
          break;
        case "parent":
          router.push("/parents");
          break;
        case "hostel":
          router.push("/hostel");
          break;
        case "library":
          router.push("/library");
          break;
        case "account":
          router.push("/account");
          break;
        case "transport":
          router.push("/transport");
          break;
        default:
          router.push("/");
      }
    }
  };

  return (
    <>

      <Realnavbar />
      <div className="flex items-center justify-center min-h-screen bg-gray-100 text-foreground">
        <form
          onSubmit={handleSubmit}
          className="p-6 bg-backgroung shadow-lg shadow-white rounded-md w-96"
        >
          <h2 className="text-xl font-bold mb-4">Sign In</h2>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full px-3 py-2 border rounded-md focus:outline-none text-black"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium mb-1 ">
              Password
            </label>
            <input
              id="password"
              type="password"
              className="w-full px-3 py-2 border rounded-md focus:outline-none text-black"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
          >
            Sign In
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
}
