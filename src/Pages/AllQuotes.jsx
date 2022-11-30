import QuoteList from "./../Components/quotes/QuoteList";

const DUMMY_QUOTES = [
  { id: "q1", author: "Max", text: "Learning React is fun!" },
  {
    id: "q2",
    author: "Milan",
    text: "Functional components is best!",
  },
  { id: "q3", author: "Vanja", text: "Ko ce dati gol? Mitrogol!" },
];

const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES} />;
};
export default AllQuotes;
