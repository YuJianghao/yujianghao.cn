import dayjs from 'dayjs'

export function formatTime(value: string) {
  return dayjs(value).format('MMM D, YYYY')
}
