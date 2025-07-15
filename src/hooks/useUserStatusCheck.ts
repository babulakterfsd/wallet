import { isLoggedIn as checkIsLoggedIn, getCurrentUser } from '@/lib/auth';
import { ICurrentUser } from '@/types/common.types';

export const isLoggedIn = () => {
  return checkIsLoggedIn();
};

export const currentUserInfo = () => {
  const currentUser = getCurrentUser();
  return currentUser as ICurrentUser;
};
