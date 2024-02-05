import { extendTheme } from "@chakra-ui/react";

import "@fontsource-variable/manrope";

const extenstion = {
	colors: {
		mw_orange: "#E63D2D",
		secondary: "#731447",
		nav_bg: "#2d3748",
		nav_text: "#a0aec0",
		primary: "#EB524C",
		hyperlink: "#5383EC",
		dark_gray: "#4b5563",
		border: "#E2E8F0",
		brand: {
			100: "#FFE7E6",
			200: "#FAC5C3",
			300: "#F5837F",
			400: "#F5433D",
			500: "#CC1C16",
			600: "#720D09",
		},
		gray: {
			100: "#FFFFFF",
			200: "#F9FAFB",
			300: "#F2F4F7",
			400: "#EAECF0",
			500: "#D0D5DD",
			600: "#98A2B3",
		},
		black: {
			100: "#667085",
			200: "#475467",
			300: "#344054",
			400: "#1D2939",
			500: "#10182B",
			600: "#000000",
		},
	},
	components: {
		Button: {
			variants: {
				solid: {
					bgColor: "brand.400",
					_hover: { bgColor: "brand.300" },
					color: "white",
				},
				outline: {
					bgColor: "gray.100",
					_hover: { bgColor: "brand.400", color: "white" },
					color: "brand.400",
					outline: "1px solid brand.400",
				},
			},
			sizes: {
				xs: {
					h: "24px",
					w: "92px",
					px: "8px",
					gap: "6px",
					radius: "6px",
					fontSize: "14px",
					lineHeight: "20px",
					fontWeight: "700",
				},
				sm: {
					h: "32px",
					w: "114px",
					px: "12px",
					gap: "8px",
					radius: "6px",
					fontSize: "14px",
					lineHeight: "20px",
					fontWeight: "700",
				},
				md: {
					h: "40px",
					w: "126px",
					px: "16px",
					gap: "2px",
					radius: "8px",
					fontSize: "14px",
					lineHeight: "20px",
					fontWeight: "700",
				},
				lg: {
					h: "48px",
					w: "157px",
					px: "24px",
					gap: "2px",
					radius: "8px",
					fontSize: "14px",
					lineHeight: "20px",
					fontWeight: "700",
				},
			},
		},
		Text: {
			sizes: {
				xl: {
					fontSize: "20px",
					lineHeight: "30px",
				},
				lg: {
					fontSize: "18px",
					lineHeight: "28px",
				},
				md: {
					fontSize: "16px",
					lineHeight: "24px",
				},
				sm: {
					fontSize: "14px",
					lineHeight: "20px",
				},
				xs: {
					fontSize: "12px",
					lineHeight: "18px",
				},
			},
		},
		Heading: {
			sizes: {
				xl: {
					fontSize: "60px",
					lineHeight: "72px",
				},
				lg: {
					fontSize: "48px",
					lineHeight: "60px",
				},
				md: {
					fontSize: "36px",
					lineHeight: "44px",
				},
				sm: {
					fontSize: "30px",
					lineHeight: "38px",
				},
				xs: {
					fontSize: "24px",
					lineHeight: "32px",
				},
			},
		},
	},

	fonts: {
		heading: "'Manrope', -apple-system, system-ui, sans-serif",
		body: "'Manrope', -apple-system, system-ui, sans-serif",
	},
	styles: {
		h1: {
			fontSize: "60px",
			lineHeight: "72px",
			tracking: "-1%",
		},
	},
};

const mwTheme = extendTheme(extenstion);

export default mwTheme;
