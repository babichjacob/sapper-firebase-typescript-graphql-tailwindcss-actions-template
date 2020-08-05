import type { Request as ExpressRequest, Response as ExpressResponse } from "express";

export const get = async (req: ExpressRequest, res: ExpressResponse): Promise<void> => {
	res.end("you made a get request");
};

export const post = async (req: ExpressRequest, res: ExpressResponse): Promise<void> => {
	res.end("you made a post request");
};
