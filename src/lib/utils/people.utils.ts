export const getCharacterIdFromApiUrl = (url: string): string => {
  const characterUrlId = url.split('/', 6).at(-1) as string;

  return characterUrlId;
};

export const getFormatPages = (numberOfResults: number): number => {
  return Math.ceil(numberOfResults / 10);
};
