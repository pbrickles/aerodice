import React, {useState} from "react";
import {useInterval} from "../helpers/useInterval";
import {useStateValue} from "../state/StateProvider";

const Timer = ({time}) => {
  const [{}, dispatch] = useStateValue();
  const [remaining, setRemaining] = useState(time);
  useInterval(() => {
    setRemaining(Math.floor(remaining - 1000));
  }, 1000);

  return (
    <div>
      {remaining >= 0
        ? `${Math.floor(remaining / 1000)}s`
        : dispatch({
            type: "advanceBrewStep",
          })}
    </div>
  );
};

export default Timer;
