import {
	type RouteConfig,
	route,
} from "@react-router/dev/routes";
import { flatRoutes } from "@react-router/fs-routes";

export default [
	// HEADER LINKS//
	// Home
	route("/", "pages/home.tsx"),

	// Blog
	route("/blog", "pages/blogpages/bloghome.tsx"),

	//Portfolio
	route("/portfolio", "pages/portfolio/portfoliooverview.tsx"),
	route("/zenithnadir/overview", "pages/zenithnadir/znoverview.tsx"),

	//Misc
	route("/misc/wordletool", "pages/misc/wordlecheater.tsx"),

	//External Links are here//

	// Other Exposed Links//
	//Portfolio Pages
	route("/portfolio/artfight2026", "pages/portfolio/artfight2026.tsx"),

	// Zenith and Nadir

	// Not Exposed //
	//Blog Pages
	route("/blog/testpage", "pages/blogpages/blog/testpage.tsx"),

	// Mabinogi
	route("/mabinogi/bripizza", "pages/mabinogi/bripizza.tsx"),
    route("/mabinogi/tracker", "pages/mabinogi/mabitracker.tsx"),

	// Warframe
	route("/warframe/tracker", "pages/warframe/wftracker.tsx"),

	...(await flatRoutes()),
] satisfies RouteConfig;
