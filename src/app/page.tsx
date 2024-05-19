"use server"

import { Typewriter } from "@/components/Typewriter";
import { TypewriterCursor } from "@/components/Typewriter/Cursor";
import Link from "next/link";
import React from "react";
import BackendSkills from "./components/BackendSkills";
import DatabaseSkills from "./components/DatabaseSkills";
import FrontendSkills from "./components/FrontendSkills";
import Header from "./components/Header";
import TestsSkills from "./components/TestsSkills";

const Home: React.FC = () => {
  return (

    <TypewriterCursor.Provider>
      <main className="text-white max-w-4xl mx-auto flex flex-col gap-4">
        <Header />
        <FrontendSkills />
        <BackendSkills />
        <div className="flex h-80 sm:h-36 flex-col sm:flex-row gap-4">
          <DatabaseSkills />
          <TestsSkills />
        </div>
        <Link href="/skills">
          <Typewriter.Text className="text-yellow-400 text-center" order={10} speed={20}>
            lista completa
          </Typewriter.Text>
        </Link>
      </main>
    </TypewriterCursor.Provider>
  );
}

export default Home
