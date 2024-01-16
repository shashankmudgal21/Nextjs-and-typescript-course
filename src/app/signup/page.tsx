"use client";
import React from "react";
import { useState } from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
export default function signupPage() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1>Sign up</h1>
      <hr />
      <label htmlFor="userName">User name</label>
      <input
        className="p-2  rounded-lg mb-4"
        type="text"
        name=""
        id=""
        value={user.name}
        onChange={(e) => setUser({ ...user, name: e.target.value })}
        placeholder="Enter the user name"
      />
      <label htmlFor="userEmail">Email</label>
      <input
        className="p-2 rounded-lg mb-4"
        type="email"
        name=""
        id=""
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        placeholder="Enter the email"
      />
      <label htmlFor="userPassword">Password</label>
      <input
        className="p-2 rounded-lg mb-4"
        type="password"
        name=""
        id=""
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        placeholder="Enter the password"
      />
      <button
        className="rounded-lg 
      border-gray-300 
      p-3 
    //   focus:outline-none 
    //   focus:border-gray-600"
      >
        Signup here
      </button>
      <Link href={'/login'}>Visit Login</Link>
    </div>
  );
}
