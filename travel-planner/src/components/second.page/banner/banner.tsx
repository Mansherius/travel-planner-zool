import React from "react";
import SearchBar from "../searchbar/searchbar";
import styles from "./banner.module.css";
import TabBar from "../tabbar/tabbar";
import Buttons from "../buttons/buttons";


const Banner: React.FC = () => {
  return (
    <div className={styles.banner}>
      <div>
        <TabBar />
        <SearchBar />
      </div>
      <div><Buttons /></div>
    </div>

    
  );
};

export default Banner;
