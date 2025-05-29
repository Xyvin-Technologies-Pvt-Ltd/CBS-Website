"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

export type SubItem =
  | string
  | {
      name: string;
      href: string;
      description: string;
      category?: string;
    };

type MenuItem = {
  title: string;
  width?: string;
  href?: string;
  items?: Array<{
    title?: string;
    name?: string;
    href: string;
    subItems: SubItem[] | { [category: string]: SubItem[] };
  }>;
};

type MenuItems = {
  [key: string]: MenuItem;
};

export const MENU_ITEMS: MenuItems = {
  home: {
    title: "Home",
    href: "/",
  },
  products: {
    title: "Products & Services",
    width: "lg:w-[800px]",
    items: [
      {
        title: "Enterprise Transformation",
        href: "/services/enterprise-transformation",
        subItems: [
          {
            name: "Customer Loyalty & Rewards Management",
            href: "/services/enterprise-transformation/customer-loyalty-rewards-management",
            description:
              "Connect businesses with customers through seamless loyalty and rewards solutions",
          },
          {
            name: "AI-Driven Credit Lifecycle Automation",
            href: "/services/enterprise-transformation/credit-lifecycle-automation",
            description:
              "Transform credit risk evaluation with AI-powered modeling and decisioning",
          },
          {
            name: "AI-Based Credit Scoring & Modeling",
            href: "/services/enterprise-transformation/credit-scoring-modeling",
            description:
              "Make precise lending decisions with AI-powered credit assessment",
          },
          {
            name: "E-commerce & Marketplace",
            href: "/services/enterprise-transformation/ecommerce-marketplace",
            description:
              "Create exceptional digital commerce experiences with AI-powered solutions",
          },
          {
            name: "Counseling Management System",
            href: "/services/enterprise-transformation/counseling-management",
            description:
              "Transform educational counseling with intelligent session management",
          },
          {
            name: "Branding & Marketing",
            href: "/services/enterprise-transformation/branding-marketing",
            description:
              "Transform your brand with data-driven marketing solutions",
          },
        ],
      },
      {
        title: "Strategy & Consulting",
        href: "/services/strategy-consulting",
        subItems: [
          {
            name: "Strategy Formulation & Implementation",
            href: "/services/strategy-consulting/strategy-formulation",
            description:
              "Create and execute clear, actionable strategies aligned with your vision",
          },
          {
            name: "Process Re-Engineering & Automation",
            href: "/services/strategy-consulting/process-reengineering",
            description:
              "Optimize workflows and automate processes for maximum efficiency",
          },
          {
            name: "Business Performance & Growth",
            href: "/services/strategy-consulting/performance-growth",
            description:
              "Drive measurable improvements and accelerate business growth",
          },
          {
            name: "Data Analytics",
            href: "/services/strategy-consulting/data-analytics",
            description:
              "Transform data into actionable insights for better decision-making",
          },
          {
            name: "Business Advisory",
            href: "/services/strategy-consulting/business-advisory",
            description:
              "Expert guidance for navigating complex business challenges",
          },
        ],
      },
      {
        title: "Learning & Development",
        href: "/services/learning-development",
        subItems: {
          "For Corporates": [
            {
              name: "Sales, Customer Service & Experience",
              href: "/services/learning-development/corporates/sales-customer-service",
              description:
                "Enhance your team's capabilities in sales techniques, customer service delivery, and experience management",
              category: "For Corporates",
            },
            {
              name: "HR & Communication",
              href: "/services/learning-development/corporates/hr-communication",
              description:
                "Develop effective HR practices and communication strategies for organizational success",
              category: "For Corporates",
            },
            {
              name: "Team Building",
              href: "/services/learning-development/corporates/team-building",
              description:
                "Foster collaboration and strengthen team dynamics through specialized team building programs",
              category: "For Corporates",
            },
            {
              name: "Strategy Formulation",
              href: "/services/learning-development/corporates/strategy-formulation",
              description:
                "Learn to develop and implement effective business strategies for sustainable growth",
              category: "For Corporates",
            },
            {
              name: "Lean, Six Sigma Training & Certification",
              href: "/services/learning-development/institutions/lean-six-sigma-training-certification",
              description:
                "Master process improvement methodologies with professional Lean Six Sigma certification programs",
              category: "For Institutions",
            },
            {
              name: "Faculty Development Programs",
              href: "/services/learning-development/institutions/faculty-development-programs",
              description:
                "Enhance teaching effectiveness and academic leadership skills for educational professionals",
              category: "For Institutions",
            },
            {
              name: "Employability Skills",
              href: "/services/learning-development/institutions/employability-skills",
              description:
                "Develop essential workplace skills to improve career prospects and professional growth",
              category: "For Institutions",
            },
          ],
          "For Institutions": [
            {
              name: "Lean, Six Sigma Training & Certification",
              href: "/services/learning-development/institutions/lean-six-sigma-training-certification",
              description:
                "Master process improvement methodologies with professional Lean Six Sigma certification programs",
            },
            {
              name: "Faculty Development Programs",
              href: "/services/learning-development/institutions/faculty-development-programs",
              description:
                "Enhance teaching effectiveness and academic leadership skills for educational professionals",
            },
            {
              name: "Employability Skills",
              href: "/services/learning-development/institutions/employability-skills",
              description:
                "Develop essential workplace skills to improve career prospects and professional growth",
            },
          ],
        },
      },
    ],
  },
  industries: {
    title: "Industries",
    width: "lg:w-[600px]",
    items: [
      {
        title: "Financial Services",
        href: "/industries/financial-services",
        subItems: [
          "Banking",
          "Insurance",
          "Investment Services",
          "Fintech Solutions",
        ],
      },
      {
        title: "Retail & Consumer",
        href: "/industries/retail-consumer",
        subItems: [
          "Retail FMCG",
          "E-commerce",
          "Consumer Goods",
          "Luxury & Fashion",
        ],
      },
      {
        title: "Industrial & Manufacturing",
        href: "/industries/industrial-manufacturing",
        subItems: ["Manufacturing", "Automotive", "Oil & Gas", "Gem & Jewelry"],
      },
      {
        title: "Services & Others",
        href: "/industries/services",
        subItems: ["Education", "Healthcare", "Telecom", "Travel & Logistics"],
      },
    ],
  },
  insights: {
    title: "Insights",
    href: "/insights",
 
  },
  management: {
    title: "Management Team",
    href: "/management-team",
  },
  contact: {
    title: "Contact us",
    href: "/contact",
  },
};

const getItemUrl = (baseHref: string, item: SubItem): string => {
  if (typeof item === "string") {
    return `${baseHref}/${item.toLowerCase().replace(/\s+/g, "-")}`;
  }
  return item.href;
};

const getItemLabel = (item: SubItem): string => {
  if (typeof item === "string") {
    return item;
  }
  return item.name;
};

export default function MegaMenu() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);

  return (
    <nav className="flex items-center gap-8">
      {Object.entries(MENU_ITEMS).map(([key, menu]) => (
        <div
          key={key}
          className="relative"
          onMouseEnter={() => (menu as any).items && setActiveMenu(key)}
          onMouseLeave={() => {
            setActiveMenu(null);
            setActiveSubMenu(null);
          }}
        >
          {menu.href ? (
            <Link
              href={menu.href}
              className="py-4 px-2 font-medium text-[15px] text-heading/80 hover:text-heading transition-colors"
            >
              {menu.title}
            </Link>
          ) : (
            <button
              className="flex items-center gap-2 py-4 px-2 font-medium text-[15px] text-heading/80 hover:text-heading transition-colors"
              aria-expanded={activeMenu === key}
            >
              {menu.title}
              <FontAwesomeIcon
                icon={faChevronDown}
                className={`text-xs transition-transform duration-300 ${
                  activeMenu === key ? "rotate-180" : ""
                }`}
              />
            </button>
          )}

          {(menu as any).items && (
            <AnimatePresence>
              {activeMenu === key && (
                <>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/5 z-40"
                    onClick={() => {
                      setActiveMenu(null);
                      setActiveSubMenu(null);
                    }}
                  />

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className={`absolute top-full -left-4 bg-white shadow-lg rounded-2xl py-8 ${menu.width} z-50`}
                  >
                    <div className="px-8">
                     

                      <div className="flex">
                        {/* Main Menu Column */}
                        <div className="w-64 border-r border-gray-100">
                          {(menu as any).items?.map(
                            (item: {
                              title?: string;
                              name?: string;
                              href: string;
                              subItems: any;
                            }) => (
                              <div
                                key={item.title || item.name}
                                onMouseEnter={() =>
                                  setActiveSubMenu(
                                    (item.title || item.name) ?? null
                                  )
                                }
                                className={`group px-4 py-3 cursor-pointer rounded-lg transition-colors ${
                                  activeSubMenu === (item.title || item.name)
                                    ? "bg-primary/5 text-primary"
                                    : "hover:bg-gray-50"
                                }`}
                              >
                                <div className="flex items-center justify-between">
                                  <span className="font-medium">
                                    {item.title || item.name}
                                  </span>
                                  {item.subItems && (
                                    <FontAwesomeIcon
                                      icon={faChevronRight}
                                      className="text-xs opacity-50"
                                    />
                                  )}
                                </div>
                              </div>
                            )
                          )}
                        </div>

                        {/* Sub Menu Column */}
                        <div className="flex-1 pl-8">
                          <AnimatePresence mode="wait">
                            {activeSubMenu &&
                              (menu as any).items?.find(
                                (item: {
                                  title?: string;
                                  name?: string;
                                  href: string;
                                  subItems: any;
                                }) =>
                                  (item.title || item.name) === activeSubMenu
                              )?.subItems && (
                                <motion.div
                                  initial={{ opacity: 0, x: 20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  exit={{ opacity: 0, x: 20 }}
                                  transition={{ duration: 0.2 }}
                                  className="py-3"
                                >
                                  {(() => {
                                    const activeItem = (menu as any).items.find(
                                      (item: {
                                        title?: string;
                                        name?: string;
                                        href: string;
                                        subItems: any;
                                      }) =>
                                        (item.title || item.name) ===
                                        activeSubMenu
                                    );

                                    if (!activeItem?.subItems) return null;

                                    if (
                                      typeof activeItem.subItems === "object" &&
                                      !Array.isArray(activeItem.subItems)
                                    ) {
                                      return Object.entries(
                                        activeItem.subItems as {
                                          [key: string]: SubItem[];
                                        }
                                      ).map(([category, items]) => (
                                        <div key={category} className="mb-6">
                                          <h3 className="font-medium text-heading mb-2">
                                            {category}
                                          </h3>
                                          <div className="space-y-2">
                                            {(items as SubItem[]).map(
                                              (subItem) => (
                                                <Link
                                                  key={
                                                    typeof subItem === "string"
                                                      ? subItem
                                                      : subItem.href
                                                  }
                                                  href={getItemUrl(
                                                    activeItem.href,
                                                    subItem
                                                  )}
                                                  className="block text-sm text-muted hover:text-primary transition-colors"
                                                  onClick={() => {
                                                    setActiveMenu(null);
                                                    setActiveSubMenu(null);
                                                  }}
                                                >
                                                  • {getItemLabel(subItem)}
                                                </Link>
                                              )
                                            )}
                                          </div>
                                        </div>
                                      ));
                                    }

                                    return (
                                      <div className="space-y-2">
                                        {(activeItem.subItems as SubItem[]).map(
                                          (subItem) => (
                                            <Link
                                              key={
                                                typeof subItem === "string"
                                                  ? subItem
                                                  : subItem.href
                                              }
                                              href={getItemUrl(
                                                activeItem.href,
                                                subItem
                                              )}
                                              className="block text-sm text-muted hover:text-primary transition-colors"
                                              onClick={() => {
                                                setActiveMenu(null);
                                                setActiveSubMenu(null);
                                              }}
                                            >
                                              ○ {getItemLabel(subItem)}
                                            </Link>
                                          )
                                        )}
                                      </div>
                                    );
                                  })()}
                                </motion.div>
                              )}
                          </AnimatePresence>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          )}
        </div>
      ))}
    </nav>
  );
}
