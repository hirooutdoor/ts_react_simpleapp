// /home 配下のrouterを設定していく

import { Home } from "../components/pages/Home";
import { UserManagement } from "../components/pages/UserManageMent";
import { Setting } from "../components/pages/Setting";

export const homeRoutes = [
  {
    path: "/",
    exact: true,
    childrent: <Home />
  },
  {
    path: "/user_management",
    exact: false,
    childrent: <UserManagement />
  },
  {
    path: "/setting",
    exact: false,
    childrent: <Setting />
  }
];
