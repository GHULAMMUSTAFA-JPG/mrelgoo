export const hexToRGBA = (hex: string, opacity: number) => {
  switch (opacity) {
    case 0:
      return `${hex}00`
    case 5:
      return `${hex}0D`
    case 10:
      return `${hex}1A`
    case 15:
      return `${hex}26`
    case 20:
      return `${hex}33`
    case 25:
      return `${hex}40`
    case 30:
      return `${hex}4D`
    case 35:
      return `${hex}59`
    case 40:
      return `${hex}66`
    case 45:
      return `${hex}73`
    case 50:
      return `${hex}80`
    case 55:
      return `${hex}8C`
    case 60:
      return `${hex}99`
    case 65:
      return `${hex}A6`
    case 70:
      return `${hex}B3`
    case 75:
      return `${hex}BF`
    case 80:
      return `${hex}CC`
    case 85:
      return `${hex}D9`
    case 90:
      return `${hex}E6`
    case 95:
      return `${hex}F2`
    case 100:
      return `${hex}FF`

    default:
      return hex
  }
}
