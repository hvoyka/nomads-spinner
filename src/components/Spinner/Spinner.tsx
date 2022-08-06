import { FC, useState } from "react";

import { getLocalization } from "tools";
import { useTimer } from "use-timer";

interface SpinnerProps {
  timeLimitInSeconds?: number;
  timerStepInSeconds?: number;
}

enum Loading {
  FIRST = "Loading.First",
  SECOND = "Loading.Second",
  THIRD = "Loading.Third",
  TIMEOUT = "Error.Timeout",
}

export const Spinner: FC<SpinnerProps> = ({
  timeLimitInSeconds = 20,
  timerStepInSeconds = 5,
}) => {
  const [text, setText] = useState(Loading.FIRST);
  useTimer({
    autostart: true,
    endTime: timeLimitInSeconds,

    onTimeUpdate: (time) => {
      if (time === timerStepInSeconds) {
        setText(Loading.SECOND);
      } else if (time === timerStepInSeconds * 2) {
        setText(Loading.THIRD);
      }
    },

    onTimeOver: () => {
      setText(Loading.TIMEOUT);
    },
  });

  return <>{getLocalization(text)}</>;
};
