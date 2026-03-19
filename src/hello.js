import { createApp, ref } from "vue";

createApp({
  setup() {
    const message = ref("Hello, Vue 3!");
    return { message };
    }
}).mount("#app");