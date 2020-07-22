// @ts-ignore -- generated package
import * as sapper from "@sapper/server"; // eslint-disable-line import/no-unresolved
import compression from "compression";
import express, { Express } from "express";
import sirv from "sirv";
import { createApolloServer } from "./graphql";

const PORT = process.env.PORT; // eslint-disable-line prefer-destructuring
// @ts-ignore -- creates a warning after `rollup-plugin-replace` (set up in `rollup.config.js`)
// replaces `process.env.NODE_ENV` with `"production"` during `prod`
const dev = process.env.NODE_ENV === "development";

const main = require.main === module || require.main?.filename.match(/__sapper__\/build\/index.js$/);

const createSapperAndApolloServer = async (graphqlPath = "/graphql"): Promise<Express> => {
	const app = express();

	const apolloServer = await createApolloServer();

	apolloServer.applyMiddleware({ app, path: graphqlPath });

	if (main) {
		app.use(sirv("static", { dev }));
	}

	app.use(
		compression({ threshold: 0 }),
		sapper.middleware(),
	);

	return app;
};

if (main) {
	createSapperAndApolloServer("/graphql").then((app) => {
		app.listen(PORT, (err?: any): void => { // eslint-disable-line
			if (err) console.log("error", err);
		});
	});
}

export { createSapperAndApolloServer };

// For more Cloud Functions, write and export them here
// and import and set them up in `/index.js`
