import {
	type RouteConfig,
	route,
} from "@react-router/dev/routes";
import { flatRoutes } from "@react-router/fs-routes";

export default [
	// -- Home -- //
	route("/", "pages/home.tsx"),
	route("/contactme", "pages/contactme.tsx"),

	// -- Blog -- //
	route("/blog", "pages/blogpages/bloghome.tsx"),
	route("/blog/testpage", "pages/blogpages/blog/testpage.tsx"),

	// -- Portfolio -- //
	route("/portfolio", "pages/portfolio/portfoliooverview.tsx"),

	//Art Fights
	route("/portfolio/artfight2026", "pages/portfolio/artfights/artfight2026.tsx"),

	//Game Jams
	route("/portfolio/gamejams/overview", "pages/portfolio/gamejams/gamejamsoverview.tsx"),
	route("/portfolio/gamejams/loveandmurder", "pages/portfolio/gamejams/loveandmurder.tsx"),
	route("/portfolio/gamejams/catditributionmachine", "pages/portfolio/gamejams/catdistribution.tsx"),

	// -- Zenith and Nadir -- //
	route("/zenithnadir/overview", "pages/zenithnadir/znoverview.tsx"),
	route("/zenithnadir/tebithmap", "pages/zenithnadir/theworldof/tebithmap.tsx"),

	//Character Bios
	route("/zenithnadir/characterbios/dejin", "pages/zenithnadir/characterbios/dejinbio.tsx"),

	// -- Mabinogi -- //
	route("/mabinogi/bripizza", "pages/mabinogi/bripizza.tsx"),
    route("/mabinogi/tracker", "pages/mabinogi/mabitracker.tsx"),

	// -- Warframe -- //
	route("/warframe/tracker", "pages/warframe/wftracker.tsx"),


	// -- Misc -- //
	route("/misc/wordletool", "pages/misc/wordlecheater.tsx"),

	...(await flatRoutes()),
] satisfies RouteConfig;
