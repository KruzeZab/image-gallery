import axios from 'axios';

import config from '@/config';

import { Image } from '@/interfaces/picsum';

export const fetchImages = async (params = {}): Promise<Image[]> => {
  const response = await axios.get(config.endpoints.getPhotos, {
    params,
  });

  return response.data;
};

export default fetchImages;
