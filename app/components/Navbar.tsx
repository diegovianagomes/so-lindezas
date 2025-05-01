import Link from "next/link";
import { NavbarLinks } from "./NavbarLinks";
import { Button } from "@/components/ui/button";
import { MobileMenu } from "./MobileMenu";
import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { UserNav } from "./UserNav";

export async function Navbar() {
    const {getUser} = getKindeServerSession();
    const user = await getUser();
    return (
        <nav className="relative max-w-7xl w-full flex md:grid md:grid-cols-12 items-center md:px-8 mx-auto px-4 py-7">
            <div className="md:col-span-3">
                <Link  href="/">
                    <h1 className="text-2xl font-semibold"> So Lindezas </h1>
                </Link>
            </div>
            <NavbarLinks />
            <div className="flex item-center gap-x-2 ms-auto md:col-span-3">
                
                {user ? (
                    <UserNav 
                        email={user.email as string} 
                        name={user.given_name as string} 
                        userImage={
                            user.picture ?? `https://avatar.vercel.sh/${user.given_name}`} 
                    />
                ) : (
                    <div className="flex items-center gap-x-2">
                        <Button asChild>
                            <LoginLink>Sign-in</LoginLink>
                        </Button>
                        <Button variant="secondary" asChild>
                            <RegisterLink>Sign-up</RegisterLink>
                        </Button>
                    </div>
                )}  

                <div className="md:hidden">
                    <MobileMenu />
                </div>
            </div>

        </nav>
    )
}