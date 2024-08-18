export const scrollToSection = (id: string) => {
  const section = document.getElementById(id)
  if (section) {
    const topOffset = 60 // Adjust this value to add more or less space
    window.scrollTo({
      top: section.offsetTop - topOffset,
      behavior: 'smooth',
    })
  }
}
