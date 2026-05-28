import { rm, mkdir, cp, access } from 'node:fs/promises'
import { constants as fsConstants } from 'node:fs'
import { spawn, spawnSync } from 'node:child_process'
import path from 'node:path'

const root = process.cwd()
const previewRoot = path.join(root, '.preview')
const outDir = path.join(root, 'out')
const configuredBasePath = process.env.SITE_BASE_PATH || process.env.NEXT_PUBLIC_BASE_PATH || ''
const previewSite = configuredBasePath ? path.join(previewRoot, configuredBasePath.replace(/^\/+/, '')) : previewRoot

async function exists(target) {
  try {
    await access(target, fsConstants.F_OK)
    return true
  } catch {
    return false
  }
}

async function main() {
  if (!(await exists(outDir))) {
    console.error('Missing `out/`. Run `npm run build` first.')
    process.exit(1)
  }

  await rm(previewRoot, { recursive: true, force: true })
  await mkdir(previewSite, { recursive: true })
  await cp(outDir, previewSite, { recursive: true })

  spawnSync('npx', ['kill-port', '3000'], {
    stdio: 'inherit',
    shell: false,
  })

  const server = spawn('npx', ['serve@latest', '-l', '3000', previewRoot], {
    stdio: 'inherit',
    shell: false,
  })

  server.on('exit', (code) => {
    process.exit(code ?? 0)
  })
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
