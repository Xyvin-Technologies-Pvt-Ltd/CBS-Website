"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faChevronRight,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MENU_ITEMS, type SubItem } from "./MegaMenu";

const getItemUrl = (baseHref: string, item: SubItem): string => {
  if (typeof item === "string") {
    return `${baseHref}/${item.toLowerCase().replace(/\s+/g, "-")}`;
  }
  return item.href;
};

const getItemLabel = (item: any) => {
  if (typeof item === "string") {
    return item;
  }
  return item.name;
};

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);
  const pathname = usePathname();

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
    setActiveMenu(null);
    setActiveSubMenu(null);
  }, [pathname]);

  return (
    <div className="lg:hidden relative z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-heading hover:text-primary transition-colors p-2"
        aria-label="Toggle Menu"
      >
        <FontAwesomeIcon
          icon={isOpen ? faTimes : faBars}
          className="text-2xl"
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
              style={{ zIndex: 40 }}
            />

            {/* Menu */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed top-0 left-0 right-0 bottom-0 bg-white z-50 overflow-hidden"
            >
              <div className="h-full flex flex-col">
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b">
                  {activeSubMenu ? (
                    <button
                      onClick={() => setActiveSubMenu(null)}
                      className="flex items-center text-muted hover:text-primary"
                    >
                      <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
                      Back
                    </button>
                  ) : activeMenu ? (
                    <button
                      onClick={() => setActiveMenu(null)}
                      className="flex items-center text-muted hover:text-primary"
                    >
                      <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
                      Back
                    </button>
                  ) : (
                    <span className="text-lg font-medium">Menu</span>
                  )}
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-muted hover:text-primary p-2"
                  >
                    <FontAwesomeIcon icon={faTimes} />
                  </button>
                </div>

                {/* Content */}
                <div className="flex-1 overflow-y-auto">
                  <AnimatePresence mode="wait">
                    {activeSubMenu ? (
                      <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        className="p-4"
                      >
                        {(() => {
                          const activeItem = MENU_ITEMS[
                            activeMenu as keyof typeof MENU_ITEMS
                          ]?.items?.find(
                            (item) =>
                              (item.title || item.name) === activeSubMenu
                          );

                          if (!activeItem?.subItems) return null;

                          if (
                            typeof activeItem.subItems === "object" &&
                            !Array.isArray(activeItem.subItems)
                          ) {
                            return Object.entries(activeItem.subItems).map(
                              ([category, items]) => (
                                <div key={category} className="mb-6">
                                  <h3 className="font-medium text-heading mb-3">
                                    {category}
                                  </h3>
                                  <div className="space-y-3">
                                    {(items as string[]).map((subItem) => (
                                      <Link
                                        key={
                                          typeof subItem === "string"
                                            ? subItem
                                            : ""
                                          // : subItem.href
                                        }
                                        href={getItemUrl(
                                          activeItem.href,
                                          subItem as SubItem
                                        )}
                                        className="block text-sm text-muted hover:text-primary transition-colors"
                                        onClick={() => setIsOpen(false)}
                                      >
                                        {getItemLabel(subItem)}
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              )
                            );
                          }

                          return (
                            <div className="space-y-3">
                              {(activeItem.subItems as SubItem[]).map(
                                (subItem) => (
                                  <Link
                                    key={
                                      typeof subItem === "string"
                                        ? subItem
                                        : subItem.href
                                    }
                                    href={getItemUrl(activeItem.href, subItem)}
                                    className="block text-sm text-muted hover:text-primary transition-colors"
                                    onClick={() => setIsOpen(false)}
                                  >
                                    ○ {getItemLabel(subItem)}
                                  </Link>
                                )
                              )}
                            </div>
                          );
                        })()}
                      </motion.div>
                    ) : activeMenu ? (
                      <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        className="p-4"
                      >
                        {MENU_ITEMS[
                          activeMenu as keyof typeof MENU_ITEMS
                        ].items?.map((item: any) => (
                          <div
                            key={item.title || item.name}
                            onClick={() =>
                              item.subItems &&
                              setActiveSubMenu(item.title || item.name)
                            }
                            className="py-3 cursor-pointer"
                          >
                            <div className="flex items-center justify-between">
                              <span className="text-heading">
                                {item.title || item.name}
                              </span>
                              {item.subItems && (
                                <FontAwesomeIcon
                                  icon={faChevronRight}
                                  className="text-muted"
                                />
                              )}
                            </div>
                          </div>
                        ))}
                      </motion.div>
                    ) : (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="p-4"
                      >
                        {Object.entries(MENU_ITEMS).map(([key, menu]) => (
                          <div key={key} className="py-3">
                            {menu.href ? (
                              <Link
                                href={menu.href}
                                className="block text-heading hover:text-primary"
                                onClick={() => setIsOpen(false)}
                              >
                                {menu.title}
                              </Link>
                            ) : (
                              <div
                                onClick={() => setActiveMenu(key)}
                                className="flex items-center justify-between cursor-pointer text-heading hover:text-primary"
                              >
                                <span>{menu.title}</span>
                                <FontAwesomeIcon
                                  icon={faChevronRight}
                                  className="text-muted"
                                />
                              </div>
                            )}
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
