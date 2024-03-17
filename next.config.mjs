/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [

            {
                protocol: 'https',
                hostname: 'shadhinmusiccontent.sgp1.digitaloceanspaces.com',
                pathname: '**',
            }
        ],
    },
};



export default nextConfig;
