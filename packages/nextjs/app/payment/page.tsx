"use client";

import React, { useEffect, useState } from "react";
import { usePrivy } from "@privy-io/react-auth";
import { useWallets } from "@privy-io/react-auth";
// import { CurrencyModal } from "./components/CurrencyModal";
import { ethers } from "ethers";
import { Calendar, CreditCard, MapPin, MessageCircle, Share2, Users, Wallet } from "lucide-react";
import type { NextPage } from "next";
import { WalletClient, createWalletClient, custom } from "viem";
import { encodeFunctionData, erc20Abi, parseEther } from "viem";
import { gnosisChiado } from "viem/chains";
import { useWriteContract } from "wagmi";
import { Button } from "~~/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "~~/components/ui/card";
import { Input } from "~~/components/ui/input";
import { DELAY_MOD_ABI } from "~~/utils/gnosis/abi-delay-module";

// Define the Ride type
type Ride = {
  id: number;
  driver: string;
  price: number;
  telegramHandle: string;
};

// PaymentMethod enum 정의
enum PaymentMethod {
  Wallet = "wallet",
  Gnosis = "gnosis",
}

const delay = (timeout: number = 10000): Promise<void> => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};

const createUnsignedErc20Tx = (to: string, value: bigint) => {
  const data = encodeFunctionData({
    abi: erc20Abi,
    functionName: "transfer",
    args: [to, value],
  });
  console.log("UnsignedTXData", data);
  return data;
};

const chainIds = [
  { id: 44787, name: "alfajores" }, //0xaef3
  { id: 10200, name: "chiado" }, //0x27d8
  { id: 48899, name: "zircuit" }, //0xbf03
  { id: 11155111, name: "sepolia" }, //0xaa36a7
  { id: 5003, name: "mantle" }, //5003
  { id: 534351, name: "scroll" }, //0x8274f
];

const Payment: NextPage = () => {
  const { ready, authenticated, user } = usePrivy();
  const { ready: readyWallets, wallets } = useWallets();
  const [, setProvider] = useState<WalletClient | null>(null);
  const [, setSigner] = useState<string | null>(null);

  const [delayModAddress] = useState("0x658aAF7A92f6051B49db9262F729C93D5740534a");

  const { data: queueData, error: queueError, writeContract: queueWriteContract } = useWriteContract();

  const { data: execData, error: execError, writeContract: execWriteContract } = useWriteContract();

  const [erc20Address] = useState("0xDD6Ff5F2f0A5a2e3dB5a71D2B359fFEC21Beef7C");
  const [recipientAddress] = useState("0xA94632B98BeeCe087d04beaC87C084aB345ff7b8"); // change it to driver's address

  console.log("queueData:", queueData);
  console.log("queueError:", queueError);
  console.log("queueWriteContract:", queueWriteContract);

  console.log("execData:", execData);
  console.log("execError:", execError);
  console.log("execWriteContract:", execWriteContract);

  const [selectedChainId, setSelectedChainId] = useState<number>(1);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<PaymentMethod | null>(null);

  const [currentPage, setCurrentPage] = useState(1);
  const [selectedRide, setSelectedRide] = useState<Ride | null>(null);
  const [bookingDetails, setBookingDetails] = useState({
    from: "",
    to: "",
    date: "",
    passengers: 1,
    price: 45.0,
  });
  // const requestData: UnsignedTransactionRequest = {
  //   to: '0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045',
  //   chainId: selectedChainId,
  //   value: '0x3B9ACA00',
  // };

  // const uiConfig: SendTransactionModalUIOptions = {
  //   showWalletUIs: true,
  //   header: "Your tx",
  //   description: "Buy your ride 🚗",
  //   buttonText: "Sample button text",
  // };
  const handleTx = async () => {
    if (selectedPaymentMethod === PaymentMethod.Wallet) {
      if (typeof window.ethereum !== "undefined") {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();

        const tx = {
          to: "0x6dF376Ae2eD8c88D448698e4E1E47395D885800c",
          value: ethers.utils.parseEther(selectedRide?.price.toString() || "0").toHexString(),
          chainId: selectedChainId,
        };

        try {
          const txResponse = await signer.sendTransaction(tx);
          console.log("Transaction sent:", txResponse);
          const receipt = await txResponse.wait();
          console.log("Transaction confirmed:", receipt);
        } catch (error) {
          console.error("Transaction failed:", error);
        }
      } else {
        console.error("MetaMask is not installed");
      }
    } else {
      handlePayButton();
    }
  };

  const handlePayClick = () => {
    if (selectedPaymentMethod) {
      handleTx();
    } else {
      alert("Please select a payment method.");
    }
  };
  const mockRides = [
    {
      id: 1,
      driver: "Aya",
      price: 0.0001, // ETH Convert from eth to usd
      telegramHandle: "@sdaav",
    },
    {
      id: 2,
      driver: "Solene",
      price: 42.5,
      telegramHandle: "@sdaav",
    },
  ];

  const shortAddress = user?.wallet?.address
    ? user.wallet.address.slice(0, 6) + "..." + user.wallet.address.slice(-4)
    : "";

  useEffect(() => {
    const init = async () => {
      if (!authenticated) return;

      if (ready && authenticated && readyWallets && wallets.length > 0) {
        const ethereumProvider = await wallets[0].getEthereumProvider();
        const client = createWalletClient({
          chain: gnosisChiado,
          transport: custom(ethereumProvider),
        });

        setProvider(client);
        setSigner(wallets[0].address);
      }
    };
    init();

    console.log("user.wallet-->", user?.wallet);
  }, [ready, authenticated, readyWallets, wallets, user]);

  const handlePayButton = () => {
    if (selectedPaymentMethod === PaymentMethod.Wallet) {
      // TODO: pay with wallet logic
    } else if (selectedPaymentMethod == PaymentMethod.Gnosis) {
      const handleGnosisPay = async () => {
        try {
          const amount = parseEther("0.0001");
          const unsignedTxData = createUnsignedErc20Tx(recipientAddress, amount);

          await queueWriteContract({
            address: delayModAddress,
            abi: DELAY_MOD_ABI,
            functionName: "execTransactionFromModule",
            args: [erc20Address, 0, unsignedTxData, 0],
          });

          await delay();

          await execWriteContract({
            address: delayModAddress,
            abi: DELAY_MOD_ABI,
            functionName: "executeNextTx",
            args: [erc20Address, 0, unsignedTxData, 0],
          });

          setCurrentPage(5);
        } catch (error) {
          console.error("Error:", error);
        }
      };
      handleGnosisPay();
    }
  };

  const renderSearchPage = () => (
    <div className="space-y-6 bg-white">
      <CardHeader className="bg-purple-600 text-white rounded-t-lg">
        <CardTitle>Search a Ride</CardTitle>
      </CardHeader>
      <CardContent className="bg-white">
        <div className="space-y-4">
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-purple-600">
              <MapPin className="w-4 h-4" />
              From
            </label>
            <Input
              placeholder="Enter pickup location"
              className="w-full border-purple-200 focus:border-purple-400 focus:ring-purple-400"
            />
            <Button variant="outline" className="w-full border-purple-200 text-purple-600 hover:bg-purple-50">
              Use Current Location
            </Button>
          </div>

          <div className="space-y-2">
            <label className="flex items-center gap-2 text-purple-600">
              <MapPin className="w-4 h-4" />
              To
            </label>
            <Input
              placeholder="Enter destination"
              className="w-full border-purple-200 focus:border-purple-400 focus:ring-purple-400"
            />
          </div>

          <div className="space-y-2">
            <label className="flex items-center gap-2 text-purple-600">
              <Calendar className="w-4 h-4" />
              Date
            </label>
            <Input type="date" className="w-full border-purple-200 focus:border-purple-400 focus:ring-purple-400" />
          </div>

          <div className="space-y-2">
            <label className="flex items-center gap-2 text-purple-600">
              <Users className="w-4 h-4" />
              Passengers
            </label>
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                className="border-purple-200 text-purple-600 hover:bg-purple-50"
                onClick={() =>
                  setBookingDetails(prev => ({
                    ...prev,
                    passengers: Math.max(1, prev.passengers - 1),
                  }))
                }
              >
                -
              </Button>
              <span className="text-purple-600">{bookingDetails.passengers}</span>
              <Button
                variant="outline"
                className="border-purple-200 text-purple-600 hover:bg-purple-50"
                onClick={() =>
                  setBookingDetails(prev => ({
                    ...prev,
                    passengers: prev.passengers + 1,
                  }))
                }
              >
                +
              </Button>
            </div>
          </div>

          <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white" onClick={() => setCurrentPage(2)}>
            Search Rides
          </Button>
        </div>
      </CardContent>
    </div>
  );

  const renderRideSelectionPage = () => (
    <div className="space-y-6 bg-white">
      <CardHeader className="bg-purple-600 text-white rounded-t-lg">
        <CardTitle>Available Rides</CardTitle>
        <p className="text-purple-100">{bookingDetails.date || "Select a date"}</p>
      </CardHeader>
      <CardContent className="bg-white">
        <div className="space-y-4">
          {mockRides.map(ride => (
            <Card
              key={ride.id}
              className="cursor-pointer hover:bg-purple-50 border-purple-200"
              onClick={() => {
                setSelectedRide(ride as Ride);
                setCurrentPage(3);
              }}
            >
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Users className="w-10 h-10 rounded-full text-gray-500" />
                    <div>
                      <p className="font-medium text-purple-600">{ride.driver}</p>
                      <p className="text-sm text-purple-400">
                        {bookingDetails.from} → {bookingDetails.to}
                      </p>
                    </div>
                  </div>
                  <p className="font-bold text-purple-600">{ride.price.toFixed(5)} ETH</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </div>
  );

  const renderRecapPage = () => (
    <div className="space-y-6 bg-white">
      <CardHeader className="bg-purple-600 text-white rounded-t-lg">
        <CardTitle>Trip Summary</CardTitle>
      </CardHeader>
      <CardContent className="bg-white">
        <Card className="mb-6 border-purple-200">
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-4">
                <Users className="w-10 h-10 rounded-full text-gray-500" />
                <div>
                  <p className="font-medium text-purple-600">{selectedRide?.driver}</p>
                  <p className="text-sm text-purple-400">
                    {bookingDetails.from} → {bookingDetails.to}
                  </p>
                </div>
              </div>
              <p className="font-bold text-purple-600">{selectedRide?.price.toFixed(5)} ETH</p>
            </div>
            <Button
              variant="outline"
              className="w-full mb-4 border-purple-200 text-purple-600 hover:bg-purple-50"
              onClick={() => window.open(`https://t.me/${selectedRide?.telegramHandle.slice(1)}`)}
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Message Driver
            </Button>
            <Button
              variant="outline"
              className="w-full border-purple-200 text-purple-600 hover:bg-purple-50"
              onClick={() => {
                /* Share functionality */
              }}
            >
              <Share2 className="w-4 h-4 mr-2" />
              Share Trip
            </Button>
          </CardContent>
        </Card>
        <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white" onClick={() => setCurrentPage(4)}>
          Request Booking
        </Button>
      </CardContent>
    </div>
  );

  const renderPaymentPage = () => (
    <div className="space-y-6 bg-white">
      <CardHeader className="bg-purple-600 text-white rounded-t-lg">
        <CardTitle>Select Payment Method</CardTitle>
        <p className="text-purple-100">You will be reimbursed if the driver won&apos;t accept your request.</p>
      </CardHeader>
      <CardContent className="bg-white">
        <div className="space-y-4">
          <Button
            className={`w-full border-2 ${selectedPaymentMethod === PaymentMethod.Wallet ? "border-purple-600" : "border-purple-200"} text-purple-600 hover:bg-purple-50 flex items-center`}
            onClick={() => setSelectedPaymentMethod(PaymentMethod.Wallet)}
          >
            <Wallet className="w-4 h-4 mr-2" />
            <span>
              Pay with Wallet <span className="text-sm text-purple-400">({shortAddress})</span>
            </span>
          </Button>
          <Button
            className={`w-full border-2 ${selectedPaymentMethod === PaymentMethod.Gnosis ? "border-purple-600" : "border-purple-200"} text-purple-600 hover:bg-purple-50 flex items-center`}
            onClick={() => setSelectedPaymentMethod(PaymentMethod.Gnosis)}
          >
            <CreditCard className="w-4 h-4 mr-2" />
            Pay with Gnosis Pay
          </Button>

          <div className="mt-6">
            <label htmlFor="chainId" className="block text-sm font-medium text-gray-700">
              Select Chain ID
            </label>
            <select
              id="chainId"
              name="chainId"
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
              value={selectedChainId}
              onChange={e => setSelectedChainId(Number(e.target.value))}
            >
              {chainIds.map(chain => (
                <option key={chain.id} value={chain.id}>
                  {chain.name}
                </option>
              ))}
            </select>

            <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white mt-4" onClick={handlePayClick}>
              Pay {selectedRide?.price.toFixed(5)} ETH
            </Button>
            {/* <CurrencyModal
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
              onSelectCurrency={handleSelectCurrency}
            /> */}
          </div>
        </div>
      </CardContent>
    </div>
  );

  const renderConfirmationPage = () => (
    <div className="space-y-6 bg-white">
      <CardHeader className="bg-purple-600 text-white rounded-t-lg">
        <CardTitle>Booking Confirmed!</CardTitle>
      </CardHeader>
      <CardContent className="bg-white">
        <Card className="mb-6 border-purple-200">
          <CardContent className="p-4">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Users className="w-10 h-10 rounded-full text-gray-500" />
                <div>
                  <p className="font-medium text-purple-600">{selectedRide?.driver}</p>
                  <p className="text-sm text-purple-400">
                    {bookingDetails.from} → {bookingDetails.to}
                  </p>
                </div>
              </div>
              <Button
                className="w-full bg-purple-600 hover:bg-purple-700 text-white"
                onClick={() => {
                  window.open("https://t.me/+gmUqS53O0o8xMjJk", "_blank");
                }}
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Join Telegram Group
              </Button>
            </div>
          </CardContent>
        </Card>
      </CardContent>
    </div>
  );

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 1:
        return renderSearchPage();
      case 2:
        return renderRideSelectionPage();
      case 3:
        return renderRecapPage();
      case 4:
        return renderPaymentPage();
      case 5:
        return renderConfirmationPage();
      default:
        return null;
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-purple-50 min-h-screen">
      <Card className="border-purple-200">{renderCurrentPage()}</Card>
    </div>
  );
};

export default Payment;
