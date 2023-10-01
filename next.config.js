/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'avatars.githubusercontent.com',
      'lh3.googleusercontent.com'
      // fill string url domain here as array
    ]
  }
};

module.exports = nextConfig;
