import { PropsWithChildren } from "react";

function layout(props: PropsWithChildren) {
  return (
    <div>
      <header className="p-2 w-1/2 rounded bg-red-300">tour layout</header>
      {props.children}
    </div>
  );
}

export default layout;
