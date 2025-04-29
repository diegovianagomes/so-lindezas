"use client"
import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { Menu } from "lucide-react";
import { navbarLinks } from "./NavbarLinks";
import Link from "next/link";

export function MobileMenu() {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                    <Menu className="w-4 h-4" />
                </Button>
            </SheetTrigger>
            <SheetContent className="border-l-8 border-primary bg-white/90">
                <SheetHeader>
                <SheetTitle className="font-bold text-xl text-primary">O que voçê vai querer hoje?</SheetTitle>
                <div className="mt-8 flex px-8 space-y-4 flex-col font-medium text-lg text-primary ">
                    {navbarLinks.map((item) => (
                        <Link href={item.href} key={item.id} className="hover:text-primary/50">
                            {item.name}
                        </Link>
                    ))}
                </div>
                </SheetHeader>
            </SheetContent>
            
        </Sheet>
    )
}