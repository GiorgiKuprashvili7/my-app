import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import { ROUTESENUM } from "../../index";

const CowntDown = () => {
  const [count, setCount] = useState(10);
  const navigate = useNavigate();

  useEffect(() => {
    const countdown = setInterval(() => {
      setCount((prevCount) => prevCount - 1);
    }, 1000);

    if (count === 0) {
      clearInterval(countdown);
      // Redirect to a specific route using React Router
      navigate(ROUTESENUM.loader);
    }

    return () => {
      clearInterval(countdown);
    };
  }, [count]);
  return (
    <div className={styles.container}>
      <h2>{count}</h2>
    </div>
  );
};

export default CowntDown;
