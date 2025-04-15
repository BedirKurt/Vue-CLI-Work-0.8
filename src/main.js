import { createApp } from "vue";
import App from "./App.vue";
import FriendContact from "./components/FriendContact.vue";
import NewFriends from "./components/NewFriends.vue";
const app = createApp(App);
app.component("friend-contact", FriendContact);
app.component("new-friend", NewFriends);
app.mount("#app");
