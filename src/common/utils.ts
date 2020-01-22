type EnumLike = {
  [s: string]: string | number;
  [n: number]: string | number;
};

export function getMappedEnum(enumValue: EnumLike) {
  return Object.entries(enumValue).reduce((result, [key, value]) => {
    if (typeof value !== 'number') {
      return result;
    }

    return {
      ...result,
      [key]: value,
    };
  }, {});
}
