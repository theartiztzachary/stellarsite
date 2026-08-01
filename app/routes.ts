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
	route("/zenithnatir/storiesoverview", "pages/zenithnadir/storiesoverview.tsx"),
	route("/zenithnadir/tebithmap", "pages/zenithnadir/theworldof/tebithmap.tsx"),
	route("/zenithnnadir/floraandfauna", "pages/zenithnadir/floraandfauna/floraandfaunaoverview.tsx"),
	route("/zenithnnadir/charactersearch", "pages/zenithnadir/characteroverview.tsx"),

	//Individual Stories

	//Locations
	
	//Flora and Fauna - Races
	route("/zenithnnadir/floraandfauna/blexim", "pages/zenithnadir/floraandfauna/fauna/bleximrace.tsx"),
	route("/zenithnnadir/floraandfauna/cyrenin", "pages/zenithnadir/floraandfauna/fauna/cyreninrace.tsx"),
	route("/zenithnnadir/floraandfauna/flauos", "pages/zenithnadir/floraandfauna/fauna/flauosrace.tsx"),
	route("/zenithnnadir/floraandfauna/gaudion", "pages/zenithnadir/floraandfauna/fauna/gaudionrace.tsx"),
	route("/zenithnnadir/floraandfauna/maowav", "pages/zenithnadir/floraandfauna/fauna/maowavrace.tsx"),
	route("/zenithnnadir/floraandfauna/paracya", "pages/zenithnadir/floraandfauna/fauna/paracyarace.tsx"),
	route("/zenithnnadir/floraandfauna/vailiax", "pages/zenithnadir/floraandfauna/fauna/vailiaxrace.tsx"),

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
