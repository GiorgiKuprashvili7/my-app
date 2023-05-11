import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import { ROUTESENUM } from "../../index";

const Loader = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container} onClick={() => navigate(ROUTESENUM.main)}>
      <h2>Click Anyware To Start</h2>
    </div>
  );
};

export default Loader;
