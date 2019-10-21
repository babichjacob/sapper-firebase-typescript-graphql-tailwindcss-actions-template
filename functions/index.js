const {
	https: { onRequest }
} = require("firebase-functions");

const { createSapperAndApolloServer } = require("./__sapper__/build/server/server");

const appPromise = createSapperAndApolloServer(false);

exports.ssr = onRequest(async (...args) => {
	const app = await appPromise;

	return app(...args);
});
