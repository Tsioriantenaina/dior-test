import { data } from "@/data";
import gql from "graphql-tag";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { NextRequest } from "next/server";
import { ApolloServer } from "@apollo/server";

//GraphQl schema
const typeDefs = gql`
	type Product {
		id: Int
		name: String
		category: String
		description: String
		price: String
		image: String
		quantity: Int
	}

	type Query {
		products: [Product]
	}
`;

//Define resolvers
const resolvers = {
	Query: {
		products: () => data,
	},
};

const apolloServer = new ApolloServer({ typeDefs, resolvers });

const handler = startServerAndCreateNextHandler<NextRequest>(apolloServer, { context: async (req) => ({ req }) });

export const config = {
	api: {
		bodyParser: false,
	},
};

export { handler as GET, handler as POST };
