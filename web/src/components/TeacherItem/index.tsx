import React from "react";
import whatsappIcon from "../../assets/images/icons/whatsapp.svg";
import "./styles.css";

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars3.githubusercontent.com/u/33056458?s=460&u=9be368613be350cb7d38a5478d8d963f493a4cfb&v=4"
          alt="Vitor Barbosa"
        />
        <div>
          <strong>Vitor Barbosa</strong>
          <span>JS</span>
        </div>
      </header>
      <p>
        O panda-gigante (nome científico: Ailuropoda melanoleuca, do grego:
        ailuros, gato + poda, pés; e melano, preto + leukos, branco) é um
        mamífero omnívoro da família Ursidae endêmico da República Popular da
        China.
      </p>

      <footer>
        <p>
          Price per Hour
          <strong>20€</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Get in touch
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
