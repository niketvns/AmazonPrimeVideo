import React from "react";
import ReactDom from "react-dom/client";
import "./index.css"
import Card from "./Card";
import Sdata from "./Sdata";
const root = ReactDom.createRoot(document.getElementById("root"));

function ncard(val) {
  return (
    <Card imgsrc={val.imgsrc}
      title={val.title}
      category={val.category}
      link={val.links}
    />
  );
}

root.render(
  <>
    <div className="heading">
      <h1 className="main_heading">Top Movies & Webseries of Amazon Prime are Here !</h1>
    </div>

    <div className="all_cards">
      {Sdata.map(ncard)}
    </div>

  </>
)