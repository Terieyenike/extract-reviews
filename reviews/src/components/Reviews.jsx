import ReviewImprovementSuggestions from "./ReviewImprovementSuggestions";

const Reviews = ({ reviewerName, reviewText, improvementSuggestions }) => {
  return (
    <div>
      <h3>
        <span>Reviewer name:</span>
      </h3>
      <p>{reviewerName}</p>
      <h3>
        <span>Review:</span>
      </h3>
      <p>{reviewText}</p>
      {improvementSuggestions && (
        <ReviewImprovementSuggestions suggestions={improvementSuggestions} />
      )}
    </div>
  );
};

export default Reviews;
