"use client";
import AssignmentIcon from "@mui/icons-material/Assignment";
import DashboardIcon from "@mui/icons-material/Dashboard";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import GroupIcon from "@mui/icons-material/Group";
import PublishIcon from "@mui/icons-material/Publish";
import List from "@mui/material/List";
import * as React from "react";
import { MyAccordionTab } from "./MyAccordionTab";

interface NavigationBarProps {
  updateMainHeaderTitle: (newTitle: string) => void;
}

export const NavigationBar: React.FC<NavigationBarProps> = (props) => {
  return (
    <List component="nav" sx={{ width: "300px" }}>
      <React.Fragment>
        <MyAccordionTab
          title="dashboard"
          icon={<DashboardIcon />}
          link="/dashboard"
          updateMainHeaderTitle={props.updateMainHeaderTitle}
          // details={[{ title: "dashboard", link: "/" }]}
        ></MyAccordionTab>
        <MyAccordionTab
          title="Project"
          icon={<AssignmentIcon />}
          // link="/project"
          details={[
            { title: "Recently" },
            { title: "Ongoing" },
            { title: "Finished", link: "/project/finished" },
            { title: "Outdate", link: "/project/outdate" },
          ]}
          updateMainHeaderTitle={props.updateMainHeaderTitle}
        ></MyAccordionTab>
        <MyAccordionTab
          title="Task"
          icon={<FormatListBulletedIcon />}
          updateMainHeaderTitle={props.updateMainHeaderTitle}
        ></MyAccordionTab>

        <MyAccordionTab
          title="Team"
          icon={<GroupIcon />}
          details={[{ title: "dashboard", link: "/" }]}
          updateMainHeaderTitle={props.updateMainHeaderTitle}
        ></MyAccordionTab>

        <MyAccordionTab
          title="Submission"
          icon={<PublishIcon />}
          updateMainHeaderTitle={props.updateMainHeaderTitle}
        ></MyAccordionTab>
        <MyAccordionTab
          title="Calendar"
          icon={<EventAvailableIcon />}
          updateMainHeaderTitle={props.updateMainHeaderTitle}
        ></MyAccordionTab>
      </React.Fragment>
    </List>
  );
};
