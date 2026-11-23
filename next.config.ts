import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [
      // Pages légales de l'application mobile REFUGE (exigées par Google Play).
      {
        source: "/refuge/confidentialite",
        destination: "/refuge/confidentialite.html",
      },
      {
        source: "/refuge/suppression-compte",
        destination: "/refuge/suppression-compte.html",
      },
      {
        source: "/refuge/cookies",
        destination: "/refuge/cookies.html",
      },
      {
        source: "/refuge/cgu",
        destination: "/refuge/cgu.html",
      },
      {
        source: "/refuge/mentions-legales",
        destination: "/refuge/mentions-legales.html",
      },
    ];
  },
};

export default nextConfig;
