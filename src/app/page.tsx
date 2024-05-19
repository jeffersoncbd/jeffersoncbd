"use server"

import React from "react";
import BackendSkills from "./components/BackendSkills";
import DatabaseSkills from "./components/DatabaseSkills";
import FrontendSkills from "./components/FrontendSkills";
import Header from "./components/Header";
import TestsSkills from "./components/TestsSkills";

const Home: React.FC = () => {
  return (
    <main className="text-white max-w-4xl mx-auto flex flex-col gap-4">
      <Header />
      <BackendSkills />
      <FrontendSkills />
      <div className="flex h-80 flex-col sm:flex-row gap-4">
        <DatabaseSkills />
        <TestsSkills />
      </div>
    </main>
  );
}

export default Home
