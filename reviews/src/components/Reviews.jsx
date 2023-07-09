import ReviewImprovementSuggestions from "./ReviewImprovementSuggestions";

const Reviews = ({ reviewerName, reviewText, improvementSuggestions }) => {
  return (
    <div className='mb-8'>
      <h3 className='text-xl font-bold'>
        <span>Reviewer name:</span>
      </h3>
      <p className='mb-3'>{reviewerName}</p>
      <h3 className='text-xl font-bold'>
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
