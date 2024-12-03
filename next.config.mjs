/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export'
  transpilePackages: ['lucide-react'],
  async redirects() {
    return [
      {
        source: '/feedback-form',
        destination: '/feedback-form/1',
        permanent: true,
      },
    ]
  }
};

export default nextConfig;
