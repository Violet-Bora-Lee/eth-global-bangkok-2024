"use client";

import React, { useEffect, useState } from "react";
import { usePrivy } from "@privy-io/react-auth";
import { useWallets } from "@privy-io/react-auth";
import { Calendar, CreditCard, MapPin, MessageCircle, Share2, Users, Wallet } from "lucide-react";
import type { NextPage } from "next";
import { WalletClient, createWalletClient, custom } from "viem";
import { sepolia } from "viem/chains";
import { Button } from "~~/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "~~/components/ui/card";
import { Input } from "~~/components/ui/input";

// Define the Ride type
type Ride = {
  id: number;
  driver: string;
  price: number;
  telegramHandle: string;
};

const Payment: NextPage = () => {
  const { ready, authenticated } = usePrivy();
  const { ready: readyWallets, wallets } = useWallets();
  const [, setProvider] = useState<WalletClient | null>(null);
  const [, setSigner] = useState<string | null>(null);

  const [currentPage, setCurrentPage] = useState(1);
  const [selectedRide, setSelectedRide] = useState<Ride | null>(null);
  const [bookingDetails, setBookingDetails] = useState({
    from: "",
    to: "",
    date: "",
    passengers: 1,
    price: 45.0,
  });

  const mockRides = [
    {
      id: 1,
      driver: "Aya",
      price: 0.01, // ETH
      telegramHandle: "@sdaav",
    },
    {
      id: 2,
      driver: "Solene",
      price: 42.5,
      telegramHandle: "@sdaav",
    },
  ];

  useEffect(() => {
    const init = async () => {
      if (!authenticated) return;

      if (ready && authenticated && readyWallets && wallets.length > 0) {
        const ethereumProvider = await wallets[0].getEthereumProvider();
        const client = createWalletClient({
          chain: sepolia,
          transport: custom(ethereumProvider),
        });

        setProvider(client);
        setSigner(wallets[0].address);
      }
    };
    init();
  }, [ready, authenticated, readyWallets, wallets]);

  const renderSearchPage = () => (
    <div className="space-y-6">
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
    <div className="space-y-6">
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
                  <p className="font-bold text-purple-600">${ride.price.toFixed(2)}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </div>
  );

  const renderRecapPage = () => (
    <div className="space-y-6">
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
              <p className="font-bold text-purple-600">${selectedRide?.price.toFixed(2)}</p>
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
    <div className="space-y-6">
      <CardHeader className="bg-purple-600 text-white rounded-t-lg">
        <CardTitle>Select Payment Method</CardTitle>
        <p className="text-purple-100">You will be reimbursed if the driver won&apos;t accept your request.</p>
      </CardHeader>
      <CardContent className="bg-white">
        <div className="space-y-4">
          <Button variant="outline" className="w-full border-purple-200 text-purple-600 hover:bg-purple-50">
            <Wallet className="w-4 h-4 mr-2" />
            Connect Metamask Wallet
          </Button>
          <Button variant="outline" className="w-full border-purple-200 text-purple-600 hover:bg-purple-50">
            <CreditCard className="w-4 h-4 mr-2" />
            Pay with Gnosis Pay
          </Button>

          <div className="mt-6">
            <div className="flex items-center gap-2 mb-2">
              <Input
                type="text"
                value={`${selectedRide?.price.toFixed(2)} USD`}
                readOnly
                className="border-purple-200"
              />
              <Button variant="outline" className="border-purple-200 text-purple-600 hover:bg-purple-50">
                USD → ETH
              </Button>
            </div>
            <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white" onClick={() => setCurrentPage(5)}>
              Pay ${selectedRide?.price.toFixed(2)}
            </Button>
          </div>
        </div>
      </CardContent>
    </div>
  );

  const renderConfirmationPage = () => (
    <div className="space-y-6">
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
                  /* Join Telegram group */
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
