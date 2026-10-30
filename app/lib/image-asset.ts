export function getOptimizedImagePath(imagePath: string): string {
  return imagePath
    .replace(/^\/images\//, "/optimized-images/")
    .replace(/\.(?:jpe?g|png)$/i, ".webp");
  }
