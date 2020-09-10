// google coords format 50.000001, 30.599312

import { Coords } from '../../types/coords';

export const getGeo = (): Promise<Coords> => {
  return new Promise(resolve => {
    navigator.geolocation.getCurrentPosition(
      geo => {
        resolve({
          latitude: geo.coords.latitude,
          longitude: geo.coords.longitude
        });
      },
      () => {},
      {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      }
    );
  });
};
