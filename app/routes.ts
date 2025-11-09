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
	route("/blog/testpage", "pages/blogpages/blog/testpage.tsx"),

	// Stories
	// Copper Eye
	route("/stories/copper_eye/overview", "pages/stories/coppereye/ceoverview.tsx"),

	// Mabinogi
	route("/mabinogi/tracker", "pages/mabinogi/mabitracker.tsx"),

	// Warframe
	route("/warframe/tracker", "pages/warframe/wftracker.tsx"),

	// Zenith and Nadir
	route("/zenithnadir/overview", "pages/zenithnadir/znoverview.tsx"),

	//Misc
	route("/misc/wordletool", "pages/misc/wordlecheater.tsx"),

	...(await flatRoutes()),
] satisfies RouteConfig;
