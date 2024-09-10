import { FaqTab } from "./FaqTab";
import data from "../data/data.json";
import iconStar from "../assets/images/icon-star.svg";

const { faqs } = data;

export const FaqContainer = () => {
	return (
		<section className="m-6 px-6 py-7 bg-white shadow-lg rounded-lg">
			<div className="flex gap-5 items-center mb-5">
				<img className="h-6" src={iconStar} alt="Star icon" />
				<h1 className="text-[2rem] font-bold">FAQs</h1>
			</div>
			{faqs.map((item, index) => (
				<FaqTab key={item.id} {...item} isLast={index === faqs.length - 1} />
			))}
		</section>
	);
};
