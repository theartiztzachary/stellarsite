import {
	type RouteConfig,
	route,
} from "@react-router/dev/routes";
import { flatRoutes } from "@react-router/fs-routes";

export default [
	// Home
	route("/", "pages/home.tsx"),

	// Blog
	route("/blog", "pages/blogpages/bloghome.tsx"),

	// Stories
	//--Crescendo
	route("/stories/crescendo/overview", "pages/stories/crescendo/cresoverview.tsx"),

	// Mabinogi
    route("/mabinogi/tracker", "pages/mabinogi/mabitracker.tsx"),
    route("/mabinogi/bripizza", "pages/mabinogi/bripizza.tsx"),

	// Warframe
	route("/warframe/tracker", "pages/warframe/wftracker.tsx"),

	// Zenith and Nadir
	route("/zenithnadir/overview", "pages/zenithnadir/znoverview.tsx"),

	//Misc
	route("/misc/wordletool", "pages/misc/wordlecheater.tsx"),

	...(await flatRoutes()),
] satisfies RouteConfig;
