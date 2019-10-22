import {Request as ExpressRequest, Response as ExpressResponse} from "express";

export const get = async (req: ExpressRequest, res: ExpressResponse): Promise<void> => { // eslint-disable-line require-await
	res.end("you made a get request");
};

export const post = async (req: ExpressRequest, res: ExpressResponse): Promise<void> => { // eslint-disable-line require-await
	res.end("you made a post request");
};
