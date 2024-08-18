export type PriceRange = {
  currency: string
  min: number
  max: number
}

export enum Filter {
  ALL_ORDERS = '',
  NEW = 'New',
  PENDING = 'Pending',
  REVIEW = 'Review',
  COMPLETED = 'Completed',
  CANCELED = 'Canceled',
}

export enum ShortStatus {
  SHORTBY15 = 'Short by 15',
  SHORTBY30 = 'Short by 30',
  SHORTBY45 = 'Short by 45',
  SHORTBY60 = 'Short by 60',
}

export enum OrderStatus {
  NEW = 'New',
  PENDING = 'Pending',
  CANCELED = 'Canceled',
  COMPLETED = 'Completed',
  REVIEW = 'Review',
  REVIEW_DAD = 'Review - Dad',
  REVIEW_MOM = 'Review - Mom',
  REVIEW_BOTH = 'Review - Both',
  REVIEW_SINGLE = 'Review - Single',
}
