import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { HiChevronDown, HiX, HiOutlineAcademicCap } from "react-icons/hi";
import { navigation } from "../data/navigation";
import profilePic from "../assets/profile.jpg";

interface SidebarProps {
  mobileOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ mobileOpen, onClose }: SidebarProps) {
  const location = useLocation();
  const [openId, setOpenId] = useState<string | null>(null);

  useEffect(() => {
    const active = navigation.find(
      (n) => n.children && n.path && location.pathname.startsWith(n.path) && n.path !== "/"
    );
    if (active) setOpenId(active.id);
  }, [location.pathname]);

  const toggle = (id: string) => setOpenId((cur) => (cur === id ? null : id));

  return (
    <aside
      className={`fixed top-0 left-0 h-screen w-72 bg-card text-foreground border-r border-border z-40 transform transition-transform duration-300 ease-in-out flex flex-col ${
        mobileOpen ? "translate-x-0" : "-translate-x-full"
      } lg:translate-x-0`}
    >
      {/* Brand */}
      <div className="px-5 py-4 border-b border-border flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-lg gradient-primary flex items-center justify-center shadow-elegant">
            <HiOutlineAcademicCap className="text-white text-lg" />
          </div>
          <h1 className="font-bold text-base">OJT E-Portfolio</h1>
        </div>
        <button
          onClick={onClose}
          className="lg:hidden p-1 hover:text-primary"
          aria-label="Close menu"
        >
          <HiX className="text-2xl" />
        </button>
      </div>

      {/* Profile */}
      <div className="px-5 py-5 border-b border-border flex flex-col items-center text-center">
        <div className="relative">
          <img
            src={profilePic}
            alt="Julian Bernard T. Alvarado"
            width={96}
            height={96}
            loading="lazy"
            className="w-24 h-24 rounded-full object-cover ring-4 ring-primary/20 shadow-elegant"
          />
          <span className="absolute bottom-1 right-1 w-4 h-4 rounded-full bg-success border-2 border-card" />
        </div>
        <p className="mt-3 font-semibold text-sm text-foreground">
          Julian Bernard T. Alvarado
        </p>
        <p className="text-xs text-primary mt-0.5">Full-Stack Developer / OJT Student</p>
      </div>

      {/* Nav */}
      <div className="px-5 pt-4 pb-2">
        <p className="text-[10px] font-semibold tracking-widest text-muted-foreground uppercase">
          E-Portfolio Contents
        </p>
      </div>
      <nav className="flex-1 overflow-y-auto px-3 pb-4 space-y-1">
        {navigation.map((item) => {
          const Icon = item.icon;
          const hasChildren = !!item.children?.length;
          const isOpen = openId === item.id;

          if (!hasChildren) {
            return (
              <NavLink
                key={item.id}
                to={item.path!}
                end={item.path === "/"}
                className={({ isActive: navActive }) =>
                  `group flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                    navActive
                      ? "bg-primary/10 text-primary"
                      : "text-foreground hover:bg-secondary"
                  }`
                }
              >
                <Icon className="text-lg flex-shrink-0 text-primary" />
                <span className="truncate">{item.label}</span>
              </NavLink>
            );
          }

          const sectionActive = item.path && location.pathname.startsWith(item.path);

          return (
            <div key={item.id}>
              <button
                onClick={() => toggle(item.id)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  sectionActive
                    ? "bg-primary/10 text-primary"
                    : "text-foreground hover:bg-secondary"
                }`}
              >
                <Icon className="text-lg flex-shrink-0 text-primary" />
                <span className="flex-1 text-left truncate">{item.label}</span>
                <HiChevronDown
                  className={`text-base transition-transform duration-200 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  isOpen ? "max-h-[32rem] mt-1" : "max-h-0"
                }`}
              >
                <ul className="ml-4 pl-4 border-l border-border space-y-0.5 py-1">
                  {item.children!.map((child) => {
                    const [base, hash] = child.path.split("#");
                    const childActive =
                      location.pathname === base &&
                      (hash ? location.hash === `#${hash}` : !location.hash);
                    return (
                      <li key={child.path}>
                        <NavLink
                          to={child.path}
                          className={`block px-3 py-2 text-xs rounded-md transition-colors ${
                            childActive
                              ? "text-primary bg-primary/10 font-medium"
                              : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                          }`}
                        >
                          {child.label}
                        </NavLink>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          );
        })}
      </nav>

      <div className="px-6 py-3 border-t border-border text-xs text-muted-foreground text-center">
        v1.0 · Production
      </div>
    </aside>
  );
}
