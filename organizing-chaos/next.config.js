/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // output: "standalone",
  // experimental: {
  //   appDir: true,
  //   serverComponentsExternalPackages: ["mongoose", "bcrypt", "@types/bcrypt"],
  //   webpack(config) {
  //     config.experiments = { ...config.experiments, topLevelAwait: true };
  //     return config;
  //   },
  // },
};

module.exports = nextConfig;
