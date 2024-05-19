import { Carousel } from '@/components/Carousel';
import { Skill } from '@/components/Skill';
import React from 'react';


const DatabaseSkills: React.FC = () => {
    return (
        <div className='h-40 flex-1'>
            <h2>Bancos de dados</h2>
            <Carousel.Panel id="database-tools">

                <Carousel.Item itemKey="database-postgres">
                    <Skill.Item title="PostgreSQL" iconUrl="/postgresql.svg" progress={60} />
                </Carousel.Item>

                <Carousel.Item itemKey="database-mysql">
                    <Skill.Item title="MySQL" iconUrl="/mysql.svg" progress={50} />
                </Carousel.Item>

                <Carousel.Item itemKey="database-mongodb">
                    <Skill.Item title="MongoDB" iconUrl="/mongodb.svg" progress={60} />
                </Carousel.Item>

                <Carousel.Item itemKey="database-redis">
                    <Skill.Item title="Redis" iconUrl="/redis.svg" progress={40} />
                </Carousel.Item>

            </Carousel.Panel>
        </div>
    );
}

export default DatabaseSkills
