import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

interface BreadcrumbProps {
  items: {
    label: string;
    href?: string;
  }[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="flex items-center gap-2 text-sm text-white/60">
      {items.map((item, index) => (
        <div key={item.label} className="flex items-center gap-2">
          {item.href ? (
            <Link 
              href={item.href}
              className="hover:text-white transition-colors"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-white">{item.label}</span>
          )}
          {index < items.length - 1 && (
            <FontAwesomeIcon 
              icon={faChevronRight} 
              className="text-xs opacity-40" 
            />
          )}
        </div>
      ))}
    </nav>
  );
} 