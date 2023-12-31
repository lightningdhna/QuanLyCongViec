"use client";
import * as React from "react";
import { useState, useMemo } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

export const MainHeader = ({ title }: { title: string }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {title}
          </Typography>

          <Button
            variant="outlined"
            color="inherit"
            style={{ marginRight: "1rem" }}
          >
            Sign In
          </Button>
          <Button variant="outlined" color="inherit">
            Sign Up
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
