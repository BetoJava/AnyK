"use client"

import { useTheme } from "@/components/theme-provider"

export default function Logo({ invert = false, size = 16 }) {
    const { theme } = useTheme()
    let fill = theme === "dark" ? "black" : "white"
    if (invert) {
        fill = theme === "dark" ? "white" : "black"
    }
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 864 864"
        width={size}
        height={size}
      >
        <rect width="864" height="864" fill="transparent" />
        <g>
          <path
            fill={fill}
            d="M666,144L306,657h-99V504h-63v216h189l169.1-237.7L666,720h54V144H666z M666,612L539.4,430L666,252V612z"
          />
          <polygon
            fill={fill}
            points="207,207 306,207 432,387 468,333 333,144 144,144 144,360 207,360"
          />
        </g>
      </svg>
    );
  }
  