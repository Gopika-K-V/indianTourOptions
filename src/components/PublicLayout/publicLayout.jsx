import React from "react";
import { Link, Outlet, Navigate } from "react-router-dom";
import HeaderComponent from "../HeaderComponent";
import FooterComponent from "../FooterComponent";

const PublicLayout = () => {
  return (
    <>
        <HeaderComponent/>
        <FooterComponent/>
    </>
  );
};

export default PublicLayout;
