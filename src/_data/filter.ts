import { Filter } from '@/types/common.types'

export const filter = [
  { label: 'All Orders', key: Filter.ALL_ORDERS },
  { label: 'New', key: Filter.NEW },
  { label: 'Pending', key: Filter.PENDING },
  { label: 'Review', key: Filter.REVIEW },
  { label: 'Completed', key: Filter.COMPLETED },
  { label: 'Canceled', key: Filter.CANCELED },
]
