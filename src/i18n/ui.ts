export const languages = {
  en: 'English',
  it: 'Italiano',
};

export const defaultLang = 'en';

export const ui = {
  en: {
    'site.title': "Od's Travel Log",
    'site.description': 'A bilingual travel blog by Barbara Burgio',
    'nav.home': 'Home',
    'nav.blog': 'Blog',
    'nav.about': 'About',
    'blog.title': 'Blog',
    'blog.readMore': 'Read more',
    'blog.publishedOn': 'Published on',
    'blog.category': 'Category',
    'blog.tags': 'Tags',
    'blog.backToBlog': '← Back to Blog',
    'blog.readInLang': 'Leggi in Italiano',
    'blog.noPosts': 'No posts yet.',
    'home.welcome': 'Welcome to Od\'s Travel Log',
    'home.subtitle': 'Stories, oddities, and discoveries from around the world',
    'home.latestPosts': 'Latest Posts',
    'footer.rights': 'All rights reserved.',
  },
  it: {
    'site.title': "Od's Travel Log",
    'site.description': 'Un blog di viaggio bilingue di Barbara Burgio',
    'nav.home': 'Home',
    'nav.blog': 'Blog',
    'nav.about': 'Chi siamo',
    'blog.title': 'Blog',
    'blog.readMore': 'Leggi di più',
    'blog.publishedOn': 'Pubblicato il',
    'blog.category': 'Categoria',
    'blog.tags': 'Tag',
    'blog.backToBlog': '← Torna al Blog',
    'blog.readInLang': 'Read in English',
    'blog.noPosts': 'Nessun articolo ancora.',
    'home.welcome': "Benvenuti su Od's Travel Log",
    'home.subtitle': 'Storie, curiosità e scoperte dal mondo',
    'home.latestPosts': 'Ultimi Articoli',
    'footer.rights': 'Tutti i diritti riservati.',
  },
} as const;

export type UIKey = keyof typeof ui.en;
