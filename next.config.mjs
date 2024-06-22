/** @type {import('next').NextConfig} */
import withMDX from '@next/mdx'

const nextConfig = withMDX()({
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  ppr: true
})

export default nextConfig;
