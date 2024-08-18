'use client'

import { Center, EffectProps, SpaceProps } from '@chakra-ui/react'
import { IconColor, IconName, IconSet } from './svg'
import './index.css'
import { useEffect, useState } from 'react'

export type IconSize = 'xLarge' | 'large' | 'medium' | 'small' | 'extraSmall'

interface IconProps {
  icon: IconName
  size?: IconSize
  shouldSize?: boolean
  style?: React.CSSProperties
  color?: IconColor
  enableHovered?: boolean
  isHovered?: null | boolean
}

const iconSizes: Record<IconSize, string> = {
  xLarge: '2rem', // TODO: Fix size in theme
  large: '1.5rem',
  medium: `${1.25 * 0.8}rem`,
  small: `${1.25 * 0.6}rem`,
  extraSmall: `${1.25 * 0.4}rem`,
}

const iconSizeTransform: Record<IconSize, number> = {
  xLarge: 2,
  large: 1,
  medium: 0.8,
  small: 0.6,
  extraSmall: 0.4,
}

export const Icon = ({
  icon,
  size = 'large',
  shouldSize = false,
  color,
  enableHovered = false,
  isHovered = null,
  ...props
}: IconProps & SpaceProps & EffectProps) => {
  const [iconColor, setIconColor] = useState(color)
  const actualSize = iconSizes[size]
  const transformRatio = iconSizeTransform[size]
  const IconSVG = IconSet[icon]
  const sizeProps = shouldSize ? { height: '18px', width: '18px' } : {}

  // const handleHover = () => {
  //   if (enableHovered && isHovered === null) setIconColor('blue')
  // }

  // useEffect(() => {
  //   if (isHovered !== null) {
  //     if (isHovered) {
  //       setIconColor('blue')
  //     } else {
  //       setIconColor(color)
  //     }
  //   }
  // }, [isHovered])

  return (
    // <Box textAlign="center" lineHeight={actualSize} as={IconSVG} width={actualSize} height={actualSize} {...props} />
    // <ChakraIcon as={IconSVG} boxSize={actualSize} h={actualSize} />

    // TODO: Fix size in theme
    <Center
      // onMouseEnter={handleHover}
      // onMouseLeave={() => setIconColor(color ? color : '')}
      {...sizeProps}
      {...props}
    >
      {/* // TODO: Fix typing */}
      <IconSVG
        {...(iconColor && { className: color })}
        style={{ transform: `scale(${transformRatio}, ${transformRatio})` }}
      />
    </Center>
  )
}
