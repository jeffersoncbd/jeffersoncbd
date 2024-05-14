"use server"

import { Carousel } from "@/components/Carousel";
import { Skill } from "@/components/Skill";
import Typewriter from "@/components/Typewriter";
import React from "react";

const Home: React.FC = () => {
  return (
    <main className="w-full text-white">
      <div className="h-24">
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
      </div>

      <h2>Ferramentas de backend</h2>
      <Carousel.Panel id="backend-tools">

        <Carousel.Item itemKey="backend-javascript">
          <Skill.Stack>
            <Skill.Item title="NodeJS" iconUrl="/nodejs.svg" progress={70} />
            <Skill.Item title="ExpressJS" iconUrl="/expressjs.svg" progress={90} />
          </Skill.Stack>
        </Carousel.Item>

        <Carousel.Item itemKey="backend-rust">
          <Skill.Stack>
            <Skill.Item title="Rust" iconUrl="/rust.svg" progress={90} />
            <Skill.Item title="Axum" iconUrl="/tokio.svg" progress={60} />
          </Skill.Stack>
        </Carousel.Item>

        <Carousel.Item itemKey="backend-go">
          <Skill.Stack>
            <Skill.Item title="GO" iconUrl="/go.svg" progress={50} />
            <Skill.Item title="Gin" iconUrl="/gin.svg" progress={40} />
          </Skill.Stack>
        </Carousel.Item>

      </Carousel.Panel>
    </main>
  );
}

export default Home
