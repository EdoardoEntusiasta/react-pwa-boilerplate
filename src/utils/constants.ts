
export const ENVIRONMENT = {
  development: (process.env.NODE_ENV || 'development') === 'development',
  production: (process.env.NODE_ENV || 'development') === 'production',
};

export const LOCAL_STORAGE_KEYS = {
  LOCALE: 'lang',
  USER: 'user',
};
