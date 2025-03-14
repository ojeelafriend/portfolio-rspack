import { FaLinkedin, FaDiscord, FaGithub } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";

import { Card } from "../../components/Card";
import styles from "./Home.module.css";
import { useState } from "react";
import projectOneImage from "../../../public/resource/Screenshot_15.png";

export const Home = () => {
  const [modalExpanded, setModalExpanded] = useState<boolean>(false);
  return (
    <>
      <div
        className={modalExpanded ? `${styles.modal}` : `${styles.modalHidden}`}
      >
        <div className={styles.quit} onClick={() => setModalExpanded(false)}>
          <RxCross1 color="white" size={35} />
        </div>
        <h1>Soluciones</h1>
        <div className={styles.gridProjects}>
          <Card
            title="Buscador de productos"
            deploy="https://edoze.odev.lat/"
            image={projectOneImage}
            technologies="Nextjs, Nodejs, Typescript, Typesense, Docker, EC2"
            maxLength={45}
          />
          <Card
            deploy="demo"
            technologies="Vite, Nodejs, Typescript, Docker, EC2"
            maxLength={45}
          />
          <Card
            deploy="demo"
            technologies="Golang, Nextjs, Typescript, Docker, EC2"
            maxLength={45}
          />
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.imageContainer}>
            <img
              src="https://i.postimg.cc/k4nfY3tP/1741806765296.jpg"
              alt=""
              height={120}
              width={120}
            />
          </div>
          <h1>Alejo R. Solis</h1>
          <p>
            Trabajo como Software Engineer usando Node.js y enfocándome en
            optimizar proyectos con React. Tengo experiencia usando Docker, AWS
            y Nginx para gestionar despliegues y servidores.
          </p>
          <a
            className={styles.solutions}
            href="#projects"
            onClick={() => setModalExpanded(true)}
          >
            <span>Mis proyectos</span>
          </a>
        </div>
        <div className={styles.containerInfo}>
          <a href="https://www.linkedin.com/in/alejo-solis/" target="__blank">
            <FaLinkedin className={styles.linkedin} size={30} href="" />
          </a>
          <a
            href="https://discord.com/users/776550789216337931"
            target="__blank"
          >
            <FaDiscord
              className={styles.discord}
              size={30}
              href="https://github.com/ojeelafriend"
            />
          </a>
          <a href="https://github.com/ojeelafriend" target="__blank">
            <FaGithub className={styles.github} size={30} />
          </a>
        </div>
      </div>
    </>
  );
};
