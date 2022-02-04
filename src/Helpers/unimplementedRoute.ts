import { Request, Response } from "express";

const unimplementedRoute = (req: Request, res: Response) => {
    return res.status(501).send("Unimplemented!");
};

export default unimplementedRoute;
