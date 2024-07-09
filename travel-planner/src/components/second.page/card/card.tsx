import React from 'react';
import Image from 'next/image';
import styles from './cards.module.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Card = ({ cardData, onClick, onClose, isSelected }: any) => {
  const { title, subtitle, imageUrl, rating, price,description } = cardData;

  const renderStars = (rating: any) => {
    const fullStars = Math.floor(rating);
    const halfStars = rating % 1 !== 0 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStars;

    const stars = [];
    for (let i = 0; i < fullStars; i++) {
      stars.push(<i key={`full-${i}`} className="bi bi-star-fill"></i>);
    }
    for (let i = 0; i < halfStars; i++) {
      stars.push(<i key={`half-${i}`} className="bi bi-star-half"></i>);
    }
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<i key={`empty-${i}`} className="bi bi-star"></i>);
    }

    return stars;
  };

  return (
    <div className={`${styles.card} ${isSelected ? styles.selectedCard : ''}`} onClick={!isSelected ? onClick : undefined}>
      <div className={styles.cardBody}>
        <div className={styles.cardHeader}>
          <div className={styles.cardTitle}>
            <h4>{title}</h4>
            <p>{subtitle}</p>
          </div>
          <div className={styles.cardIcons}>
            {isSelected && (
              <div className={styles.cardCloseIcon} onClick={onClose}>
                <i className="bi bi-x"></i>
              </div>
            )}
            <div className={styles.cardPlusIcon}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <mask
                  id={`mask0_`}
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="24"
                  height="24"
                >
                  <rect y="0.0839844" width="24" height="24" fill="#D9D9D9" />
                </mask>
                <g mask={`url(#mask0_)`}>
                  <path
                    d="M11 13.084H6C5.71667 13.084 5.47917 12.9882 5.2875 12.7965C5.09583 12.6048 5 12.3673 5 12.084C5 11.8007 5.09583 11.5632 5.2875 11.3715C5.47917 11.1798 5.71667 11.084 6 11.084H11V6.08398C11 5.80065 11.0958 5.56315 11.2875 5.37148C11.4792 5.17982 11.7167 5.08398 12 5.08398C12.2833 5.08398 12.5208 5.17982 12.7125 5.37148C12.9042 5.56315 13 5.80065 13 6.08398V11.084H18C18.2833 11.084 18.5208 11.1798 18.7125 11.3715C18.9042 11.5632 19 11.8007 19 12.084C19 12.3673 18.9042 12.6048 18.7125 12.7965C18.5208 12.9882 18.2833 13.084 18 13.084H13V18.084C13 18.3673 12.9042 18.6048 12.7125 18.7965C12.5208 18.9882 12.2833 19.084 12 19.084C11.7167 19.084 11.4792 18.9882 11.2875 18.7965C11.0958 18.6048 11 18.3673 11 18.084V13.084Z"
                    fill="#00A8D3"
                  />
                </g>
              </svg>
            </div>
          </div>
        </div>
        <div className={styles.cardImage}>
          <Image 
            src={imageUrl} 
            alt=""
            layout='fill'
            className='object-cover'
            />
          <div className={styles.starContainer}>
            {renderStars(rating)}
            <span>2k</span>
          </div>
        </div>
        <div className={styles.cardFooter}>
          <div>${price}</div>
          <div>{rating} <i className="bi bi-star"></i></div>
        </div>
        {isSelected && (
          <div className={styles.cardDescription}>
            <p>{description}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
