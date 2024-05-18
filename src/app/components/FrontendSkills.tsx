import { Carousel } from '@/components/Carousel';
import { Skill } from '@/components/Skill';
import React from 'react';


const FrontendSkills: React.FC = () => {
    return (
        <div className='h-64 sm:h-40'>
            <h2>Ferramentas de frontend</h2>
            <Carousel.Panel id="frontend-tools">

                <Carousel.Item itemKey="frontend-react">
                    <Skill.Stack>
                        <Skill.Item title="HTML" iconUrl="/html.svg" progress={100} />
                        <Skill.Item title="CSS" iconUrl="/css.svg" progress={80} />
                    </Skill.Stack>
                </Carousel.Item>

                <Carousel.Item itemKey="frontend-rust">
                    <Skill.Stack>
                        <Skill.Item title="ReactJS" iconUrl="/reactjs.svg" progress={100} />
                        <Skill.Item title="NextJS" iconUrl="/nextjs.svg" progress={60} />
                    </Skill.Stack>
                </Carousel.Item>

                <Carousel.Item itemKey="frontend-go">
                    <Skill.Stack>
                        <Skill.Item title="ReactNative" iconUrl="/react-native.svg" progress={80} />
                        <Skill.Item title="Expo" iconUrl="/expojs.svg" progress={60} />
                    </Skill.Stack>
                </Carousel.Item>

                <Carousel.Item itemKey="frontend-php">
                    <Skill.Stack>
                        <Skill.Item title="Angular" iconUrl="/angular.svg" progress={30} />
                        <Skill.Item title="ElectronJS" iconUrl="/electronjs.svg" progress={30} />
                    </Skill.Stack>
                </Carousel.Item>

            </Carousel.Panel>
        </div>
    );
}

export default FrontendSkills
