const UUID_REGEX =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

export const isValidUUID = (id: string) => {
  return UUID_REGEX.test(id);
};

export const generateId = () => crypto.randomUUID();
