import Reviews from "./components/Reviews";
import { reviews } from "./data/reviews";

function App() {
  return (
    <>
      {reviews.map((review) => (
        <div key={review.id}>
          <Reviews
            reviewerName={review.reviewerName}
            reviewText={review.reviewText}
            improvementSuggestions={review.improvementSuggestions}
          />
        </div>
      ))}
    </>
  );
}

export default App;
