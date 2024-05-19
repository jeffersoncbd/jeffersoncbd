import { Carousel } from '@/components/Carousel';
import { Skill } from '@/components/Skill';
import { Typewriter } from '@/components/Typewriter';
import React from 'react';


const TestsSkills: React.FC = () => {
    return (
        <div className='h-40 flex-1'>
            <Typewriter.Text order={8} speed={10}>Testes automatizados</Typewriter.Text>

            <Typewriter.Box order={9}>
                <Carousel.Panel id="tests-tools">

                    <Carousel.Item itemKey="tests-testing-library">
                        <Skill.Item title="Testing Library" iconUrl="/testing-library.svg" progress={40} />
                    </Carousel.Item>

                    <Carousel.Item itemKey="tests-jestjs">
                        <Skill.Item title="JestJS" iconUrl="/jestjs.svg" progress={80} />
                    </Carousel.Item>

                    <Carousel.Item itemKey="tests-rust">
                        <Skill.Item title="Rust Test" iconUrl="/rust.svg" progress={60} />
                    </Carousel.Item>

                    <Carousel.Item itemKey="tests-axum">
                        <Skill.Item title="Axum Test" iconUrl="/tokio.svg" progress={60} />
                    </Carousel.Item>

                </Carousel.Panel>
            </Typewriter.Box>
        </div>
    );
}

export default TestsSkills
