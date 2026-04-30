import {
  HiOutlineHome,
  HiOutlineBookOpen,
  HiOutlineOfficeBuilding,
  HiOutlineBriefcase,
  HiOutlineClipboardCheck,
  HiOutlinePaperClip,
} from "react-icons/hi";
import type { IconType } from "react-icons";

export interface NavChild {
  label: string;
  path: string;
}

export interface NavItem {
  id: string;
  label: string;
  path?: string;
  icon: IconType;
  children?: NavChild[];
}

export const navigation: NavItem[] = [
  {
    id: "title",
    label: "Title Page",
    path: "/",
    icon: HiOutlineHome,
  },
  {
    id: "introduction",
    label: "I. Introduction",
    icon: HiOutlineBookOpen,
    path: "/introduction",
    children: [
      { label: "Acknowledgment", path: "/introduction#acknowledgment" },
      { label: "Student Trainee Prayer", path: "/introduction#prayer" },
      { label: "Personal Philosophy", path: "/introduction#philosophy" },
      { label: "Career Plan", path: "/introduction#career" },
      { label: "Importance of Internship", path: "/introduction#importance" },
      { label: "Objectives of Internship", path: "/introduction#objectives" },
      { label: "Time and Place", path: "/introduction#time-place" },
    ],
  },
  {
    id: "company",
    label: "II. Company Profile",
    icon: HiOutlineOfficeBuilding,
    path: "/company-profile",
    children: [
      { label: "Nature of Agency", path: "/company-profile#nature" },
      { label: "Mission / Vision / Goal", path: "/company-profile#mvg" },
      { label: "History / Background", path: "/company-profile#history" },
      { label: "Organizational Structure", path: "/company-profile#org" },
    ],
  },
  {
    id: "experiences",
    label: "III. Work Experiences",
    icon: HiOutlineBriefcase,
    path: "/work-experiences",
    children: [
      { label: "Weekly Reports", path: "/work-experiences#weekly" },
      { label: "Daily Time Record", path: "/work-experiences#dtr" },
      { label: "Progress Report", path: "/work-experiences#progress" },
      { label: "Analysis Report", path: "/work-experiences#analysis" },
    ],
  },
  {
    id: "assessment",
    label: "IV. Assessment",
    icon: HiOutlineClipboardCheck,
    path: "/assessment",
  },
  {
    id: "appendices",
    label: "Appendices",
    icon: HiOutlinePaperClip,
    path: "/appendices",
  },
];

export const pageTitles: Record<string, string> = {
  "/": "Title Page",
  "/introduction": "Introduction",
  "/company-profile": "Company Profile",
  "/work-experiences": "Work Experiences",
  "/assessment": "Assessment",
  "/appendices": "Appendices",
};
