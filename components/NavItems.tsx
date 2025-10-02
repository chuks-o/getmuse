"use client"
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { User, Settings, LogOut } from "lucide-react";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Companions", path: "/companions" },
  { name: "My Journey", path: "/my-journey" },
];

const NavItems = () => {
  const pathname = usePathname();

  return (
    <div className="flex items-center gap-8">
      <div className="flex gap-6">
        {navLinks.map(({ name, path }) => (
          <Link
            key={path}
            href={path}
            className={cn(pathname === path ? "text-foreground" : "text-muted-foreground", "text-sm font-medium transition-colors hover:text-foreground")}
          >
            {name}
          </Link>
        ))}
      </div>

      <DropdownMenu>
        <DropdownMenuTrigger className="focus:outline-none">
          <Avatar className="h-9 w-9 cursor-pointer ring-2 ring-transparent hover:ring-border transition-all">
            <AvatarImage src="https://github.com/shadcn.png" alt="Profile" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56 bg-popover">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="cursor-pointer">
            <User className="mr-2 h-4 w-4" />
            Profile
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer">
            <Settings className="mr-2 h-4 w-4" />
            Settings
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="cursor-pointer">
            <LogOut className="mr-2 h-4 w-4" />
            Log out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div >
  )
}

export default NavItems