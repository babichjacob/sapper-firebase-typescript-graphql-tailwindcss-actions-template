import sirv from "sirv";
import compression from "compression";
import * as sapper from "@sapper/server";
import { createExpressServer } from "./graphql";

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === "development";

const createSapperAndApolloServer = async dev_ => {
	const app = await createExpressServer();
	if (dev_) {
		app.use(compression({ threshold: 0 }), sirv("static", { dev: true }));
	}
	app.use(sapper.middleware());
	return app;
};

if (dev) {
	createSapperAndApolloServer(true).then(app => {
		app.listen(PORT, err => {
			if (err) console.log("error", err);
		});
	});
}

export { createSapperAndApolloServer, sapper };
