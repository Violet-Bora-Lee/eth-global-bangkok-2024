import "@rainbow-me/rainbowkit/styles.css";
import { ScaffoldEthAppWithProviders } from "~~/components/ScaffoldEthAppWithProviders";
import { ThemeProvider } from "~~/components/ThemeProvider";
import "~~/styles/globals.css";
import { getMetadata } from "~~/utils/scaffold-eth/getMetadata";

export const metadata = getMetadata({
  title: "Scaffold-ETH 2 App",
  description: "Built with 🏗 Scaffold-ETH 2",
});

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ScaffoldEthAppWithProviders>
      <ThemeProvider enableSystem>{children}</ThemeProvider>
    </ScaffoldEthAppWithProviders>
  );
};

export default Layout;
