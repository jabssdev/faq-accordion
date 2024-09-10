import PropTypes from "prop-types";

export const FaqTab = ({ question, answer }) => {
	return (
		<article>
			<h2>{question}</h2>
			<p>{answer}</p>
		</article>
	);
};

FaqTab.propTypes = {
	question: PropTypes.string.isRequired,
	answer: PropTypes.string.isRequired,
};
