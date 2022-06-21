import { createApp } from "vue";
import App from "./App.vue";
import "./assets/styles/global.css";
import router from "./router";
import { DefaultApolloClient } from "@vue/apollo-composable";
import { apolloClient } from "./lib/apollo";

const app = createApp(App);

app.use(router);
app.provide(DefaultApolloClient, apolloClient);
app.mount("#app");
