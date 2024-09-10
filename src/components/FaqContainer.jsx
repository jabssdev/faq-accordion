import { FaqTab } from "./FaqTab";
import data from "../data/data.json";

const { faqs } = data;

export const FaqContainer = () => {
	return (
		<section className="m-6 px-5 py-7 bg-white shadow-md rounded-lg">
			<h1>FAQs</h1>
			{faqs.map((item) => (
				<FaqTab key={item.id} {...item} />
			))}
		</section>
	);
};
