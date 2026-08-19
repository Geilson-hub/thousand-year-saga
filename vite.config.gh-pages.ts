import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  nitro: false,
  vite: {
    base: "/thousand-year-saga/",
  },
  tanstackStart: {
    server: { entry: "server" },
    prerender: { enabled: true },
    client: { base: "/thousand-year-saga/" },
    router: { basepath: "/thousand-year-saga/" },
  },
});