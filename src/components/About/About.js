import React from "react";
import {
  AboutContainer,
  AvatarContainer,
  PresentationContainer,
} from "./About.style";
import { ReactComponent as Avatar } from "./Avatar.svg";

const About = () => {
  return (
    <AboutContainer id="about">
      <AvatarContainer>
        <Avatar />
      </AvatarContainer>
      <PresentationContainer>
        <h2>Qui Suis je ?</h2>
        <section>
          <h3>Mes Compétences</h3>
          <article>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Praesentium expedita voluptas provident, minus incidunt voluptatem
            hic dolores ut, laboriosam corporis, quasi fugiat nemo cupiditate
            aspernatur architecto ullam atque. Ipsa cum nostrum reprehenderit
            necessitatibus fuga! Praesentium facilis in quibusdam eos
            voluptatibus!
          </article>
          <h3>Mon Expertise</h3>
          <article>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
            obcaecati non fuga nemo, amet facilis excepturi nam sint in magni
            mollitia laboriosam? Delectus sequi temporibus ullam est deserunt
            alias ut consectetur, earum mollitia, aliquam minima quaerat dolore
            placeat rem a, qui sunt cupiditate eos culpa voluptatibus iure quae
            sed incidunt. Vitae quas iste dicta sequi ducimus, natus soluta
            culpa exercitationem.
          </article>
        </section>
      </PresentationContainer>
    </AboutContainer>
  );
};

export default About;
