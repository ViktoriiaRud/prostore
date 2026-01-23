"use client";

import { Button } from "@/components/ui/button";
import { createOrder } from "@/lib/actions/order.actions";
import { Check, Loader } from "lucide-react";
import { useRouter } from "next/navigation";
import type { FormEvent } from "react";
import { useState } from "react";

const PlaceOrderForm = () => {
	const router = useRouter();
	const [loading, setLoading] = useState(false);

	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setLoading(true);

		const res = await createOrder();
		if (res.redirectTo) {
			router.push(res.redirectTo);
		}

		setLoading(false);
	};

	return (
		<form onSubmit={handleSubmit} className="w-full">
			<Button disabled={loading} className="w-full" type="submit">
				{loading ?
					<Loader className="w-4 h-4 animate-spin" />
				:	<Check className="w-4 h-4" />}{" "}
				Place Order
			</Button>
		</form>
	);
};

export default PlaceOrderForm;
