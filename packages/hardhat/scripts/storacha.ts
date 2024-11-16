//import { create } from "@web3-storage/w3up-client";

async function storeRideshareData() {
  const { create } = await import("@web3-storage/w3up-client");
  try {
    const client = await create();
    const account = await client.login("frgy.web3@gmail.com");
    const space = await client.createSpace("Rollin'Pool", { account });
    await space.save();

    const drivers = [
      {
        name: "Solene",
        age: 25,
        image: "  ",
        startingRate: 0,
        carSeats: 4,
        carModel: "Clio 3",
        carImages: ["", ""],
        carFeatures: ["Air Conditioning", "Electric Charging", "GPS", "No-smoking"],
        zkPassport: "???",
      },
      {
        name: "Aya B",
        age: 23,
        image: "  ",
        startingRate: 0,
        carSeats: 4,
        carModel: "Audi A21",
        carImages: ["", ""],
        carFeatures: ["Pets allowed", "Electric Charging", "GPS"],
        zkPassport: "???",
      },
      {
        name: "Rashmi",
        age: 35,
        image: "  ",
        startingRate: 0,
        carSeats: 4,
        carModel: "Jeep",
        carImages: ["", ""],
        carFeatures: ["Air Conditioning", "Electric Charging", "GPS", "No-smoking"],
        zkPassport: "???",
      },
    ];

    const passengers = [
      {
        name: "Rose",
        age: 19,
        image: "",
        startingRate: 0,
        zkPassport: "??",
      },
      {
        name: "Bora",
        age: 36,
        image: "",
        startingRate: 0,
        zkPassport: "??",
      },
      {
        name: "Nandy",
        age: 26,
        image: "",
        startingRate: 0,
        zkPassport: "??",
      },
    ];

    const driversFile = new File([JSON.stringify(drivers, null, 2)], "drivers.json", { type: "application/json" });

    const passengersFile = new File([JSON.stringify(passengers, null, 2)], "passengers.json", {
      type: "application/json",
    });

    // Uploader les fichiers
    const files = [driversFile, passengersFile];
    const directoryCid = await client.uploadDirectory(files);

    console.log("Données stockées avec succès!");
    console.log("Directory CID:", directoryCid.toString());

    return {
      cid: directoryCid.toString(),
      driversUrl: `https://${directoryCid}.ipfs.w3s.link/drivers.json`,
      passengersUrl: `https://${directoryCid}.ipfs.w3s.link/passengers.json`,
    };
  } catch (error) {
    console.error("Erreur lors du stockage:", error);
    throw error;
  }
}

// Fonction pour récupérer les données
async function getRideshareData(cid: string) {
  try {
    const driversResponse = await fetch(`https://${cid}.ipfs.w3s.link/drivers.json`);
    const passengersResponse = await fetch(`https://${cid}.ipfs.w3s.link/passengers.json`);

    const drivers = await driversResponse.json();
    const passengers = await passengersResponse.json();

    return { drivers, passengers };
  } catch (error) {
    console.error("Erreur lors de la récupération:", error);
    throw error;
  }
}

// Exemple d'utilisation
async function main() {
  try {
    // Stocker les données
    const uploadResult = await storeRideshareData();
    console.log("Upload successful:", uploadResult);

    // Récupérer les données
    const data = await getRideshareData(uploadResult.cid);
    console.log("Retrieved data:", data);
  } catch (error) {
    console.error("Error:", error);
  }
}

// Exécuter le programme
main();
