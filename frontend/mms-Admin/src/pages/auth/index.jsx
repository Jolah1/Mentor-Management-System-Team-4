import React from "react";
import AuthLayout from "../../layouts/AuthLayout";
import ForgotPasswordForm from "./ForgotPasswordForm";
import LoginForm from "./LoginForm";
import ResetPasswordForm from "./ResetPasswordForm";

const routes = {
  element: <AuthLayout />,
  children: [
    {
      path: "/login",
      element: <LoginForm />,
    },
    {
      path: "/forgot-password",
      element: <ForgotPasswordForm />,
    },
    {
      path: "/reset-password",
      element: <ResetPasswordForm />,
    },
 
  ],
};

export default routes;
