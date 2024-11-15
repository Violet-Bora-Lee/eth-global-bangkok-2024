import "@rainbow-me/rainbowkit/styles.css";
import { ScaffoldEthAppWithProviders } from "~~/components/scaffold-eth/ScaffoldEthAppWithProviders";
import { ThemeProvider } from "~~/components/scaffold-eth/ThemeProvider";
import "~~/styles/scaffold-eth.css";
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
