import styles from "./Projects.module.css";

export const Projects = () => {
  const MAX_CHARTS = 219;
  const LOREM_MOCK = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio,
          minus aspernatur repudiandae repellendus rerum nesciunt deserunt sed
          ut autem, error fuga fugiat mollitia minima omnis? Deserunt eius ex
          similique at! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio,
          minus aspernatur repudiandae repellendus rerum nesciunt deserunt sed
          ut autem, error fuga fugiat mollitia minima omnis? Deserunt eius ex
          similique at!`;

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2>Changelog</h2>
        <p>{LOREM_MOCK.substring(0, MAX_CHARTS) + `...`}</p>
        <a href="#">demo</a>
      </div>
      <div className={styles.card}>
        <h2>Typesense example</h2>
        <p>{LOREM_MOCK.substring(0, MAX_CHARTS) + "..."}</p>
        <a href="#">demo</a>
      </div>

      {/* <div className={styles.card}>
        <h2>Title</h2>
        <p>Description</p>
        <div className={styles.cardActions}>demo</div>
      </div>
      <div className={styles.card}>
        <h2>Title</h2>
        <p>Description</p>
        <div className={styles.cardActions}>demo</div>
      </div> */}
    </div>
  );
};
