/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/research",
        destination: "/dashboard/research",
        permanent: true,
      },
      {
        source: "/grants",
        destination: "/dashboard/grants",
        permanent: true,
      },
      {
        source: "/humanitarian",
        destination: "/dashboard/humanitarian",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
