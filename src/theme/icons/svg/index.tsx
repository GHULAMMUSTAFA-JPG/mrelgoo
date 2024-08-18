import EyeOn from './eye.svg'
import Home from './home.svg'
import Cart from './cart.svg'
import Settings from './settings.svg'
import Email from './email.svg'
import Calender from './calender.svg'
import CheckOutline from './check-outline.svg'
import CartOutline from './cart-outline.svg'
import CartPendingOutline from './cart-pending-outline.svg'
import DownloadOutline from './download-outline.svg'
import EmailOutline from './email-outline.svg'
import DoubleArrowLeft from './double-arrow-left.svg'
import DoubleArrowRight from './double-arrow-right.svg'
import SingaleArrowLeft from './single-arrow-left.svg'
import SingalArrowRight from './single-arrow-right.svg'
import ChevronRight from './chevron-right.svg'
import ChevronDown from './chevron-down.svg'
import Search from './search.svg'
import DragAndDrop from './drag-drop.svg'
import DragAndDropRed from './drag-drop-red.svg'
import Attatchment from './attatchment.svg'
import Text from './text.svg'
import Emoji from './emoji.svg'
import Close from './close.svg'
import Copyright from './copyright.svg'
import LeftArrow from './left-arrow.svg'
import RightArrow from './right-arrow.svg'
import Avatar from './avatar.svg'
import HeaderArrow from './header-arrow.svg'
import ModalClose from './modal-close.svg'
import ImageClose from './image-close.svg'

import { ReactElement } from 'react'

export const IconSet = {
  EyeOn,
  Home,
  Cart,
  Settings,
  Email,
  Calender,
  CheckOutline,
  CartOutline,
  CartPendingOutline,
  DownloadOutline,
  EmailOutline,
  DoubleArrowLeft,
  DoubleArrowRight,
  SingaleArrowLeft,
  SingalArrowRight,
  ChevronRight,
  ChevronDown,
  Search,
  DragAndDrop,
  Attatchment,
  Text,
  Emoji,
  Close,
  Copyright,
  LeftArrow,
  RightArrow,
  Avatar,
  HeaderArrow,
  ModalClose,
  ImageClose,
  DragAndDropRed,
}

type IconSetEntries = { [K in keyof typeof IconSet]: ReactElement }
export const TypedIconSet: IconSetEntries = IconSet

export type IconName = keyof typeof TypedIconSet
export type IconColor =
  | 'black'
  | 'white'
  | 'primary'
  | 'red'
  | 'green'
  | 'orange'
  | 'line'
  | 'inactive'
