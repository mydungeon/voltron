import React from "react";
import { useCookies } from "react-cookie";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { userApi } from "src/redux/api/user.api";
import usePreloader from "src/hooks/usePreloader";

export default function Authorize({ allowedRoles }: { allowedRoles: string }) {
  const location = useLocation();
  const [cookies] = useCookies(["logged_in"]);
  const { logged_in } = cookies;
  const { isLoading, isFetching } = userApi.endpoints.getMe.useQuery(null, {
    skip: false,
    refetchOnMountOrArgChange: true,
  });
  const loading = isLoading || isFetching;
  const user = userApi.endpoints.getMe.useQueryState(null, {
    selectFromResult: ({ data }) => data,
  });
  const { roles } = user || {};
  const isLoggedInUser = logged_in && user;
  const isAllowed = roles && roles.includes(allowedRoles);
  const isAuthorized = isLoggedInUser && isAllowed;
  const isUnauthorized = isLoggedInUser && !isAllowed;
  const isLoggedOut = !logged_in;
  usePreloader(loading);

  if (isAuthorized && !isLoggedOut) {
    return <Outlet />;
  } else if (isUnauthorized) {
    return <Navigate to="/unauthorized" state={{ from: location }} replace />;
  } else if (isLoggedOut) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  } else return null;
}
