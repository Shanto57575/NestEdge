"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const ModeToggle = () => {
	const { theme, setTheme } = useTheme();
	const [mounted, setMounted] = React.useState(false);

	// Prevent hydration mismatch by mounting after client-side render
	React.useEffect(() => {
		setMounted(true);
	}, []);

	// Don't render anything until mounted on client
	if (!mounted) {
		return null;
	}

	return (
		<div
			className={`relative w-10 h-10 flex items-center justify-center rounded-lg transition-colors duration-300
        ${theme === "dark" ? "border" : "bg-slate-100"}
        hover:bg-slate-200 dark:hover:bg-slate-900
      `}
		>
			<Sun
				onClick={() => setTheme("dark")}
				className={`absolute h-6 w-6 cursor-pointer transition-all duration-300 ease-in-out hover:text-yellow-400
          ${
						theme === "dark"
							? "opacity-0 rotate-90 scale-0"
							: "opacity-100 rotate-0 scale-100"
					}
        `}
			/>

			<Moon
				onClick={() => setTheme("light")}
				className={`
          absolute 
          h-6 w-6 
          cursor-pointer 
          transition-all duration-300 ease-in-out
          hover:text-blue-400
          ${
						theme === "dark"
							? "opacity-100 rotate-0 scale-100"
							: "opacity-0 -rotate-90 scale-0"
					}
        `}
			/>
		</div>
	);
};

export default ModeToggle;
