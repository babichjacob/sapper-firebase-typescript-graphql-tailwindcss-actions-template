import "reflect-metadata";
import { Query, Resolver, buildSchema } from "type-graphql";
import express, { Application } from "express";
import { ApolloServer } from "apollo-server-express";
import { GraphQLSchema } from "graphql";

@Resolver()
class HelloWorldResolver {
  @Query(() => String, { description: "Example thing to query" })
	async helloWorld(): Promise<string> {
		return "Hello world!";
	}
}

export const createApolloServer = async (): Promise<ApolloServer> => {
	const schema: GraphQLSchema = await buildSchema({ resolvers: [HelloWorldResolver] });

	const apolloServer: ApolloServer = new ApolloServer({
		schema,
		playground: true,
		introspection: true,
	});

	return apolloServer;
};

export const createApolloServerExpress = async (path = "/graphql"): Promise<Application> => {
	const app: Application = express();

	const apolloServer = await createApolloServer();
	apolloServer.applyMiddleware({ app, path });

	return app;
};
