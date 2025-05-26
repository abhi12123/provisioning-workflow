import ThemeProvider from "./design-system/utils/theme-provider";
import ProvisioningPage from "./pages/provisioning-page";
import { SidebarProvider } from "./providers/sidebar";

function App() {
  return (
    <>
      <ThemeProvider>
        <SidebarProvider>
          <ProvisioningPage />
        </SidebarProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
