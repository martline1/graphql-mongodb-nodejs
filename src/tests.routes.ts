import { Router, Request, Response } from "express";

// Import Own Modules
import {
    JWT,
    Base64,
    createToken,
} from "./Helpers";

const router = Router();

router.get("/invitation_token", (req: Request, res: Response) => {
    const token = createToken(JWT.Reason.PASSWORD_RECOVERY_VERIFIED, {
        email : "rudiger.kleinhans@example.com",
    });

    return res.status(200).send(Base64.encode(token));
});

export default router;
