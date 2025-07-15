// Demo login credentials
export const DEMO_CREDENTIALS = {
  email: 'admin@gmail.com',
  password: 'Admin123',
  name: 'Md Babul Akter',
};

// Auth helper functions
export const setAuthCookie = (isLoggedIn: boolean) => {
  if (typeof document !== 'undefined') {
    document.cookie = `isLoggedIn=${isLoggedIn}; path=/; max-age=${
      isLoggedIn ? 86400 : 0
    }`;
  }
};

export const login = (email: string, password: string): boolean => {
  if (
    email === DEMO_CREDENTIALS.email &&
    password === DEMO_CREDENTIALS.password
  ) {
    // Set localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem(
        'user',
        JSON.stringify({
          email: DEMO_CREDENTIALS.email,
          name: DEMO_CREDENTIALS.name,
        })
      );
    }
    // Set cookie for middleware
    setAuthCookie(true);
    return true;
  }
  return false;
};

export const logout = () => {
  // Clear localStorage
  if (typeof window !== 'undefined') {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('user');
  }
  // Clear cookie
  setAuthCookie(false);
};

export const isLoggedIn = (): boolean => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('isLoggedIn') === 'true';
  }
  return false;
};

export const getCurrentUser = () => {
  if (typeof window !== 'undefined') {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }
  return null;
};

// Sync localStorage with cookies on page load
export const syncAuthState = () => {
  if (typeof window !== 'undefined') {
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    setAuthCookie(loggedIn);
  }
};
