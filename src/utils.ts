export const isValidDate = (value: any): value is Date =>
  value instanceof Date && !isNaN(value.getTime());
