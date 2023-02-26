/** @type {import("tailwindcss").Config} */
module.exports = {
  presets: [require("@promptstudio/tailwind-config")],
  content: ["./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
};
