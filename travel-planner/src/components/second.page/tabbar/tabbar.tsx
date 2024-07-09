import React from "react";
import styles from "./tabbar.module.css";
const TabBar: React.FC = () =>{
    return(
        <div className={styles.tabBar}>
        <div className={styles.tabBarContent}>
          <div className={styles.tabBarName}>
            <TabItem label="All" />
            <TabSeparator />
            <TabItem label="Tourist Attractions" />
            <TabSeparator />
            <TabItem label="Hotels" />
            <TabSeparator />
            <TabItem label="Restaurants" />
          </div>
        </div>
      </div>
    );
};
const TabItem: React.FC<{ label: string }> = ({ label }) => {
    return (
      <div className={styles.tabBarLabel}>
        {label}
      </div>
    );
  };
  
  const TabSeparator: React.FC = () => {
    return <div className={styles.tabBarSeperator}>|</div>;
  };
  export default TabBar;