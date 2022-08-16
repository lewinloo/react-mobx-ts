import { FC, useEffect } from 'react';
import { Route, Routes, useNavigate, Navigate } from 'react-router-dom';
import { IRoute } from '@/typings';
import useStores from '@/store';
import { observer } from 'mobx-react-lite';
import routes from './routes';

// 路由装饰器
const RouteDecorator = observer((props: { route: IRoute }) => {
  const { route } = props;
  const navigate = useNavigate();
  const { user } = useStores();

  useEffect(() => {
    // 鉴权路由守卫
    if (route.meta?.isAuth) {
      if (!user.isLogin) {
        navigate('/login', { state: { redirect: route.path } });
      }
    }

    // 自定义路由守卫
    route.beforeCreate && route.beforeCreate(route);

    return () => route.beforeDestroy && route.beforeDestroy(route);
  }, [route, navigate, user.isLogin]);

  return <route.component />;
});

const AppRouter: FC = () => (
  <Routes>
    <Route path="/" element={<Navigate to="/home" />} />
    <Route path="*" element={<div>Error</div>} />
    {routes.map((route) => (
      <Route
        key={route.path}
        path={route.path}
        element={<RouteDecorator route={route} />}
      />
    ))}
  </Routes>
);

export default AppRouter;
