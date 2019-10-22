import * as sapper from "@sapper/server";
import compression from "compression";
import {createExpressServer} from "./graphql";
import sirv from "sirv";

const {PORT, NODE_ENV} = process.env,
	dev = NODE_ENV === "development",

	createSapperAndApolloServer = async (dev_) => {
		const app = await createExpressServer();
		if (dev_) app.use(compression({threshold: 0}), sirv("static", {dev: true}));

		app.use(sapper.middleware());
		return app;
	};

if (dev) createSapperAndApolloServer(true).then((app) => {
	app.listen(PORT, (err) => {
		if (err) console.log("error", err);
	});
});


export {createSapperAndApolloServer, sapper};
