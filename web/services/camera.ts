const createCameraInput = () => {
  const input = document.createElement('input');
  input.setAttribute('type', 'file');
  input.setAttribute('accept', 'image/*');
  input.setAttribute('capture', 'camera');
  input.style.display = 'none';
  document.body.appendChild(input);
  return input as HTMLInputElement;
};

export const getPhoto = (): Promise<File> =>
  new Promise((resolve, reject) => {
    const input = createCameraInput();
    input.addEventListener('change', e => {
      const photo = input?.files?.[0];
      if (photo) {
        resolve(photo);
        document.body.removeChild(input);
      }
    });
    input.click();
  });
