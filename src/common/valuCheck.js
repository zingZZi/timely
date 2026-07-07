export const isEmptyValue = (value) => {
  if (typeof value === "boolean") return false; // boolean은 항상 값이 있는 것으로 간주
  if (Array.isArray(value)) return value.length === 0;
  if (typeof value === "number") return value === null || value === undefined;
  if (value === null || value === undefined) return true;
  if (typeof value === "string") return value.trim() === "";
  return false;
};
