import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import AssignmentIcon from "@mui/icons-material/Assignment";
import DashboardIcon from "@mui/icons-material/Dashboard";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import GroupIcon from "@mui/icons-material/Group";
import PublishIcon from "@mui/icons-material/Publish";
import { ListItem } from "@mui/material";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import * as React from "react";
import { useState } from "react";
const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary {...props} />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

interface MyAccordionProp {
  title: string;
  icon: React.ReactNode;
  link?: string;
  details?: { title: string; link?: string }[];
  updateMainHeaderTitle: (newTitle: string) => void;
}

export const MyAccordionTab: React.FC<MyAccordionProp> = ({
  title,
  icon,
  link,
  details,
  updateMainHeaderTitle,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleAccordionChange = (
    event: React.ChangeEvent<{}>,
    newIsExpanded: boolean
  ) => {
    setIsExpanded(newIsExpanded);
  };
  return (
    <Accordion
      expanded={details && details.length > 0 ? isExpanded : false}
      onChange={handleAccordionChange}
    >
      <AccordionSummary
        expandIcon={
          details && details.length > 0 ? (
            <ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />
          ) : null
        }
        onClick={() => {
          updateMainHeaderTitle(title);
        }}
      >
        <a href={link ?? undefined}>
          <ListItem>
            <ListItemIcon>{icon}</ListItemIcon>
            <Typography sx={{ width: "33%", flexShrink: 0 }}>
              {title}
            </Typography>
          </ListItem>
        </a>
      </AccordionSummary>
      {details && details.length > 0 && (
        <AccordionDetails>
          {details.map((detail, index) => (
            <a key={`${detail.title}-${detail.link}`} href={detail.link}>
              <ListItem
                onClick={() => {
                  updateMainHeaderTitle(title + detail.title);
                }}
                sx={{
                  "&:hover": { background: "#3081D0", color: "white" },
                  borderRadius: "10px",
                  height: "50px",
                }}
              >
                <Typography
                  sx={{ width: "33%", flexShrink: 0, paddingLeft: 9 }}
                >
                  {detail.title}
                </Typography>
              </ListItem>
            </a>
          ))}
        </AccordionDetails>
      )}
    </Accordion>
  );
};
