"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface MenuItem {
  label: string;
  href?: string;
  children?: { label: string; href: string }[];
}

const menuItems: MenuItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Journal Information",
    children: [
      { label: "Overview of the journal", href: "/about-us#overview" },
      { label: "From the editor Desk", href: "/about-us#welcome" },
      { label: "Journal focus", href: "/about-us#focus" },
      { label: "Call for Papers", href: "/about-us#highlights" },
    ],
  },
  {
    label: "About DMU",
    children: [
      { label: "About", href: "/about-dmu#about" },
      { label: "Editorial Board", href: "/about-dmu#editorial" },
      { label: "Indexing", href: "/about-dmu#indexing" },
      { label: "Publication Charges & Subscription", href: "/about-dmu#charges" },
    ],
  },
  {
    label: "Publication Policy",
    children: [
      { label: "Access Policy", href: "/publication-policy#access-policy" },
      { label: "Peer-Review Policy", href: "/publication-policy#peer-review" },
      { label: "Licensing Policy", href: "/publication-policy#licensing" },
      { label: "Archiving Policy", href: "/publication-policy#archiving" },
    ],
  },
  {
    label: "Ethics Policy",
    children: [
      { label: "Author's Responsibility", href: "/ethics-policy#author-resp" },
      { label: "Editor's Responsibility", href: "/ethics-policy#editor-resp" },
      { label: "Reviewer's Responsibility", href: "/ethics-policy#reviewer-resp" },
      { label: "Copyright Policies", href: "/ethics-policy#copyright" },
      { label: "Disclaimer", href: "/ethics-policy#disclaimer" },
      { label: "Plagiarism", href: "/ethics-policy#plagiarism" },
      { label: "Article Renunciation", href: "/ethics-policy#renunciation" },
    ],
  },
  {
    label: "Authors",
    children: [
      { label: "Call for Papers 2025", href: "/authors#cfp" },
      { label: "Guidelines for Authors", href: "/authors#guidelines" },
      { label: "Notable Points", href: "/authors#notable" },
      { label: "Manuscript Requirements", href: "/authors#manuscript" },
    ],
  },
  {
    label: "Journal Issues",
    href: "/journal-issues",
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const pathname = usePathname();


  const isActive = (item: MenuItem) => {
    if (item.label === "Home") {
      return pathname === "/";
    }
    if (item.children) {
      return item.children.some((child) => {
        const basePath = child.href.split("#")[0];
        return basePath !== "/" && pathname === basePath;
      });
    }
    return pathname === item.href?.split("#")[0];
  };

  const handleToggleMenu = () => {
    setMobileOpen(!mobileOpen);
    if (mobileOpen) setOpenDropdown(null);
  };

  const handleNavClick = (e: React.MouseEvent, item: MenuItem, index: number) => {
    if (item.children && window.innerWidth <= 992) {
      e.preventDefault();
      e.stopPropagation();
      setOpenDropdown(prev => (prev === index ? null : index));
      return;
    }
    setMobileOpen(false);
    setOpenDropdown(null);
  };

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <button
          className="mobile-toggle"
          onClick={handleToggleMenu}
          aria-label="Toggle menu"
        >
          {mobileOpen ? "✕" : "☰"}
        </button>

        <ul className={`nav-menu ${mobileOpen ? "open" : ""}`}>

          {menuItems.map((item, i) => (
            <li key={i} className={`nav-item ${openDropdown === i ? "expanded" : ""}`}>
              <Link
                href={item.href || "#"}
                className={`nav-link ${isActive(item) ? "active" : ""}`}
                onClick={(e) => handleNavClick(e, item, i)}
              >
                {item.label}
                {item.children && (
                  <span className={`chevron ${openDropdown === i ? "open" : ""}`}>▼</span>
                )}
              </Link>
              {item.children && (
                <div className={`dropdown ${openDropdown === i ? "show" : ""}`}>
                  {item.children.map((child, j) => (
                    <Link
                      key={j}
                      href={child.href}
                      className="dropdown-link"
                      onClick={() => {
                        setMobileOpen(false);
                        setOpenDropdown(null);
                      }}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

