import PropTypes from "prop-types";
import iconPlus from "../assets/images/icon-plus.svg";

export const FaqTab = ({ question, answer, isLast }) => {
	return (
		<article>
			<div className="flex items-center justify-between mb-5">
				<h2 className="font-semibold mr-6 hover:text-ct-hover-purple cursor-pointer">{question}</h2>
				<img className="cursor-pointer" src={iconPlus} alt="" />
			</div>
			<p className="text-sm text-ct-grayish-purple">{answer}</p>
			{!isLast && <hr className="my-5" />}
		</article>
	);
};

FaqTab.propTypes = {
	question: PropTypes.string.isRequired,
	answer: PropTypes.string.isRequired,
	isLast: PropTypes.bool,
};
