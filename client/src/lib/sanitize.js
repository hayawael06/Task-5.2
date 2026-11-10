import DOMPurify from 'dompurify'

// Reviews allow light formatting only: bold, italics, links, simple lists.
// Everything else (script, img, svg, iframe, on* handlers, javascript: URLs) is removed.
const CONFIG = {
  ALLOWED_TAGS: ['b', 'strong', 'i', 'em', 'u', 'p', 'br', 'ul', 'ol', 'li', 'a'],
  ALLOWED_ATTR: ['href', 'title'],
  ALLOW_DATA_ATTR: false,
}

export const sanitizeHtml = (dirty) => DOMPurify.sanitize(dirty ?? '', CONFIG)