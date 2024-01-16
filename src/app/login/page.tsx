"use client";
import React from "react";
import { useState } from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
export default function Loginpage() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const onLogin = ()=>{
    
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1>Login</h1>
      <hr />

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
      <button className="rounded-lg " onClick={onLogin}>
        Signup here
      </button>
      <Link href={"/signup"}>new register</Link>
    </div>
  );
}
