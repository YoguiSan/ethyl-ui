import { useEffect } from 'react';

export default function WebComponentLoader() {
  useEffect(() => {
    try {
      import('../loader').then((ethyl) => {
        ethyl.defineCustomElements(window);
        console.log('Loaded Ethyl UI Web Components');
      });
    } catch (e) {
      console.error('Not yet built')
    }
  }, []);

  return null;
}
