"use client";

import { Button } from "@/components/ui/button";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/hooks/use-toast";
import { CartItem } from "@/types";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import { addItemToCart } from "./cart.actions";

const AddToCard = ({ item }: { item: CartItem }) => {
	const router = useRouter();
	const { toast } = useToast();

	const handleAddToCart = async () => {
		const res = await addItemToCart(item);

		if (!res.success) {
			toast({
				variant: "destructive",
				description: res.message,
			});
			return;
		}

		//  Handle success add to cart
		toast({
			description: `${item.name} added to cart`,
			action: (
				<ToastAction
					className="bg-primary text-white hover:bg-gray-800"
					altText="Go To 
                Cart"
					onClick={() => router.push("/cart")}>
					<Plus /> Go To Cart
				</ToastAction>
			),
		});
	};
	return (
		<Button className="w-full" type="button" onClick={handleAddToCart}>
			Add to Cart
		</Button>
	);
};

export default AddToCard;
