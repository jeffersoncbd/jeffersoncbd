"use server"

import React from "react";
import BackendSkills from "./components/BackendSkills";
import FrontendSkills from "./components/FrontendSkills";
import Header from "./components/Header";

const Home: React.FC = () => {
  return (
    <main className="text-white max-w-4xl mx-auto flex flex-col gap-4">
      <Header />
      <BackendSkills />
      <FrontendSkills />
    </main>
  );
}

export default Home
