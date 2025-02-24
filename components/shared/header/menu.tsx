"use client";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { EllipsisVertical, ShoppingCart, UserIcon } from "lucide-react";
import Link from "next/link";
import ModeToggle from "./mode-toggle";

const Menu = () => {
	return (
		<>
			<div className="flex justify-end gap-3">
				<nav className="hidden md:flex w-full max-w-xs gap-1">
					<ModeToggle />
					<Button asChild variant="ghost">
						<Link href="/card">
							<ShoppingCart /> Card
						</Link>
					</Button>
					<Button asChild>
						<Link href="/sing-in">
							<UserIcon /> Sing In
						</Link>
					</Button>
				</nav>
				<nav className="md:hidden">
					<Sheet>
						<SheetTrigger className="align-middle">
							<EllipsisVertical />
						</SheetTrigger>
						<SheetContent className="flex flex-col items-start">
							<SheetTitle>Menu</SheetTitle>
							<ModeToggle />
							<Button asChild variant="ghost">
								<Link href="/card">
									<ShoppingCart /> Card
								</Link>
							</Button>
							<Button asChild>
								<Link href="/sing-in">
									<UserIcon /> Sing In
								</Link>
							</Button>
							<SheetDescription></SheetDescription>
						</SheetContent>
					</Sheet>
				</nav>
			</div>
		</>
	);
};

export default Menu;
