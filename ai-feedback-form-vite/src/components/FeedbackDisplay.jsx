const FeedbackDisplay = ({ feedback }) => (
  <div className="card p-3">
    <h5>📊 Scores</h5>
    <ul>
      {Object.entries(feedback.scores).map(([key, value]) => (
        <li key={key}>
          <b>{key}:</b> {value}
        </li>
      ))}
    </ul>
    <p>
      <b>Overall Feedback:</b> {feedback.overallFeedback}
    </p>
    <p>
      <b>Observation:</b> {feedback.observation}
    </p>
  </div>
);

export default FeedbackDisplay;
