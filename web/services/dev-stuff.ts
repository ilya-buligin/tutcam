export const debug = (caption: string, ...args: any[]) => {
  if (process.env.NODE_ENV === 'production') {
    return;
  }
  console.groupCollapsed(`DEBUG | ${caption}:\n`);
  console.dir(...args)
  console.trace('');
  console.groupEnd();
};
