const env = (import.meta.env.MODE || 'prod') as 'dev' | 'prod' | 'test';

const EnvConfig = {
  dev: {
    baseApi: '/api'
  },
  test: {
    baseApi: 'xxx'
  },
  prod: {
    baseApi: 'xxx'
  }
};

export default {
  env,
  namespace: 'manager',
  ...EnvConfig[env]
};
