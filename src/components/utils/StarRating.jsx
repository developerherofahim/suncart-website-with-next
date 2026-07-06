import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const StarRating = ({ rating }) => {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => {
        if (rating >= star) {
          return <FaStar key={star} className="text-yellow-500 text-xl" />;
        } else if (rating >= star - 0.5) {
          return <FaStarHalfAlt key={star} className="text-yellow-500 text-xl" />;
        } else {
          return <FaRegStar key={star} className="text-yellow-500 text-xl" />;
        }
      })}

      <span className="ml-2 text-sm text-gray-600">
        ({rating})
      </span>
    </div>
  );
};

export default StarRating;