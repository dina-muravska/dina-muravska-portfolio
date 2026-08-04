export function scrollToSection(id: string) {
  const element = document.getElementById(id);
  if (element) {
    const yOffset = -80; // height of sticky header
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
}

export function formatCategoryTitle(category: string): string {
  switch (category) {
    case 'fullstack':
      return 'Full-Stack Apps';
    case 'frontend':
      return 'Frontend Apps';
    case 'landing':
      return 'Landing Pages';
    default:
      return 'All Projects';
  }
}
