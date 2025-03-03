import { cn } from "@/lib/utils";

const ProductPrice = ({ value, className }: { value: number | string; className?: string }) => {
	const numericValue = Number(value);

	if (isNaN(numericValue)) {
		return <p className={cn("text-2xl", className)}>Invalid Price</p>;
	}

	const stringValue = numericValue.toFixed(2);
	const [intValue, floatValue] = stringValue.split(".");

	return (
		<p className={cn("text-2xl", className)}>
			<span className="text-xs align-super">$</span>
			{intValue}
			<span className="text-xs align-super">.{floatValue}</span>
		</p>
	);
};

export default ProductPrice;
