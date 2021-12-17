import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createApolloProvider } from "@vue/apollo-option";
import { ApolloClient, InMemoryCache } from "@apollo/client/core";

const cache = new InMemoryCache();

// Create the apollo client
const apolloClient = new ApolloClient({
  cache,
  uri: "https://graphql.anilist.co/",
});

const apolloProvider = createApolloProvider({
  defaultClient: apolloClient,
});

createApp(App).use(router).use(apolloProvider).mount("#app");
