import React, { useEffect, useState } from "react";
import "./DotLoader.css";

const DotLoader = () => {
  const [pageLoader, setPageLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setPageLoader(false);
    }, 10000);
  }, []);

  return (
    <div className={`loader-container ${pageLoader ? "show" : "hide"}`}>
      <div className='loader'>
        <div className='spinner'></div>
      </div>
    </div>
  );
};

export default DotLoader;
