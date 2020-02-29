import "reflect-metadata";
import {Query, Resolver, buildSchema} from "type-graphql";
import express, {Application} from "express";
import {ApolloServer} from "apollo-server-express";
import {GraphQLSchema} from "graphql";

@Resolver()
class HelloResolver {
	@Query(() => String) // eslint-disable-line require-await
	async helloWorld(): Promise<string> {
		return "Hello world!";
	}
}

export const createApolloServer = async (): Promise<ApolloServer> => {
	const schema: GraphQLSchema = await buildSchema({resolvers: [HelloResolver]});

	const apolloServer: ApolloServer = new ApolloServer({
		schema,
		playground: true,
	});

	return apolloServer;
};

export const createExpressServer = async (path = "/graphql"): Promise<Application> => {
	const app: Application = express();

	const apolloServer = await createApolloServer();
	apolloServer.applyMiddleware({app, path});

	return app;
};
