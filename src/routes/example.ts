import { Request as ExpressRequest, Response as ExpressResponse } from "express";

// eslint-disable-next-line max-len
export const get = async (req: ExpressRequest, res: ExpressResponse): Promise<void> => {
	res.end("you made a get request");
};

// eslint-disable-next-line max-len
export const post = async (req: ExpressRequest, res: ExpressResponse): Promise<void> => {
	res.end("you made a post request");
};
