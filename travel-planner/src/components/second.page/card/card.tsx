import React from "react";
import Image from "next/image";
import styles from "./cards.module.css";
import {
  FaStar,
  FaRegStar,
  FaStarHalfAlt,
  FaTimes,
  FaPlus,
} from "react-icons/fa";

const Card = ({ cardData, onClick, onClose, isSelected, onAdd }: any) => {
  const { title, subtitle, imageUrl, rating, price, description, type } = cardData;

  const renderStars = (rating: any) => {
    const fullStars = Math.floor(rating);
    const halfStars = rating % 1 !== 0 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStars;

    const stars = [];
    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`full-${i}`} size={20} className="mt-1" />);
    }
    for (let i = 0; i < halfStars; i++) {
      stars.push(<FaStarHalfAlt key={`half-${i}`} size={20} className="mt-1" />);
    }
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FaRegStar key={`empty-${i}`} size={20} className="mt-1" />);
    }

    return stars;
  };

  const renderAdditionalSections = () => {
    switch (type) {
      case "hotel":
        return (
          <div className={styles.additionalSections}>
            <div className={styles.amenities}>
              <h5>Amenities</h5>
              <div className={styles.items}>
                <p>Free Wifi</p>
                <p>Swimming pool</p>
                <p>Gym</p>
              </div>
            </div>
            <div className={styles.reviews}>
              <h5>Reviews</h5>
              <p>"Great stay!"</p>
              <p>"Very clean and comfortable."</p>
            </div>
          </div>
        );
      case "location":
        return (
          <div className={styles.additionalSections}>
            <div className={styles.activities}>
              <h5>Activities</h5>
              <div className={styles.items}>
                <p>Hiking</p>
                <p>Sightseeing</p>
                <p>Shopping</p>
              </div>
            </div>
          </div>
        );
      case "restaurant":
        return (
          <div className={styles.additionalSections}>
            <div className={styles.cuisine}>
              <h5>Cuisine Type</h5>
              <div className={styles.items}>
                <p>Italian</p>
                <p>Chinese</p>
                <p>Indian</p>
              </div>
            </div>
            <div className={styles.reviews}>
              <h5>Reviews</h5>
              <p>"Delicious food!"</p>
              <p>"Great service and ambiance."</p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className={`${styles.card} ${isSelected ? styles.selectedCard : ""}`}>
      <div className={styles.cardHeader}>
        <div className={styles.cardTitle}>
          <h4>{title}</h4>
          <p>{subtitle}</p>
        </div>
        <div className={styles.cardIcons}>
          {isSelected && (
            <div className={styles.cardCloseIcon} onClick={onClose}>
              <FaTimes size={20} />
            </div>
          )}
          <div className={styles.cardPlusIcon} onClick={() => onAdd()}>
            <FaPlus size={20} />
          </div>
        </div>
      </div>
      <div className={styles.cardBody} onClick={!isSelected ? onClick : undefined}>
        <div className={styles.cardImage}>
          <Image src={imageUrl} alt="" layout="fill" className="object-cover" />
          <div className={styles.starContainer}>
            {renderStars(rating)}
            <span className="text-xl">2k</span>
          </div>
        </div>
        <div className={styles.cardFooter}>
          <div className="text-xl">${price}</div>
          <div className="text-xl">
            {rating} <FaStar size={20} className="ml-1 mt-1" />
          </div>
        </div>
        {isSelected && (
          <div>
            <p>{description}</p>
            {renderAdditionalSections()}
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
