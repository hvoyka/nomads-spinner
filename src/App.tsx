import React, { useEffect, useState } from "react";

import { SomeConvenientWidget, Spinner } from "components";
import { sleep } from "tools";

function App() {
  const [isWidgetLoaded, setIsWidgetLoaded] = useState(false);
  const TIME_TO_LOADING_WIDGET = 25;
  const TIME_LIMIT = 20;
  const TIMER_STEP = 5;

  useEffect(() => {
    sleep(TIME_TO_LOADING_WIDGET).then(() => {
      setIsWidgetLoaded(true);
    });
  }, []);

  return (
    <>
      {isWidgetLoaded ? (
        <SomeConvenientWidget />
      ) : (
        <Spinner
          timeLimitInSeconds={TIME_LIMIT}
          timerStepInSeconds={TIMER_STEP}
        />
      )}
    </>
  );
}

export default App;
