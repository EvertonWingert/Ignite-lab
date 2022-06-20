import { createApp, provide } from "vue";
import App from "./App.vue";
import "./assets/styles/global.css";

import {} from "vue";
import { DefaultApolloClient } from "@vue/apollo-composable";
import { apolloClient } from "./lib/apollo";

const app = createApp(App);

app.provide(DefaultApolloClient, apolloClient);
app.mount("#app");
