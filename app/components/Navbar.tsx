import Image from "next/image";
import React from "react";
import logo from "@/app/Images/logo.png";
import { Menu } from "lucide-react";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

type props = {
  name: string;
};

function Navbar({ name }: props) {
  const items = [
    { name: "Home", url: "/" },
    { name: "Portfolio", url: "/portfolio" },
    { name: "About", url: "/about" },
    { name: "Contact", url: "/contact" },
    { name: "Services", url: "/services" },
  ];

  return (
    <div className="flex justify-between p-5">
      <Image src={logo} width={40} height={40} alt="logo of the company" />
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger>
            <Menu className="md:hidden" size={40} />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle className="pt-10">{name}</SheetTitle>
              <div className="flex justify-center">
                <Image
                  src={logo}
                  width={40}
                  height={40}
                  alt="logo of the company"
                />
              </div>
              <div className="flex flex-col gap-4 pt-5">
                <Link href={`${items[0].url}`}>{items[0].name}</Link>
                <Link href={`${items[1].url}`}>{items[1].name}</Link>
                <Link href={`${items[2].url}`}>{items[2].name}</Link>
                <Link href={`${items[3].url}`}>{items[3].name}</Link>
                <Link href={`${items[4].url}`}>{items[4].name}</Link>
              </div>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>

      <div className="hidden md:flex gap-5">
        <Link href={`${items[0].url}`}>{items[0].name}</Link>
        <Link href={`${items[1].url}`}>{items[1].name}</Link>
        <Link href={`${items[2].url}`}>{items[2].name}</Link>
        <Link href={`${items[4].url}`}>{items[4].name}</Link>
      </div>
      <button className="hidden md:flex">
        <Link href={`${items[3].url}`}>{items[3].name}</Link>
      </button>
    </div>
  );
}

export default Navbar;
