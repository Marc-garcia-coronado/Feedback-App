"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { ThemeModeToggle } from "@/app/components/themeModeToggle";
import { useState } from "react";
import { X, AlignJustify } from "lucide-react";
import FeedbackResultsPopup from "@/app/components/FeedbackResultsPopup";

export default function SiteNav() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <NavigationMenu className="z-30">
        <NavigationMenuList className="flex justify-between container">
          <NavigationMenuItem>
            <Link href="/">
              <Image
                src="/kindred-logo.png"
                alt="kindred logo"
                width={80}
                height={80}
              />
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem className="relative lg:hidden">
            <button onClick={handleClick} className="justify-self-end">
              {isOpen ? <X /> : <AlignJustify />}
            </button>
            {isOpen && (
              <div className="absolute top-7 right-0 z-auto h-[15rem] w-[15rem] border bg-white dark:bg-black dark:border-white">
                <NavigationMenuList className="flex flex-col justify-around h-[15rem] py-4 items-center container space-x-0">
                  <NavigationMenuItem>
                    <Link href="/" legacyBehavior passHref>
                      <NavigationMenuLink className="hover:underline underline-offset-8">
                        Get started
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link href="/feedback-form/1" legacyBehavior passHref>
                      <NavigationMenuLink className="hover:underline underline-offset-8">
                        Give feedback
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="/feedback-results" legacyBehavior passHref>
                            <NavigationMenuLink className="hover:underline underline-offset-8">
                                Results
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                  <ThemeModeToggle />
                </NavigationMenuList>
              </div>
            )}
          </NavigationMenuItem>

          <div className={"hidden lg:block"}>
            <NavigationMenuList className="lg:flex lg:last:space-x-3">
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Get started
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/feedback-form/1" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Give feedback
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href="/feedback-results" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Results
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
              <ThemeModeToggle />
            </NavigationMenuList>
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </>
  );
}

const ListItem = ({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
};
ListItem.displayName = "ListItem";
