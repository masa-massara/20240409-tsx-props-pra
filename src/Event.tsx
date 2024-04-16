import { ReactElement } from "react";

type EventType = {
  click: (e: React.MouseEvent<HTMLButtonElement>, text: string) => void;
};

const Event = (props: EventType) => {
  return (
    <div>
      Event
      <button
        onClick={(e) => {
          props.click(e, "おはよう");
        }}
      >
        クリック
      </button>
    </div>
  );
};

export default Event;
