function truncateKeys(obj: Record<string, any>): Record<string, any> {
  const result: Record<string, any> = {};

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const truncatedKey = key.length > 40 ? key.substring(0, 40) : key;
      result[truncatedKey] = obj[key];
    }
  }

  return result;
}

export default truncateKeys;
