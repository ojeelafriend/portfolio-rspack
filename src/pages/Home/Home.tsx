import styles from "./Home.module.css";
import { FaLinkedin, FaDiscord, FaGithub } from "react-icons/fa";

export const Home = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.imageContainer}>
            <img
              src="https://i.postimg.cc/3NQq4bHM/1623287923945.jpg"
              alt=""
              height={120}
              width={120}
            />
          </div>
          <h1>Alejo R. Solis</h1>
          <p>
            Trabajo como Software Engineer usando Node.js y enfocándome en
            optimizar proyectos con React. Tengo experiencia usando Docker, AWS,
            Nginx y PM2 para gestionar despliegues y servidores.
          </p>
          <a className={styles.solutions} href="/projects">
            <span>Mis proyectos</span>
          </a>
        </div>
        <div className={styles.containerInfo}>
          <FaLinkedin className={styles.linkedin} size={30} />
          <FaDiscord className={styles.discord} size={30} />
          <FaGithub className={styles.github} size={30} />
        </div>
      </div>
    </>
  );
};
