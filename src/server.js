import * as sapper from "@sapper/server";
import compression from "compression";
import express from "express";
import sirv from "sirv";
import { createApolloServer } from "./graphql/index.ts";

const { PORT, NODE_ENV, RUN_LOCALLY = undefined } = process.env;
const dev = NODE_ENV === "development";


const createSapperAndApolloServer = async (graphqlPath = "/graphql") => {
	const app = express();

	const apolloServer = await createApolloServer();

	apolloServer.applyMiddleware({ app, path: graphqlPath });

	if (dev || RUN_LOCALLY) {
		app.use(sirv("static", { dev }));
	}

	app.use(
		compression({ threshold: 0 }),
		sapper.middleware(),
	);

	return app;
};

if (dev || RUN_LOCALLY) {
	createSapperAndApolloServer().then((app) => {
		app.listen(PORT, (err) => {
			if (err) console.log("error", err);
		});
	});
}

export { createSapperAndApolloServer, sapper };
