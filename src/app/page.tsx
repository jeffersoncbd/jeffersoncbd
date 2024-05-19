"use server"

import React from "react";
import BackendSkills from "./components/BackendSkills";
import DatabaseSkills from "./components/DatabaseSkills";
import FrontendSkills from "./components/FrontendSkills";
import Header from "./components/Header";

const Home: React.FC = () => {
  return (
    <main className="text-white max-w-4xl mx-auto flex flex-col gap-4">
      <Header />
      <BackendSkills />
      <FrontendSkills />
      <DatabaseSkills />
    </main>
  );
}

export default Home
