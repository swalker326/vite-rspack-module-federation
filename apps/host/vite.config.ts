import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { dependencies } from "./package.json";
import { federation } from "@module-federation/vite";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		federation({
			name: "shell",
			remotes: {
				remote: "remote@http://localhost:3001/remoteEntry.js",
			},
			exposes: {},
			filename: "remoteEntry.js",
			runtimePlugins: ["./src/mfPlugins"],
			shared: {
				react: {
					requiredVersion: dependencies.react,
					singleton: true,
				},
				"react-dom": {
					requiredVersion: dependencies.react,
					singleton: true,
				},
			},
		}),
	],
});
