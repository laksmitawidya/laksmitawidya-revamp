export const INTRO_STORAGE_KEY = 'mita-intro-seen'

/**
 * Inlined in <head> so it runs before first paint. Shows the intro only on the first visit
 * of a browser session and never when the user prefers reduced motion.
 */
export const introBootScript = `try{if(!sessionStorage.getItem('${INTRO_STORAGE_KEY}')&&!window.matchMedia('(prefers-reduced-motion: reduce)').matches){document.documentElement.classList.add('intro-pending')}}catch(e){}`
