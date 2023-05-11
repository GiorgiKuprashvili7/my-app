import styles from "./styles.module.css";
import { useEffect, useRef, useState } from "react";

type propTypes = {
  isAnimationStarted: Boolean;
  data: {
    id: number;
    name: string;
  }[];
};

type tableRowTypes = { id: number; name: string };

const TableRow = ({ id, name }: tableRowTypes) => {
  return (
    <div className={styles.tableRow}>
      {id} / {name}
    </div>
  );
};

const SpinnigTable = (props: propTypes) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const innerelementRef = useRef<HTMLDivElement>(null);

  const [containerHeight, setContainerHeight] = useState<number>(0);
  const [innerHeight, setInnerHeight] = useState<number>(0);

  useEffect(() => {
    if (elementRef.current) {
      setContainerHeight(elementRef.current.offsetHeight);
    }
    if (innerelementRef.current) {
      setInnerHeight(innerelementRef.current.offsetHeight);
    }
  }, [elementRef.current, innerelementRef.current, props?.data]);

  const animationStyles = {
    animationName: "marquee",
    animationPlayState: props.isAnimationStarted ? "running" : "paused",
    animationDuration: `${(props?.data?.length % containerHeight) / 4}s`,
  };

  return (
    <div className={styles.table} ref={elementRef}>
      <div
        className={styles.tableInner}
        style={innerHeight > containerHeight ? { ...animationStyles } : {}}
      >
        <div ref={innerelementRef}>
          {props?.data?.map((o, index) => (
            <TableRow key={index} name={o.name} id={index} />
          ))}
        </div>
        {innerHeight > containerHeight && (
          <div>
            {props?.data?.map((o, index) => (
              <TableRow key={index} name={o.name} id={index + 1} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SpinnigTable;
