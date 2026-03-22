import { $ } from 'bun';

export async function openUrl(url: string): Promise<void> {
  try {
    const platform = process.platform;
    if (platform === 'darwin') {
      await $`open ${url}`.quiet();
    } else if (platform === 'linux') {
      await $`xdg-open ${url}`.quiet();
    } else if (platform === 'win32') {
      await $`cmd /c start ${url}`.quiet();
    }
  } catch {
    // Silently fail — terminal may not support opening URLs
  }
}
