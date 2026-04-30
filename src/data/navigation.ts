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
      { label: "A. Importance of Internship", path: "/introduction#importance" },
      { label: "B. Objectives of Internship", path: "/introduction#objectives" },
      { label: "C. Time and Place", path: "/introduction#time-place" },
    ],
  },
  {
    id: "company",
    label: "II. Company Profile",
    icon: HiOutlineOfficeBuilding,
    path: "/company-profile",
    children: [
      { label: "Company Overview", path: "/company-profile#overview" },
      { label: "1. Nature of Agency", path: "/company-profile#nature" },
      { label: "2. Mission / Vision / Goal", path: "/company-profile#mvg" },
      { label: "3. History / Background", path: "/company-profile#history" },
      { label: "4. Organizational Structure", path: "/company-profile#org" },
    ],
  },
  {
    id: "experiences",
    label: "III. Work Experiences",
    icon: HiOutlineBriefcase,
    path: "/work-experiences",
    children: [
      { label: "1. Weekly Reports", path: "/work-experiences#weekly" },
      { label: "2. Daily Time Record", path: "/work-experiences#dtr" },
      { label: "3. Progress Report", path: "/work-experiences#progress" },
      { label: "4. Analysis Report", path: "/work-experiences#analysis" },
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
