import React from "react";
import DashboardIcon from '@mui/icons-material/Dashboard';
import MonitorIcon from '@mui/icons-material/Monitor';
import BadgeIcon from '@mui/icons-material/Badge';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import ReportIcon from '@mui/icons-material/Report';

export const SidebarData = [
    {
        title: "Dashboard",
        icon: <DashboardIcon />,
        link: "/dashboard"
    },
    {
        title: "Monitoring",
        icon: <MonitorIcon />,
        link: "/monitoring"
    },
    {
        title: "Employee",
        icon: <BadgeIcon />,
        link: "/employee"
    },
    {
        title: "Visitors",
        icon: <PermIdentityIcon />,
        link: "/visitors"
    },
    {
        title: "Report Logs",
        icon: <ReportIcon />,
        link: "/reportlogs"
    }
];


