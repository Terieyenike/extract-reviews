import ImproveSuggestion from "./ImproveSuggestion";

const ReviewImprovementSuggestions = ({ suggestions }) => {
  console.log(suggestions);
  return (
    <div>
      <h3>Improvement Suggestions:</h3>
      <ul>
        {suggestions.map((suggestion, index) => (
          <ImproveSuggestion key={index} suggestion={suggestion} />
        ))}
      </ul>
    </div>
  );
};

export default ReviewImprovementSuggestions;
