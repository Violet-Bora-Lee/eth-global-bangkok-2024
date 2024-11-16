import { execSync } from "child_process";
const networks = [
  "sepolia",
  "amoy",
  "cardona",
  "chiado",
  "baseSepolia",
  "scrollSepolia",
  "zircuit",
  "alfajores",
  "mantle",
  "rootstock",
  "morphHolesky",
  "lineaSepolia",
  "flow",
];

networks.forEach(network => {
  console.log(`Deploying to ${network}...`);
  try {
    execSync(`yarn deploy --network ${network}`, { stdio: "inherit" });
    console.log(`Successfully deployed to ${network}`);
  } catch (error) {
    console.error(`Failed to deploy to ${network}:`, error);
  }
});
