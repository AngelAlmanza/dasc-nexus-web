export const convertToNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
  const value = e.target.value;
  const numberValue = Number(value);
  return numberValue;
};
