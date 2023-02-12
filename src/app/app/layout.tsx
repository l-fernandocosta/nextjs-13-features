import { ReactNode } from "react";

interface AppLayoutProps {
  children: ReactNode;
}

export const metadata = {
  title: {
    default: "Dashboard",
    template: "%s | Rocketseat",
  },
};
const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <div>
      <h1>Application</h1>
      {children}
    </div>
  );
};

export default AppLayout;
