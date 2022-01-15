import { useEffect } from "react";

let renderCount = 0;

function Child() {
  useEffect(() => {
    renderCount++;
  });
  return (
    <>
      <div>RenderCount is : {renderCount}</div>
    </>
  );
}
export default Child;
