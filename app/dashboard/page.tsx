"use client";

import { useContext } from "react";
import { UserContext } from "../../context/userContext";
import React from "react";

interface UserContextType {
  user: {
    name: string;
    // other properties
  };
}

export default function Dashboard() {
  const { user } = useContext(UserContext) as UserContextType;
  return (
    <div>
      <h1>Dashboard</h1>
      {!!user && <h2>Hi {user.name}!</h2>}
    </div>
  );
}
