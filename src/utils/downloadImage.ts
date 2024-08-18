export const downloadImage = (imageUrl: string) => {
  const fileName = imageUrl.substring(imageUrl.lastIndexOf('/') + 1) // Extracting the file name from URL

  fetch(imageUrl)
    .then((response) => response.blob())
    .then((blob) => {
      const url = window.URL.createObjectURL(new Blob([blob]))
      const link = document.createElement('a')
      link.href = url
      link.setAttribute('download', fileName) // Set the download attribute to the extracted file name
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      window.URL.revokeObjectURL(url)
    })
    .catch((error) => {
      alert('Error downloading image')
      console.error('Error downloading image:', error)
    })
}
