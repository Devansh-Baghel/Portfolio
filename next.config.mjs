/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "go-skill-icons.vercel.app",
      },
    ],
  },
};

export default nextConfig;
