"use client"

import { NAV_LINKS } from "@/constants";
import Link from "next/link";
import React from "react";

export const Navbar = () => {
    return (
        <nav>
            <ul className="flex justify-around">
                {NAV_LINKS.map((link) => (
                    <Link href={link.href} key={link.key} className="p-5">
                        {link.label}
                    </Link>
                ))}
            </ul>
        </nav>
    );
};
