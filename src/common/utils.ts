type EnumLike = {
  [s: string]: string | number
  [n: number]: string | number
}

export function getMappedEnum(enumValue: EnumLike) {
  const enumHasNumberValue = Object.values(enumValue).some(v => typeof v === 'number')

  if (!enumHasNumberValue) {
    return enumValue
  }

  return Object.entries(enumValue).reduce((result, [ key, value ]) => {
    if (typeof value !== 'number') {
      return result
    }

    return {
      ...result,
      [key]: value,
    }
  }, {})
}