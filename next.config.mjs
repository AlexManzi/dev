/** @type {import('next').NextConfig} */
const nextConfig = {
    // Local development uses the normal Next server. Set NEXT_OUTPUT=export
    // in the production build environment for a static deployment.
    ...(process.env.NEXT_OUTPUT === 'export' ? { output: 'export' } : {}),
    ...(process.env.NEXT_OUTPUT === 'export' ? { images: { unoptimized: true } } : {}),
    ...(process.env.NEXT_BASE_PATH ? { basePath: process.env.NEXT_BASE_PATH } : {}),
    compiler: {
      styledComponents: true,
    },
  };

  export default nextConfig;
