import { Carousel } from '@/components/Carousel';
import { Skill } from '@/components/Skill';
import { Typewriter } from '@/components/Typewriter';
import React from 'react';


const BackendSkills: React.FC = () => {
    return (
        <div className='h-64 sm:h-40'>
            <Typewriter.Text order={5} speed={10}>Ferramentas de backend</Typewriter.Text>

            <Typewriter.Box order={6}>
                <Carousel.Panel id="backend-tools">

                    <Carousel.Item itemKey="backend-javascript">
                        <Skill.Stack>
                            <Skill.Item title="NodeJS" iconUrl="/nodejs.svg" progress={90} />
                            <Skill.Item title="ExpressJS" iconUrl="/expressjs.svg" progress={80} />
                        </Skill.Stack>
                    </Carousel.Item>

                    <Carousel.Item itemKey="backend-rust">
                        <Skill.Stack>
                            <Skill.Item title="Rust" iconUrl="/rust.svg" progress={90} />
                            <Skill.Item title="Axum" iconUrl="/tokio.svg" progress={70} />
                        </Skill.Stack>
                    </Carousel.Item>

                    <Carousel.Item itemKey="backend-go">
                        <Skill.Stack>
                            <Skill.Item title="GO" iconUrl="/go.svg" progress={60} />
                            <Skill.Item title="Gin" iconUrl="/gin.svg" progress={40} />
                        </Skill.Stack>
                    </Carousel.Item>

                    <Carousel.Item itemKey="backend-php">
                        <Skill.Stack>
                            <Skill.Item title="PHP" iconUrl="/php.svg" progress={80} />
                            <Skill.Item title="Laravel" iconUrl="/laravel.svg" progress={50} />
                        </Skill.Stack>
                    </Carousel.Item>

                </Carousel.Panel>
            </Typewriter.Box>
        </div>
    );
}

export default BackendSkills
