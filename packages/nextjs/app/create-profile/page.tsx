"use client";

import React from "react";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen h-screen bg-purple-400 ">
      <div className="container_custom bg-white w-full flex flex-col h-full relative">
        <div className="h-dvh">
          <div className="flex w-full h-full flex-col items-center justify-center space-y-20">
            <div className="flex flex-col space-y-2 text-center px-6">
              <h1 className="text-4xl font-bold">Create Profile</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
