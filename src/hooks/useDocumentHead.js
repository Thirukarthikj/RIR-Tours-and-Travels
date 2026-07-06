import { useEffect } from 'react';

/**
 * useDocumentHead – Lightweight hook to manage <head> tags without external dependencies.
 * Replaces react-helmet-async when npm is unavailable.
 *
 * @param {Object} options
 * @param {string} options.title - Page title
 * @param {Array} options.meta - Array of { name/property, content } objects
 * @param {string} options.canonical - Canonical URL
 * @param {Array} options.schemas - Array of JSON-LD schema objects
 */
export default function useDocumentHead({ title, meta = [], canonical, schemas = [] }) {
  const metaStr = JSON.stringify(meta);
  const schemasStr = JSON.stringify(schemas);

  useEffect(() => {
    if (title) {
      document.title = title;
    }

    const managedElements = [];
    const parsedMeta = JSON.parse(metaStr);
    const parsedSchemas = JSON.parse(schemasStr);

    // Set/update meta tags
    parsedMeta.forEach(({ name, property, content }) => {
      const attr = property ? 'property' : 'name';
      const attrValue = property || name;
      let el = document.querySelector(`meta[${attr}="${attrValue}"]`);
      if (el) {
        el.setAttribute('content', content);
      } else {
        el = document.createElement('meta');
        el.setAttribute(attr, attrValue);
        el.setAttribute('content', content);
        document.head.appendChild(el);
        managedElements.push(el);
      }
    });

    // Set canonical
    let canonicalEl = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      if (!canonicalEl) {
        canonicalEl = document.createElement('link');
        canonicalEl.setAttribute('rel', 'canonical');
        document.head.appendChild(canonicalEl);
        managedElements.push(canonicalEl);
      }
      canonicalEl.setAttribute('href', canonical);
    }

    // Set JSON-LD schemas
    const schemaEls = [];
    parsedSchemas.forEach((schema) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
      schemaEls.push(script);
    });

    // Cleanup on unmount
    return () => {
      managedElements.forEach((el) => {
        if (el.parentNode) el.parentNode.removeChild(el);
      });
      schemaEls.forEach((el) => {
        if (el.parentNode) el.parentNode.removeChild(el);
      });
    };
  }, [title, canonical, metaStr, schemasStr]);
}
