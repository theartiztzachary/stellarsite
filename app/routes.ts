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
	route("/contactme", "pages/contactme.tsx"),

	//Portfolio Pages
	//Art Fights
	route("/portfolio/artfight2026", "pages/portfolio/artfights/artfight2026.tsx"),

	//Game Jams
	route("/portfolio/gamejams/overview", "pages/portfolio/gamejams/gamejamsoverview.tsx"),
	route("/portfolio/gamejams/loveandmurder", "pages/portfolio/gamejams/loveandmurder.tsx"),
	route("/portfolio/gamejams/catditributionmachine", "pages/portfolio/gamejams/catdistribution.tsx"),

	// Zenith and Nadir
	route("/zenithnadir/characterbios/dejin", "pages/zenithnadir/characterbios/dejinbio.tsx"),

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
