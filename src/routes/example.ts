import { Request, Response } from "express";

export async function get(req: Request, res: Response): Promise<void> {
	res.end("you made a get request");
}

export async function post(req: Request, res: Response): Promise<void> {
	res.end("you made a post request");
}
