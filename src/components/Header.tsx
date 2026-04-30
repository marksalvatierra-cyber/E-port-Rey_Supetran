import { useLocation } from "react-router-dom";
import { HiOutlineMenu, HiOutlineMoon, HiOutlineSun, HiChevronRight } from "react-icons/hi";
import { pageTitles } from "../data/navigation";
import { useTheme } from "../hooks/useTheme";

interface HeaderProps {
  onMenuClick: () => void;
}

export default function Header({ onMenuClick }: HeaderProps) {
  const location = useLocation();
  const title = pageTitles[location.pathname] ?? "Dashboard";
  const { theme, toggle } = useTheme();

  return (
    <header className="sticky top-0 z-20 bg-card/80 backdrop-blur-md border-b border-border">
      <div className="flex items-center justify-between px-4 sm:px-6 lg:px-10 h-16">
        <div className="flex items-center gap-3 min-w-0">
          <button
            onClick={onMenuClick}
            className="lg:hidden p-2 rounded-md hover:bg-secondary transition-colors"
            aria-label="Open menu"
          >
            <HiOutlineMenu className="text-2xl text-foreground" />
          </button>

          <div className="min-w-0">
            <nav className="hidden sm:flex items-center text-xs text-muted-foreground">
              <span>E-Portfolio</span>
              <HiChevronRight className="mx-1" />
              <span className="text-foreground font-medium truncate">{title}</span>
            </nav>
            <h1 className="text-lg sm:text-xl font-semibold text-foreground truncate">
              {title}
            </h1>
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={toggle}
            className="p-2 rounded-md hover:bg-secondary transition-colors"
            aria-label="Toggle dark mode"
          >
            {theme === "dark" ? (
              <HiOutlineSun className="text-xl text-foreground" />
            ) : (
              <HiOutlineMoon className="text-xl text-foreground" />
            )}
          </button>
          <div className="hidden sm:flex items-center gap-3 pl-3 border-l border-border">
            <div className="text-right">
              <p className="text-sm font-medium text-foreground">Rey B.Supetran</p>
              <p className="text-xs text-muted-foreground">BSIT · 4th Year</p>
            </div>
            <div className="w-9 h-9 rounded-full gradient-primary flex items-center justify-center text-white font-semibold text-sm shadow-soft">
              JA
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
