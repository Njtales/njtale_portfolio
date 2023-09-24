import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
<<<<<<< HEAD
import ReactTooltip from 'react-tooltip';
import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './About.scss';


const About = () => {
  const [abouts, setAbouts] = useState([]);
  const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState([]);
=======

import { AppWrap, MotionWrap } from '../../wrapper';
import './About.scss';
import { urlFor, client } from '../../client';

const About = () => {
  const [abouts, setAbouts] = useState([]);
>>>>>>> 58be3b803b0202b52abeb32a061277628cd57ab3

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);

<<<<<<< HEAD
  useEffect(() => {
    const experienceQuery = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';

    async function getSkillsAndExp() {
      const experienceData = await client.fetch(experienceQuery);
      const skillsData = await client.fetch(skillsQuery);

      experienceData.sort((a,b) => (a.year > b.year ? 1 : -1));
      setSkills(skillsData);
      setExperiences(experienceData)
    }
    getSkillsAndExp();

  }, []);

  return (
    <>
        <div className="app__about">
          <div className="app__profilestory">
            <h2 className="head-text">Cultivating data into <span> insights, </span> <br />engineering the <span>future.</span></h2>
          </div>
          <div className="about-container">
            <div className="about-left-column">
              <div className="about-storytitle">My Story</div>
                <div className='about-storytext'>
                  My journey into data engineering began in 2017, and it's been exhilarating. Over four transformative years, I've played a pivotal role in the digital landscape, delivering impactful software solutions that have left an indelible mark. I take immense pride in maintaining a remarkable 99% data pipeline uptime, a testament to my unwavering commitment to the seamless data flow. Notably, I've orchestrated a significant 22% boost in efficiency KPIs, showcasing my talent for process optimization.<br/><br/>

                  But it's not just about corporate accolades. Beyond the office, I've channelled my passion into personal projects that push boundaries. I've developed a real-time sign language recognition system and crafted a data pipeline for S&P 500 data processing—each project is a testament to my innovative problem-solving abilities. My drive has earned me not one but two "Employee of the Month" awards, demonstrating my unwavering pursuit of excellence. To continually expand my horizons, I've invested time in completing multiple data science and machine learning courses, staying at the forefront of industry trends.<br/><br/>

                  My technical prowess spans Python, R, PostgreSQL, MS-SQL, MongoDB, TSQL, and various data-related tools. I navigate data warehousing, integration, modelling, visualization, and analysis effortlessly. With expertise in Hadoop, Apache Spark, PySpark, Kafka, Airflow, Git, GitHub, EC2, Redshift, IAM, S3, Glue, Kinesis, Docker, Kubernetes, Tableau, Power BI, and various DevOps tools, I'm a versatile data engineer.<br/><br/>

                  Currently, I call London home and am fervently pursuing data engineering opportunities across the UK. Beyond data engineering, I aspire to become a thriving trader, aiming for financial success while continually pushing the boundaries of data possibilities.<br/><br/>
              </div>
            </div>
            <div className="about-right-column">
              <div className='about-work'>
              <span>Where I've Worked</span>
                <div className="app__skills-exp">
                  {experiences.map((experience) => (
                    <motion.div
                      className="app__skills-exp-item"
                      key={experience.year}
                    >
                      <div className="app__skills-exp-year">
                        <p className="year-text">{experience.year}</p>
                      </div>
                      <motion.div className="app__skills-exp-works">
                        {experience.works.map((work) => (
                          <>
                            <motion.div
                              whileInView={{ opacity: [0, 1] }}
                              transition={{ duration: 0.5 }}
                              className="app__skills-exp-work"
                              data-tip
                              data-for={work.name}
                              key={work.name}
                            >
                              <h4 className="work-text">{work.name}</h4>
                              <p className="ptext">{work.company}</p>
                            </motion.div>
                            {/* <ReactTooltip
                            
                              id={work.name}
                              effect="solid"
                              arrowColor="#053F5E"
                              className="skills-tooltip"
                              >
                              {work.desc}
                            </ReactTooltip> */}
                          </>
                        ))}
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="app__profiles">
            {abouts.map((about, index) => (
              <motion.div
                whileInView={{ opacity: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5, type: 'tween' }}
                className="app__profile-item"
                key={about.title + index}
              >
                <img src={urlFor(about.imgUrl)} alt={about.title} />
                <h2 className="title-text" style={{ marginTop: 20 }}>{about.title}</h2>
                <p className="work_card-text" style={{ marginTop: 10 }}>{about.description}</p>
              </motion.div>
            ))}
          </div>
          <motion.div className="app__skills-list">
            {skills.map((skill) => (
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                className="app__skills-item app__flex"
                key={skill.name}
              >
                <div
                  className="app__flex"
                  style={{ backgroundColor: skill.bgColor }}
                >
                  <img src={urlFor(skill.icon)} alt={skill.name} />
                </div>
                <p className="p-text">{skill.name}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
=======
  return (
    <>
      <h2 className="head-text">Trying to turn data into <span> information, </span> <br />and information into <span> insight.</span></h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
            <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
          </motion.div>
        ))}
      </div>
>>>>>>> 58be3b803b0202b52abeb32a061277628cd57ab3
    </>
  );
};

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  'app__whitebg',
);
