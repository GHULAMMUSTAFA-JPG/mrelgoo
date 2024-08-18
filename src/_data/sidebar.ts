import { IconName } from '@/theme/icons/svg'

type ISidebar = {
  title: string
  icon: IconName
  href?: string
}[]

export const sidebar: ISidebar = [
  { title: 'Home', icon: 'Home', href: '/admin/dashboard' },
  { title: 'Orders', icon: 'Cart', href: '/admin/orders' },
  { title: 'Settings', icon: 'Settings', href: '/admin/settings' },
  { title: 'Email Template', icon: 'Email', href: '/admin/email-template' },
]
