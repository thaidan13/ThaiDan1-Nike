import ReviewCard from "../components/ReviewCard";
import { reviews } from "../constants";

const CustomerReviews = () => {
  return (
    <section className='max-container'>
      <h3 className='font-palanquin text-center text-4xl font-bold'>
        <span className='text-coral-red'> Khách hàng  </span>
        của chúng tôi nói gì?
      </h3>
      <p className='m-auto mt-4 max-w-lg  text-center info-text'>
        Hãy nghe những câu chuyện chân thực từ những khách hàng hài lòng của 
        chúng tôi về những trải nghiệm đặc biệt của họ với chúng tôi.
      </p>

      <div className='mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14'>
        {reviews.map((review, index) => (
          <ReviewCard
            key={index}
            imgURL={review.imgURL}
            customerName={review.customerName}
            rating={review.rating}
            feedback={review.feedback}
          />
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews