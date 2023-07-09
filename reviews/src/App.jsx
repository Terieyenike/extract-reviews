import Reviews from "./components/Reviews";
import Text from "./components/Text";
import Footer from "./components/Footer";

import { reviews } from "./data/reviews";

import "./App.css";

function App() {
  return (
    <>
      <div className='flex flex-col container mx-auto max-w-6xl w-4/5 py-8 min-h-screen'>
        <Text />
        {reviews.map((review) => (
          <Reviews
            key={review.id}
            reviewerName={review.reviewerName}
            reviewText={review.reviewText}
            improvementSuggestions={review.improvementSuggestions}
          />
        ))}
        <Footer />
      </div>
    </>
  );
}

export default App;
