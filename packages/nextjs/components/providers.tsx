"use client";

import type { PrivyClientConfig } from "@privy-io/react-auth";
import { PrivyProvider } from "@privy-io/react-auth";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  baseSepolia,
  celoAlfajores,
  flowTestnet,
  gnosisChiado,
  lineaSepolia,
  morphHolesky,
  polygonAmoy,
  polygonZkEvmCardona,
  rootstock,
  scrollSepolia,
  sepolia,
} from "viem/chains";
import { WagmiProvider } from "wagmi";
import { wagmiConfig } from "~~/services/web3/wagmiConfig";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const privyConfig: PrivyClientConfig = {
  embeddedWallets: {
    createOnLogin: "users-without-wallets",
    requireUserPasswordOnCreate: true,
    noPromptOnSignature: false,
  },
  loginMethods: ["email", "wallet"],
  appearance: {
    showWalletLoginFirst: false,
    walletChainType: "ethereum-only",
  },
  defaultChain: gnosisChiado,
  supportedChains: [
    celoAlfajores,
    gnosisChiado,
    polygonAmoy,
    baseSepolia,
    polygonZkEvmCardona,
    flowTestnet,
    lineaSepolia,
    morphHolesky,
    rootstock,
    scrollSepolia,
    sepolia,
  ],
};

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <PrivyProvider
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      apiUrl={process.env.NEXT_PUBLIC_PRIVY_AUTH_URL as string}
      appId={process.env.NEXT_PUBLIC_PRIVY_APP_ID as string}
      config={privyConfig}
    >
      <WagmiProvider config={wagmiConfig}>
        <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
      </WagmiProvider>
    </PrivyProvider>
  );
};

export default Providers;
