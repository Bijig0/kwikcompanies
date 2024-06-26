"use client";
import { useState } from "react";

const Preloader = () => {
  const [load, setLoad] = useState(false);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoad(false);
  //   }, 1000);
  // }, []);
  return (
    <div className="preloader" style={{ display: load ? "flex" : "none" }}>
      <div className="custom-loader" />
    </div>
  );
};
export default Preloader;
