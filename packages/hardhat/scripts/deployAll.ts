import { execSync } from "child_process";
import Table from "cli-table3";

const networks = [
  "sepolia",
  "polygonMumbai",
  "polygonZkEvmTestnet",
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

const table = new Table({
  head: ["Network", "Status", "Message"],
  colWidths: [20, 10, 50],
});

networks.forEach(network => {
  console.log(`Deploying to ${network}...`);
  try {
    execSync(`yarn deploy --network ${network}`, { stdio: "inherit" });
    table.push([network, "Success", "Successfully deployed"]);
  } catch (error) {
    table.push([network, "Failed", error.message]);
  }
});

console.log(table.toString());
