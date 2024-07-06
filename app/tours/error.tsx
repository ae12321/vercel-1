"use client";

function error(props: any) {
  // console.log({ props });
  console.error(props.message);
  return <div>error</div>;
}

export default error;
