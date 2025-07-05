"use client";

import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  Camera,
  Medal,
  Menu,
  Trophy,
  User,
  Users,
  X,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const navigation = [
  { name: "Home", href: "/", icon: Trophy },
  { name: "Sports", href: "/sports", icon: Trophy },
  { name: "Departments", href: "/departments", icon: Users },
  { name: "Fixtures", href: "/fixtures", icon: Calendar },
  { name: "Leaderboard", href: "/leaderboard", icon: Medal },
  { name: "Gallery", href: "/gallery", icon: Camera },
  { name: "Profile", href: "/profile", icon: User },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-sm border-b sticky inset-0 z-[9999]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="h-8 w-8  rounded-lg bg-blue-600 overflow-hidden relative ">
                <img
                  src="/ulk-logo.jpg"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-bold text-xl text-gray-900 dark:text-white">
                Sports League
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <ModeToggle />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <ModeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-900 border-t">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 block px-3 py-2 text-base font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                <div className="flex items-center space-x-2">
                  <item.icon className="h-5 w-5" />
                  <span>{item.name}</span>
                </div>
              </Link>
            ))}
            <div className="px-3 py-2">
              <Button asChild className="w-full">
                <Link href="/admin">Admin Dashboard</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
