"use server"

import Typewriter from "@/components/Typewriter";
import React from "react";

const Home: React.FC = () => {
  return (
    <main className="w-full text-white">
      <Typewriter className="font-bold text-3xl" speed={100}>
        Jefferson Carlos
      </Typewriter>
      <Typewriter className="inline text-gray-400" speed={40} delay={2200}>
        Desenvolvedor de software
      </Typewriter>
      {' '}
      <Typewriter className="inline text-yellow-400" speed={40} delay={3500} isLastCursor>
        fullstack
      </Typewriter>
    </main>
  );
}

export default Home
