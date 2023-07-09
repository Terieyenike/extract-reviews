import ImproveSuggestion from "./ImproveSuggestion";

const ReviewImprovementSuggestions = ({ suggestions }) => {
  return (
    <div>
      <h3 className='text-xl font-bold mt-3'>Improvement Suggestions:</h3>
      <ul className='list-disc'>
        {suggestions.map((suggestion, index) => (
          <ImproveSuggestion key={index} suggestion={suggestion} />
        ))}
      </ul>
    </div>
  );
};

export default ReviewImprovementSuggestions;
