export const formatDate = (dateString: string) => {
  const date = new Date(dateString)
  const formattedDate = date.toLocaleString() // Convert to locale-specific string format
  return formattedDate
}
