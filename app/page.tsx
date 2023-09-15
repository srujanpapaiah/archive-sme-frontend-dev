"use client";

import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [data, setData] = useState({
    _id: "",
    username: "",
    email: "",
    isVerified: false,
    role: "",
    __v: 0,
  });

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(
          "https://ineuron.ai/_next/data/3tOx5dQnNATDKeswDwkqm/category/NFT.json"
        );
        setIsLoggedIn(true);
        setData(res.data.pageProps.initialState.init);
        console.log(res.data.pageProps.initialState.init.courses);
      } catch (error: any) {
        setIsLoggedIn(false);
        throw new Error(error.message);
      }
    };

    fetchUser();
  }, []);
  return (
    <>
      {isLoggedIn ? (
        <h1>Hello your role is {data.role}</h1>
      ) : (
        <h1>Welcome {data.courses}</h1>
      )}
    </>
  );
}
