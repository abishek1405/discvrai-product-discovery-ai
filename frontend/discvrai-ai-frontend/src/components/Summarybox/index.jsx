export default function SummaryBox({ summary }) {
  return (
    <div className="summary">
      <h2>AI Recommendation Summary</h2>
      <p>{summary}</p>
    </div>
  );
}