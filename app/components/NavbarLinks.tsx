"use client"
import { cn } from "@/lib/utils";
import Link from "next/link"
import { usePathname } from "next/navigation";

export const navbarLinks = [
    {
        id: 0,
        name: 'Home',
        href: '/',
    },
    {
        id: 1,
        name: 'Promoção',
        href: '#',
    },
    {
        id: 2,
        name: 'Novidades',
        href: '#',
    },
    {
        id: 3,
        name: 'Feminino',
        href: '#',
    },
    {
        id: 4,
        name: 'Masculino',
        href: '#',
    },
    {
        id: 5,
        name: 'Acessorios',
        href: '#',
    },
    {
        id: 6,
        name: 'Calçados',
        href: '#',
    },
]

export function NavbarLinks() {
    const location = usePathname();
    console.log(location) // /home
    return (
        <div className="hidden md:flex justify-center items-center col-span-6 gap-6">
            {navbarLinks.map((item) => (
                <Link href={item.href} key={item.id} className={cn(
                    location === item.href 
                    ? 'bg-muted' 
                    : 'hover:bg-muted hover: bg-opacity-75', "group flex items-center px-2 py-2 font-medium rounded-md border-2 border-primary text-primary"
                )}>
                {item.name}
                </Link>
            ))}
            
        </div>
    )
 
}