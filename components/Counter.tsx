"use client";
import CountUp from "react-countup";
import ReactVisibilitySensor from "react-visibility-sensor";

type Props = {
  end: number;
  extraClass?: string;
};

const Counter = (props: Props) => {
  const { end, extraClass } = props;
  return (
    <CountUp end={end ? end : 100} duration={3} decimals={0}>
      {({ countUpRef, start }) => (
        <ReactVisibilitySensor onChange={start} delayedCall>
          <span
            className={`${extraClass}`}
            data-from="0"
            data-to={end}
            ref={countUpRef}
          >
            count
          </span>
        </ReactVisibilitySensor>
      )}
    </CountUp>
  );
};

export default Counter;
