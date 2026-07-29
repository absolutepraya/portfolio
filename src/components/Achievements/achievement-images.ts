const imageModules = import.meta.glob<{ default: string }>(
  '/src/assets/achievements/**/*.{png,jpg,jpeg,webp,gif}',
  { eager: false },
);

export const getAchievementImagePaths = (imagesPath?: string): string[] => {
  if (!imagesPath) return [];

  const normalizedAchievementPath = imagesPath.replace('src/', '/src/');
  return Object.keys(imageModules)
    .filter((path) => path.includes(normalizedAchievementPath))
    .sort();
};

export const loadAchievementImage = async (path: string): Promise<string> => {
  const imageModule = imageModules[path];
  if (!imageModule) {
    throw new Error(`Achievement image module not found: ${path}`);
  }

  return (await imageModule()).default;
};
