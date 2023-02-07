import React from "react";
import s from "./App.module.scss";
import Main from "../Main";
import 'swiper/css';


export const App = () => {
  return <div className={s.App}>
    <Main/>
  </div>;
};

export default App;
