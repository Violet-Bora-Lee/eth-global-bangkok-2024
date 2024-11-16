import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { Contract } from "ethers";

/**
 * Deploys a contract named "YourContract" using the deployer account and
 * constructor arguments set to the deployer address
 *
 * @param hre HardhatRuntimeEnvironment object.
 */
const deployContracts: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  /*
    On localhost, the deployer account is the one that comes with Hardhat, which is already funded.

    When deploying to live networks (e.g `yarn deploy --network sepolia`), the deployer account
    should have sufficient balance to pay for the gas fees for contract creation.

    You can generate a random account with `yarn generate` which will fill DEPLOYER_PRIVATE_KEY
    with a random private key in the .env file (then used on hardhat.config.ts)
    You can run the `yarn account` command to check your balance in every network.
  */
  const { deployer } = await hre.getNamedAccounts();
  console.log("👋🐒 deployer:", deployer);

  const { deploy } = hre.deployments;

  // const chronicleOracle = "0xc6639C0591d632Bf689ceab617A0377072e7f524"
  // const selfKisser = "0x0Dcc19657007713483A5cA76e6A7bbe5f56EA37d"

  // await deploy("Profile", {
  //   from: deployer,
  //   // Contract constructor arguments
  //   args: [],
  //   log: true,
  //   // autoMine: can be passed to the deploy function to make the deployment process faster on local networks by
  //   // automatically mining the contract deployment transaction. There is no effect on live networks.
  //   autoMine: true,
  // });

  // await deploy("RideManagement", {
  //   from: deployer,
  //   // Contract constructor arguments
  //   args: [],
  //   log: true,
  //   // autoMine: can be passed to the deploy function to make the deployment process faster on local networks by
  //   // automatically mining the contract deployment transaction. There is no effect on live networks.
  //   autoMine: true,
  // });

  await deploy("TransportWithAttestationWithoutOracle", {
    from: deployer,
    // Contract constructor argume dts
    args: [deployer],
    log: true,
    // autoMine: can be passed to the deploy function to make the deployment process faster on local networks by
    // automatically mining the contract deployment transaction. There is no effect on live networks.
    autoMine: true,
  });

  // Get the deployed contract to interact with it after deploying.
  // const profilContract = await hre.ethers.getContract<Contract>("Profile", deployer);
  // const rideManagementContract = await hre.ethers.getContract<Contract>("RideManagement", deployer);
  const TransportAndDeliveryWithAttestationContract = await hre.ethers.getContract<Contract>(
    "TransportWithAttestationWithoutOracle",
    deployer,
  );

  // console.log("🐒 1:", await profilContract);
  // console.log("🌞 2:", await rideManagementContract);
  console.log("🎶 3:", await TransportAndDeliveryWithAttestationContract);
};

export default deployContracts;

// Tags are useful if you have multiple deploy files and only want to run one of them.
// e.g. yarn deploy --tags YourContract
deployContracts.tags = ["Profile", "RideManagement", "TransportWithAttestation"];
