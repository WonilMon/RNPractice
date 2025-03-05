import {Category, Profile} from '../types/domain';
import {getEncryptStorage} from '../utils';
import axiosInstance from './axios';

type RequestUser = {
  email: string;
  password: string;
};

const postSignup = async ({email, password}: RequestUser): Promise<void> => {
  // const { data } = await axios.post('http://localhost:3030/auth/signup', {
  const {data} = await axiosInstance.post('/auth/signup', {
    email,
    password,
  });

  return data;
};

type ResponseToken = {
  accessToken: string;
  refreshToken: string;
};

// 로그인은 엑세스 토큰과 리프레쉬 토큰이 오죠.
const postLogin = async ({
  email,
  password,
}: RequestUser): Promise<ResponseToken> => {
  const {data} = await axiosInstance.post('auth/signup', {
    email,
    password,
  });

  return data;
};

// domain에 있는 타입들 참고
type ResponseProfile = Profile & Category; 

const getProfile = async (): Promise<ResponseProfile> => {
  const {data} = await axiosInstance.get('/auth/me');
  return data;
};

const getAccessToken = async (): Promise<ResponseToken> => {
  // EncryptStorage 참고
  const refreshToken = await getEncryptStorage('refreshToken');
  const {data} = await axiosInstance.get('/auth/refresh', {
    // headers도 뭔가 참조임. 공부하기
    headers: {
      authorization: `Bearer ${refreshToken}`,
    },
  });
  return data;
};

const logout = async () => {
  await axiosInstance.get('/auth/logout');
};

export {postSignup, postLogin, getProfile, getAccessToken, logout};
export type {RequestUser, ResponseToken, ResponseProfile};
