import http from '@/utils/http';

export const apiGetSwiperImgs = (data: any, config: any) => {
    return http.post('swiperimgs/list', data, config);
};

export const fetchPetInfo = (name: string) => {
    const key = `8904de751142e1a252a8e864174bb93d`
    return http.get(`/tianapi/txapi/pet/index?key=${key}&name=${name}`);
};  
  
