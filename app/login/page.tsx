"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";
import { toast } from "react-hot-toast/headless";
import { useRouter } from "next/navigation";
import React from "react";
axios.defaults.withCredentials = true;

type UserData = {
  email: string;
  password: string;
};

const Login = () => {
  const router = useRouter();
  const [data, setData] = useState<UserData>({
    email: "",
    password: "",
  });

  const loginUser = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email, password } = data;

    try {
      const response = await axios.post(
        "/login",
        {
          email,
          password,
        },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      const responseData = response.data;
      console.log(response);

      if (responseData.error) {
        toast.error(responseData.error);
      } else {
        setData({
          email: "",
          password: "",
        });
        toast.success("Login Successful");
        router.push("/dashboard", { scroll: false });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      <form onSubmit={loginUser}>
        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={data.email}
          onChange={handleInputChange}
        />
        <label>Password</label>
        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={data.password}
          onChange={handleInputChange}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
