/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "in.bmscdn.com",
      "assets-in.bmscdn.com",
      "www.google.com",
      "media.gettyimages.com",
      "i.pinimg.com",
    ], // Add the hostname(s) here
  },
};

export default nextConfig;
