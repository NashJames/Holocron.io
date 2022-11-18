/** @type {import('next').NextConfig} */
export const reactStrictMode = true
export const swcMinify = true

/** @type {import('next-sitemap').IConfig} */
export const siteUrl = process.env.SITE_URL || "https://example.com"
export const generateRobotsTxt = true
// ✕ missing peer @next/env@"*"
