import { PHASE_DEVELOPMENT_SERVER } from 'next/constants'

/** @type {import('next').NextConfig} */
export default function nextConfig(phase: string) {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER
  const configuredBasePath = process.env.SITE_BASE_PATH ?? process.env.NEXT_PUBLIC_BASE_PATH ?? ''
  const basePath = isDev ? '' : configuredBasePath

  return {
    output: 'export',
    basePath,
    env: {
      NEXT_PUBLIC_BASE_PATH: basePath,
    },
    images: {
      unoptimized: true,
    },
  }
}
