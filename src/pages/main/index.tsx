import styles from "./styles.module.css";
import SpinnigTable from "../../components/spinningTable";
import { useState } from "react";

const MainPage = () => {
  const [started, setStarted] = useState(false);

  return (
    <div className={styles.wrapper} onClick={() => setStarted(true)}>
      <div className={styles.container}>
        <SpinnigTable
          isAnimationStarted={started}
          data={[
            {
              name: "1 zdarova ooooooooooooooooooooooooooooooooooooooooooooooooooo",
              id: 1,
            },
            { name: "2", id: 2 },
            { name: "3", id: 3 },
            { name: "4", id: 4 },
            { name: "5", id: 5 },
            { name: "nika", id: 12 },
            { name: "luka", id: 321 },
            { name: "gela", id: 4123 },
            { name: "gela", id: 4123213213 },
            { name: "gela", id: 41212332133 },
            { name: "gela", id: 412312213 },
            { name: "gio", id: 1 },
            { name: "nika", id: 2 },
            { name: "luka", id: 3 },
            { name: "gela", id: 4 },
            { name: "gio", id: 5 },
            { name: "gio", id: 5 },
            { name: "nika", id: 12 },
            { name: "luka", id: 321 },
            { name: "gela", id: 4123 },
            { name: "gela", id: 4123213213 },
            { name: "gela", id: 41212332133 },
            { name: "gela", id: 412312213 },
            { name: "gio", id: 1 },
            { name: "nika", id: 2 },
            { name: "luka", id: 3 },
            { name: "gela", id: 4 },
            { name: "gio", id: 5 },
            { name: "gio", id: 5 },
            { name: "gela", id: 4123213213 },
            { name: "gela", id: 41212332133 },
            { name: "gela", id: 412312213 },
            { name: "gio", id: 1 },
            { name: "nika", id: 2 },
            { name: "luka", id: 3 },
            { name: "2", id: 2 },
            { name: "3", id: 3 },
            { name: "4", id: 4 },
            { name: "5", id: 5 },
            { name: "nika", id: 12 },
            { name: "luka", id: 321 },
            { name: "gela", id: 4123 },
            { name: "gela", id: 4123213213 },
            { name: "gela", id: 41212332133 },
            { name: "gela", id: 412312213 },
            { name: "gio", id: 1 },
            { name: "nika", id: 2 },
            { name: "luka", id: 3 },
            { name: "gela", id: 4 },
            { name: "gio", id: 5 },
            { name: "gio", id: 5 },
            { name: "nika", id: 12 },
            { name: "luka", id: 321 },
            { name: "gela", id: 4123 },
            { name: "gela", id: 4123213213 },
            { name: "gela", id: 41212332133 },
            { name: "gela", id: 412312213 },
            { name: "gio", id: 1 },
            { name: "nika", id: 2 },
            { name: "luka", id: 3 },
            { name: "gela", id: 4 },
            { name: "gio", id: 5 },
            { name: "gio", id: 5 },
            { name: "gela", id: 4123213213 },
            { name: "gela", id: 41212332133 },
            { name: "gela", id: 412312213 },
            { name: "gio", id: 1 },
            { name: "nika", id: 2 },
            { name: "luka", id: 3 },
          ]}
        />
      </div>
      <div className={styles.container}>
        <SpinnigTable
          isAnimationStarted={started}
          data={[
            {
              name: "1 oooooooooooooooooooooooooooooooooooooooooooooooooo",
              id: 1,
            },
            { name: "2", id: 2 },
            { name: "3", id: 3 },
            { name: "4", id: 4 },
            { name: "5", id: 5 },
            { name: "nika", id: 12 },
            { name: "luka", id: 321 },
            { name: "gela", id: 4123 },
            { name: "gela", id: 4123213213 },
            { name: "gela", id: 41212332133 },
            { name: "gela", id: 412312213 },
            { name: "gio", id: 1 },
            { name: "nika", id: 2 },
            { name: "luka", id: 3 },
            { name: "gela", id: 4 },
            { name: "gio", id: 5 },
            { name: "gio", id: 5 },
            { name: "nika", id: 12 },
            { name: "luka", id: 321 },
            { name: "gela", id: 4123 },
            { name: "gela", id: 4123213213 },
            { name: "gela", id: 41212332133 },
          ]}
        />
      </div>
    </div>
  );
};

export default MainPage;
