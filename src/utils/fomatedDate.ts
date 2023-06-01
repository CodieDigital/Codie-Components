export function formatedDate(date) {
  const newDate = new Date(date)
  const year = newDate.getFullYear().toString()
  const day = newDate.getDate().toString().padStart(2, '0')
  const month = (newDate.getMonth() + 1).toString().padStart(2, '0')

  const dateFormated = day + '/' + month + '/' + year

  return dateFormated
}
