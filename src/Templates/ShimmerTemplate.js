import React from "react";
export default function ShimmerTemplate() {
  return (
    <div className={`template`}>
      <div className={"logo line"} />
      <div className={"content"}>
        <p className={"title line"} />
        <p className={"sub-title line"} />
      </div>
    </div>
  );
}
