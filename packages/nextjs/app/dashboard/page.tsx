"use client";

import React, { useState } from "react";
import { Check, CircleDollarSign, Clock, MapPin, MessageCircle, Pencil, Star, Users, XCircle } from "lucide-react";
import type { NextPage } from "next";
import { Button } from "~~/components/ui/button";
import { Card, CardContent } from "~~/components/ui/card";
import { Input } from "~~/components/ui/input";

const Dashboard: NextPage = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const [formData, setFormData] = useState({
    name: "",
    birthday: "",
    gender: "",
    licenseVerified: false,
    zkPassportVerified: false,
    price: 0,
    licenseFileName: "",
  });

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-purple-800">Select Departure Point</h2>
            <p className="text-gray-600 mb-4">Paris, France</p>
            {renderMap("paris")}
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-purple-800">Select Pickup Point</h2>
            <p className="text-gray-600 mb-4">Eiffel Tower, Paris</p>
            {renderMap("eiffel")}
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-purple-800">Select Final Destination</h2>
            <p className="text-gray-600 mb-4">Marseille, France</p>
            {renderMap("marseille")}
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-purple-800">Add Drop-off Locations</h2>
            <div className="space-y-4">
              <Input type="text" placeholder="Search cities..." className="w-full p-2 border rounded" />
              <div className="bg-purple-50 p-4 rounded-lg">
                <p className="text-sm text-purple-600">Cities between Paris and Marseille:</p>
                <div className="mt-2 space-y-2">
                  {["Lyon", "Dijon", "Avignon"].map(city => (
                    <div key={city} className="flex items-center p-2 bg-white rounded">
                      <MapPin className="h-4 w-4 text-purple-600 mr-2" />
                      <span>{city}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-purple-800">Select Trip Date</h2>
            <Input type="date" className="w-full p-2 border rounded" min={new Date().toISOString().split("T")[0]} />
          </div>
        );

      case 6:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-purple-800">Trip Details</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Clock className="h-5 w-5 text-purple-600" />
                <Input type="time" className="flex-1" />
              </div>
              <div className="flex items-center space-x-4">
                <Users className="h-5 w-5 text-purple-600" />
                <select className="flex-1 p-2 border rounded bg-white">
                  {[1, 2, 3, 4].map(n => (
                    <option key={n} value={n}>
                      {n} passenger(s)
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        );

      case 7:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-purple-800">Set Your Price</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <CircleDollarSign className="h-5 w-5 text-purple-600" />
                <Input
                  type="number"
                  placeholder="Enter price"
                  className="flex-1"
                  value={formData.price}
                  onChange={e => setFormData({ ...formData, price: Number(e.target.value) })}
                />
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <p className="text-sm text-purple-600">Suggested price range:</p>
                <p className="font-bold">€45 - €60</p>
              </div>
              <Button
                className="w-full bg-purple-600 hover:bg-purple-700"
                onClick={() => setCurrentStep(currentStep + 1)}
              >
                Post the Ride
              </Button>
            </div>
          </div>
        );

      case 8:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-purple-800">Ride Summary</h2>
            <Card className="bg-white">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-200 rounded-full overflow-hidden">
                    <img src="/api/placeholder/48/48" alt="Aya's profile" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center">
                      <h3 className="font-bold">Aya</h3>
                      <Check className="h-4 w-4 text-green-500 ml-2" />
                      <div className="ml-2 flex">
                        {[1, 2, 3, 4, 5].map(n => (
                          <Star key={n} className="h-4 w-4 text-yellow-400" fill="currentColor" />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-600">Paris → Marseille</p>
                    <p className="font-bold mt-2">€50</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case 9:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-purple-800">Manage Ride</h2>
            <div className="space-y-4">
              <Button className="w-full bg-purple-600 hover:bg-purple-700">
                <MessageCircle className="mr-2 h-4 w-4" /> Create Telegram Group
              </Button>
              <Button className="w-full bg-white border-2 border-purple-600 text-purple-600 hover:bg-purple-50">
                <Pencil className="mr-2 h-4 w-4" /> Modify Ride
              </Button>
              <Button className="w-full bg-white border-2 border-red-600 text-red-600 hover:bg-red-50">
                <XCircle className="mr-2 h-4 w-4" /> Cancel Ride
              </Button>
            </div>
          </div>
        );
    }
  };

  const renderMap = (location: string): JSX.Element => {
    let center: [number, number];
    switch (location) {
      case "paris":
        center = [48.8566, 2.3522];
        break;
      case "eiffel":
        center = [48.8584, 2.2945];
        break;
      case "marseille":
        center = [43.2965, 5.3698];
        break;
      default:
        center = [48.8566, 2.3522];
    }

    return (
      <div className="w-full h-64 rounded-lg overflow-hidden">
        <iframe
          className="w-full h-full border-0"
          src={`https://www.openstreetmap.org/export/embed.html?bbox=${center[1] - 0.02},${center[0] - 0.02},${center[1] + 0.02},${center[0] + 0.02}&layer=mapnik&marker=${center[0]},${center[1]}`}
        />
      </div>
    );
  };

  return (
    <div className="flex justify-center items-center min-h-screen h-screen">
      <div className="container_custom bg-purple-50 w-full flex flex-col h-full relative">
        <div className="h-dvh">
          <div className="min-h-screen bg-purple-50">
            <div className="max-w-md mx-auto p-6">
              {renderStep()}

              <div className="mt-8 flex justify-between">
                <Button
                  onClick={() => setCurrentStep(currentStep - 1)}
                  className="bg-white border-2 border-purple-600 text-purple-600 hover:bg-purple-50 rounded-lg px-4 py-2 shadow-md transition duration-300 ease-in-out transform hover:scale-105 w-2/5"
                  disabled={currentStep === 1}
                >
                  Previous
                </Button>
                <Button
                  onClick={() => setCurrentStep(currentStep + 1)}
                  className="bg-purple-600 text-white hover:bg-purple-700 rounded-lg px-4 py-2 shadow-md transition duration-300 ease-in-out transform hover:scale-105 ml-auto w-2/5"
                  disabled={currentStep === 9}
                >
                  Next
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
