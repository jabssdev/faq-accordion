import { FaqContainer } from "./components/FaqContainer";
import bgMobile from "./assets/images/background-pattern-mobile.svg";

export const App = () => {
	return (
		<section>
			<img className="mb-5" src={bgMobile} alt="Header background mobile" />
			<FaqContainer />
		</section>
	);
};
