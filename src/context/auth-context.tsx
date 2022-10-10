import React, { ReactNode, useCallback } from "react";
import * as auth from "auth-provider";
import { User } from "screens/project-list/search-panel";
import { http } from "utils/http";
import { useMount } from "utils";
import { useAsync } from "utils/use-async";
import { FullpageError, FullpageLoading } from "components/lib";
import * as authStore from "store/auth-slice";
import { useDispatch } from "store";
import { useSelector } from "react-redux";
import { bootstrap, selectUser } from "store/auth-slice";
export interface AuthForm {
  username: string;
  password: string;
}

// 启动初始化判断user是否存在
export const bootstrapUser = async () => {
  let user = null;
  const token = auth.getToken();
  if (token) {
    const data = await http("me", { token });
    user = data.user;
  }
  return user;
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const { error, run, isLoading, isError, isAdle } = useAsync<User | null>();
  const dispatch: (...args: unknown[]) => Promise<User> = useDispatch();

  useMount(() => {
    // run(bootstrapUser());
    run(dispatch(bootstrap()));
  });

  if (isAdle || isLoading) {
    return <FullpageLoading />;
  }

  if (isError) {
    return <FullpageError error={error} />;
  }

  return <>{children}</>;
};

export const useAuth = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const login = useCallback(
    (form: AuthForm) => dispatch(authStore.login(form)),
    [dispatch]
  );
  const register = useCallback(
    (form: AuthForm) => dispatch(authStore.register(form)),
    [dispatch]
  );
  const logOut = useCallback(() => dispatch(authStore.logOut()), [dispatch]);

  return {
    user,
    login,
    logOut,
    register,
  };
};
