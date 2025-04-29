import Link from "next/link";
import { NavbarLinks } from "./NavbarLinks";
import { Button } from "@/components/ui/button";
import { MobileMenu } from "./MobileMenu";

export function Navbar() {
    return (
        <nav className="relative max-w-7xl w-full flex md:grid md:grid-cols-12 items-center md:px-8 mx-auto px-4 py-7">
            <div className="md:col-span-3">
                <Link  href="/">
                    <h1 className="text-2xl font-semibold"> So Lindezas </h1>
                </Link>
            </div>
            <NavbarLinks />
            <div className="flex item-center gap-x-2 ms-auto md:col-span-3">
                <Button >Sign-in</Button>
                <Button variant="secondary">Sign-up</Button>

                <div className="md:hidden">
                    <MobileMenu />
                </div>
            </div>

        </nav>
    )
}