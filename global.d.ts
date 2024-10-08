// Use type safe message keys with `next-intl`
type Messages = typeof import('./src/messages/en.json')
declare interface IntlMessages extends Messages {}

declare module '*.svg' {
  const content: ReactElement
  export default content
}
