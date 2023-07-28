import "./env.mjs";

/** @type {import('next').NextConfig} */
const config = {
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ["@prisma/client", "bcrypt"],
  },
};

export default config;
