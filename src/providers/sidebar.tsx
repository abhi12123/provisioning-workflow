import { createContext, useContext, useState, type ReactNode } from "react";

interface SidebarContextType {
  isExpanded: boolean;
  toggleExpanded: () => void;
  setExpanded: (expanded: boolean) => void;
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export const SidebarProvider = ({ children }: { children: ReactNode }) => {
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleExpanded = () => setIsExpanded((prev) => !prev);

  const setExpanded = (expanded: boolean) => setIsExpanded(expanded);

  return (
    <SidebarContext.Provider
      value={{ isExpanded, toggleExpanded, setExpanded }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

// Hook to use the sidebar context
export const useSidebarExpanded = () => {
  const context = useContext(SidebarContext);
  if (context === undefined) {
    throw new Error("useSidebarExpanded must be used within a SidebarProvider");
  }
  return context;
};
