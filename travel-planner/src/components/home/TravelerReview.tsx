import Image from 'next/image';

interface TravelerReviewProps {
  name: string;
  image: string;
  rating: number;
  review: string;
  title?: string;
}

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex">
    {[1, 2, 3, 4, 5].map((star) => (
      <span key={star} className={`text-black text-2xl`}>
        {star <= rating ? '★' : '☆'}
      </span>
    ))}
  </div>
);

const TravelerReview: React.FC<TravelerReviewProps> = ({ name, image, rating, review, title }) => {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md flex flex-col">
        <StarRating rating={rating} />
        <p className=" font-sans text-sm mt-2 mb-4 flex-grow">"{review}"</p>
        <div className="flex items-center">
          <Image
            src={image}
            alt={name}
            width={60}
            height={60}
            className="rounded-full mr-3"
          />
          <div>
            <h4 className="font-semibold text-sm">{name}</h4>
            {title && <p className=" text-xs text-gray-600">{title}</p>}
          </div>
        </div>
      </div>
    );
  };

export default TravelerReview;