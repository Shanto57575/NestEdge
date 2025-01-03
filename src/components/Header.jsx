"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
	FaSearch,
	FaHome,
	FaInfoCircle,
	FaUser,
	FaBars,
	FaTimes,
} from "react-icons/fa";
import ModeToggle from "./ModeToggle";

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [searchTerm, setSearchTerm] = useState("");

	const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

	return (
		<header className="sticky top-0 z-50 bg-background shadow-lg transition-colors duration-300">
			<div className="max-w-7xl mx-auto px-4 sm:px-6">
				<div className="flex justify-between items-center py-4">
					{/* Logo */}
					<div className="flex items-center">
						<Link href="/" className="flex items-center">
							<span className="text-2xl font-bold text-primary">Nest</span>
							<span className="text-2xl font-bold text-foreground">Edge</span>
						</Link>
					</div>

					{/* Search Bar - Hidden on mobile */}
					<div className="hidden md:flex items-center flex-1 mx-8">
						<div className="flex items-center w-full max-w-md px-4 py-2 rounded-full bg-muted">
							<FaSearch className="w-4 h-4 text-muted-foreground" />
							<input
								type="text"
								placeholder="Search..."
								className="ml-3 w-full focus:outline-none bg-transparent text-foreground placeholder-muted-foreground"
								value={searchTerm}
								onChange={(e) => setSearchTerm(e.target.value)}
							/>
						</div>
					</div>

					{/* Desktop Navigation */}
					<div className="hidden md:flex items-center space-x-8">
						<ModeToggle />
						<Link
							href="/"
							className="flex items-center space-x-1 text-foreground hover:text-primary"
						>
							<FaHome className="w-5 h-5" />
							<span>Home</span>
						</Link>
						<Link
							href="/about"
							className="flex items-center space-x-1 text-foreground hover:text-primary"
						>
							<FaInfoCircle className="w-5 h-5" />
							<span>About</span>
						</Link>
						<Link
							href="/sign-in"
							className="flex items-center space-x-1 text-foreground hover:text-primary"
						>
							<FaUser className="w-5 h-5" />
							<span>Sign In</span>
						</Link>
					</div>

					{/* Mobile Menu Button */}
					<div className="md:hidden flex items-center space-x-4">
						<ModeToggle />
						<button
							onClick={toggleMenu}
							className="p-2 rounded-lg text-foreground hover:bg-muted"
							aria-label="Toggle menu"
						>
							{isMenuOpen ? (
								<FaTimes className="w-6 h-6" />
							) : (
								<FaBars className="w-6 h-6" />
							)}
						</button>
					</div>
				</div>

				{/* Mobile Menu */}
				{isMenuOpen && (
					<div className="md:hidden">
						<div className="px-2 pt-2 pb-3 space-y-1 bg-background">
							{/* Mobile Search */}
							<div className="flex items-center px-4 py-2 rounded-lg bg-muted">
								<FaSearch className="w-4 h-4 text-muted-foreground" />
								<input
									type="text"
									placeholder="Search..."
									className="ml-3 w-full focus:outline-none bg-transparent text-foreground placeholder-muted-foreground"
									value={searchTerm}
									onChange={(e) => setSearchTerm(e.target.value)}
								/>
							</div>
							<Link
								href="/"
								className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-muted"
								onClick={() => setIsMenuOpen(false)}
							>
								<div className="flex items-center space-x-2">
									<FaHome className="w-5 h-5" />
									<span>Home</span>
								</div>
							</Link>
							<Link
								href="/about"
								className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-muted"
								onClick={() => setIsMenuOpen(false)}
							>
								<div className="flex items-center space-x-2">
									<FaInfoCircle className="w-5 h-5" />
									<span>About</span>
								</div>
							</Link>
							<Link
								href="/sign-in"
								className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-muted"
								onClick={() => setIsMenuOpen(false)}
							>
								<div className="flex items-center space-x-2">
									<FaUser className="w-5 h-5" />
									<span>Sign In</span>
								</div>
							</Link>
						</div>
					</div>
				)}
			</div>
		</header>
	);
};

export default Header;
