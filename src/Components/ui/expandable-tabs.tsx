"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface Tab {
  title: string;
  icon: LucideIcon;
  type?: never;
  to?: string;
}

interface Separator {
  type: "separator";
  title?: never;
  icon?: never;
  to?: never;
}

type TabItem = Tab | Separator;

interface ExpandableTabsProps {
  tabs: TabItem[];
  className?: string;
  activeColor?: string;
  onChange?: (index: number | null) => void;
  activeTab?: number | null;
  showAllTitles?: boolean;
  onHoverTab?: (index: number) => void;
}

// Custom hook to detect clicks outside of the element
function useOnClickOutside(
  ref: React.RefObject<HTMLElement | null>,
  handler: (event: MouseEvent | TouchEvent) => void
) {
  React.useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      handler(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
}

const buttonVariants = {
  initial: {
    gap: 0,
    paddingLeft: ".5rem",
    paddingRight: ".5rem",
  },
  animate: (isSelected: boolean) => ({
    gap: isSelected ? ".5rem" : 0,
    paddingLeft: isSelected ? "1rem" : ".5rem",
    paddingRight: isSelected ? "1rem" : ".5rem",
  }),
};

const spanVariants = {
  initial: { width: 0, opacity: 0 },
  animate: { width: "auto", opacity: 1 },
  exit: { width: 0, opacity: 0 },
};

const transition = { delay: 0.1, type: "spring", bounce: 0, duration: 0.6 };

export function ExpandableTabs({
  tabs,
  className,
  activeColor = "text-primary",
  onChange,
  activeTab,
  showAllTitles = false,
  onHoverTab,
}: ExpandableTabsProps) {
  const [internalSelected, setInternalSelected] = React.useState<number | null>(null);
  const outsideClickRef = React.useRef<HTMLDivElement>(null);

  const isControlled = activeTab !== undefined;
  const selected = isControlled ? activeTab : internalSelected;

  useOnClickOutside(outsideClickRef, () => {
    if (!isControlled) {
      setInternalSelected(null);
    }
    onChange?.(null);
  });

  const handleSelect = (index: number) => {
    if (!isControlled) {
      setInternalSelected(index);
    }
    onChange?.(index);
  };

  const Separator = () => (
    <div className="mx-1 h-[24px] w-[1.2px] bg-black/10" aria-hidden="true" />
  );

  const customButtonVariants = {
    initial: {
      gap: showAllTitles ? ".5rem" : 0,
      paddingLeft: showAllTitles ? "1rem" : ".5rem",
      paddingRight: showAllTitles ? "1rem" : ".5rem",
    },
    animate: (isSelected: boolean) => ({
      gap: (showAllTitles || isSelected) ? ".5rem" : 0,
      paddingLeft: (showAllTitles || isSelected) ? "1rem" : ".5rem",
      paddingRight: (showAllTitles || isSelected) ? "1rem" : ".5rem",
    }),
  };

  return (
    <div
      ref={outsideClickRef}
      className={cn(
        "flex flex-wrap items-center gap-2 rounded-2xl border border-default bg-surface p-1 shadow-sm",
        className
      )}
    >
      {tabs.map((tab, index) => {
        if (tab.type === "separator") {
          return <Separator key={`separator-${index}`} />;
        }

        const Icon = tab.icon;
        const showTitle = showAllTitles || selected === index;

        return (
          <motion.button
            key={tab.title}
            variants={customButtonVariants}
            initial={false}
            animate="animate"
            custom={selected === index}
            onMouseEnter={() => onHoverTab?.(index)}
            onClick={() => handleSelect(index)}
            transition={transition}
            className={cn(
              "relative flex items-center rounded-xl px-4 py-2 text-sm font-medium transition-colors duration-300",
              selected === index
                ? cn("bg-elevated", activeColor)
                : "text-secondary hover:bg-elevated hover:text-primary"
            )}
          >
            <Icon size={20} />
            <AnimatePresence initial={false}>
              {showTitle && (
                <motion.span
                  variants={spanVariants}
                  initial={showAllTitles ? "animate" : "initial"}
                  animate="animate"
                  exit="exit"
                  transition={transition}
                  className="overflow-hidden whitespace-nowrap"
                >
                  {tab.title}
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        );
      })}
    </div>
  );
}
