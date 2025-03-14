import styles from "./Card.module.css";
import defaultImage from "../../public/resource/Screenshot_17.png";

interface Props {
  title?: string;
  description?: string;
  image?: any;
  deploy: string;
  maxLength: number;
  technologies?: string;
}

export const Card = ({
  deploy,
  maxLength,
  title = "Próximamente",
  technologies,
  image = defaultImage,
}: Props) => {
  return (
    <article
      className={styles.container}
      onClick={() => window.open(`${deploy}`, "__blank")}
    >
      <div className={styles.content}>
        <img src={image} alt="" width={"auto"} height={500} />
      </div>

      <div className={styles.containerInfo}>
        <h2>
          {title.length > maxLength
            ? title.substring(0, maxLength) + "..."
            : title}
        </h2>
        <div className={styles.techdeployinfo}>
          <p>{technologies}</p>
          <a href={deploy} target="__blank">
            Ver ejemplo
          </a>
        </div>
      </div>
    </article>
  );
};
