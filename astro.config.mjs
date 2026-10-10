import { defineConfig } from 'astro/config';
// PetitOnes の org サイト。https://petitones.github.io/ の根に出る。
export default defineConfig({
  site: 'https://petitones.github.io',
  trailingSlash: 'always',
  build: { format: 'directory' },
});
