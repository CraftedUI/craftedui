/** @type {import('next').NextConfig} */
import withMDX from '@next/mdx'

const nextConfig = withMDX()({
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  output: "export",
  reactStrictMode: true,
})

export default nextConfig;
