import React, {useState} from "react";
import {useInterval} from "../helpers/useInterval";

const Timer = ({time}) => {
  const [remaining, setRemaining] = useState(time);
  useInterval(() => {
    setRemaining(Math.floor(remaining - 1000));
  }, 1000);

  return <div>{remaining >= 0 && `${Math.floor(remaining / 1000)}s`}</div>;
};

export default Timer;
