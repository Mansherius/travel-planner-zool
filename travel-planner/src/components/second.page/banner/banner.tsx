import React from "react";
import styles from "./banner.module.css";
import SearchBar from "../searchbar/searchbar";
import TabBar from "../tabbar/tabbar";
import Buttons from "../buttons/buttons";

interface BannerProps {
  onSearch: (query: string) => void;
  onTabChange: (tab: string) => void;
  onSortChange: (order: string) => void;
  cartCount:any;
}

const Banner: React.FC<BannerProps> = ({ onSearch, onTabChange, onSortChange,cartCount }) => {
  return (
    <div className={styles.banner}>
      <div>
        <TabBar onTabChange={onTabChange} />
        <SearchBar onSearch={onSearch} />
      </div>
      <div>
        <Buttons onSortChange={onSortChange} cartCount={cartCount}/>
      </div>
    </div>
  );
};

export default Banner;
