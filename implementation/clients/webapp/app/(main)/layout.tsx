"use client";
import * as React from "react";
import { MainHeader } from "./_components/MainHeader";
import { NavigationBar } from "./_components/NavigationBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { CssBaseline } from "@mui/material";
import { useState } from "react";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mainHeaderTitle, setMainHeaderTitle] = useState("dashboard");

  const updateMainHeaderTitle = (newTitle: string) => {
    setMainHeaderTitle(newTitle);
    console.log("mainLayout" + newTitle);
    console.log(mainHeaderTitle);
  };
  return (
    <div>
      <CssBaseline></CssBaseline>
      <MainHeader title={mainHeaderTitle}></MainHeader>
      <Box alignContent={"flex-start"} display={"flex"} flexDirection={"row"}>
        <NavigationBar
          updateMainHeaderTitle={updateMainHeaderTitle}
        ></NavigationBar>
        <Box component="main">{children}</Box>
      </Box>
    </div>
  );
}
