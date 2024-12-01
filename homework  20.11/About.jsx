import React from "react";
import Header from "./Header";
import Section from "./Section";
import SkillCard from "./SkillCard";
import Footer from "./Footer";

const skills = [
  { id: 1, title: "JavaScript", description: "Освоил процесс обучения и изучил основы" },
  { id: 2, title: "CSS", description: "Проходил основные концепции стилей, включая адаптивный дизайн" },
  { id: 3, title: "React", description: "Сейчас активно практикуюсь" },
];

function About() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <Header name="Serhii Moshkivskyi" tagline="Frontend Developer" />
      <Section title="About me">
        <p>
        Привет! Меня зовут Serhii Moshkivskyi. Я начинающий разработчик, обучаюсь фронтенду,
        чтобы создавать современные, удобные и эстетичные веб-приложения.
        </p>
      </Section>
      <Section title="Skills">
        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
          {skills.map((skill) => (
            <SkillCard key={skill.id} {...skill} />
          ))}
        </div>
      </Section>
      <Footer />
    </div>
  );
}

export default About;
