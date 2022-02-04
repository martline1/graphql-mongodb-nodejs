import { Router } from "express";

// Import Own Modules
import { IS_PRODUCTION } from "./Config/constants";
import AuthRoutes        from "./Modules/Auth/Auth.routes";
import UserRoutes        from "./Modules/Users/Users.routes";
import GroupsRoutes      from "./Modules/Groups/Groups.routes";
import TestsRoutes       from "./tests.routes";

const router = Router();

// Auth
router.use("/auth", AuthRoutes);

// Users
router.use("/users", UserRoutes);

// Groups
router.use("/groups", GroupsRoutes);

/**
 * Set of test functions to develop the app, these are hidden
 * in production
 */
if (!IS_PRODUCTION) {
	router.use("/tests", TestsRoutes);
}

export default router;
