import MainLayout from '../layouts';
import Pools from '../views/Pools';
import Staking from '../views/Staking';

export const BaseRoutes = {
  path: "/",
  element: <MainLayout />,
  children: [
    {
      path: "",
      element: <Pools />,
    },
    {
      path: "pool",
      element: <Staking />,
    }
  ],
};
