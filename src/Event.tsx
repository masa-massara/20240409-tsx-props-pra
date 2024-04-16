type EventType = { click: () => void };

const Event = (props: EventType) => {
  return (
    <div>
      Event
      <button onClick={props.click}>クリック</button>
    </div>
  );
};

export default Event;
