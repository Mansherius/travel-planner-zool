import React from "react";
import styles from "./tabbar.module.css";

interface TabBarProps {
  onTabChange: (tab: string) => void;
}

const TabBar: React.FC<TabBarProps> = ({ onTabChange }) => {
  return (
    <div className={styles.tabBar}>
      <div className={styles.tabBarContent}>
        <div className={styles.tabBarName}>
          <TabItem label="All" onClick={() => onTabChange("All")} />
          <TabSeparator />
          <TabItem label="Tourist Attractions" onClick={() => onTabChange("Tourist Attractions")} />
          <TabSeparator />
          <TabItem label="Hotels" onClick={() => onTabChange("Hotels")} />
          <TabSeparator />
          <TabItem label="Restaurants" onClick={() => onTabChange("Restaurants")} />
        </div>
      </div>
    </div>
  );
};

interface TabItemProps {
  label: string;
  onClick: () => void;
}

const TabItem: React.FC<TabItemProps> = ({ label, onClick }) => {
  return (
    <div className={styles.tabBarLabel} onClick={onClick}>
      {label}
    </div>
  );
};

const TabSeparator: React.FC = () => {
  return <div className={styles.tabBarSeparator}>|</div>;
};

export default TabBar;
