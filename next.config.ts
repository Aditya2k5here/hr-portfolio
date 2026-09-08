import type { NextConfig } from 'next'

/**
 * Static export.
 *
 * There is no server, no database and no API route here — the whole site is
 * HTML, one stylesheet and a handful of images.
 *
 * GitHub Pages serves a project repository from a sub-path, so the asset
 * prefix has to be set at build time. NEXT_PUBLIC_BASE_PATH is empty for local
 * work and set by the deploy workflow, which is also where the raw document
 * links pick it up from.
 */
const base = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  reactStrictMode: true,
  basePath: base || undefined,
  assetPrefix: base || undefined,
}

export default nextConfig
