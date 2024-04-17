type styleType = {
  style: object;
};

const StyleProps = (props: styleType) => {
  return (
    <div>
      <h1 style={props.style}>Tips</h1>
    </div>
  );
};

export default StyleProps;
