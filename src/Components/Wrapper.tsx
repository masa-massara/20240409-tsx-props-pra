import { ReactNode } from "react";

// コンポーネントファイルをチルドレンとして読み込む
type WrapperProps = { children: ReactNode };

const Wrapper = (props: WrapperProps) => {
  return <div>{props.children}</div>;
};

export default Wrapper;
