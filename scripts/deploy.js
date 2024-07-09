const { ethers } = require("hardhat");

async function main() {
  // Get the contract owner
  const contractOwner = await ethers.getSigners();
  console.log(`Deploying contract from: ${contractOwner[0].address}`);

  // Hardhat helper to get the ethers contractFactory object
  const tokenContract = await ethers.getContractFactory("BCSToken");

  // Deploy the contract
  const token = await tokenContract.deploy(contractOwner[0]);
  await token.waitForDeployment();
  console.log(`Token deployed to: ${await token.getAddress()}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
