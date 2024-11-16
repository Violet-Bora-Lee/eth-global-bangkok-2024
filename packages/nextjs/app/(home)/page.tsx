"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { usePrivy } from "@privy-io/react-auth";
import type { NextPage } from "next";
import LoadingAnimation from "~~/components/LoadingAnimation";
import PrivyLoginButton from "~~/components/PrivyLoginButton";
import ZkPassportButton from "~~/components/ZkPassportButton";

const Home: NextPage = () => {
  const { ready, authenticated } = usePrivy();
  const router = useRouter();

  if (authenticated) {
    router.push("/dashboard");
  }

  return (
    <div className="flex justify-center items-center min-h-screen h-screen">
      <div className="container_custom bg-purple-50 w-full flex flex-col h-full relative">
        <div className="h-dvh">
          <div className="flex w-full h-full flex-col items-center justify-center space-y-4">
            <div className="flex flex-col space-y-4 text-center px-6">
              <h1 className="text-4xl font-bold">Rollin&apos;pool</h1>
              {ready && !authenticated ? (
                <div className="font-light text-md">
                  <p>You are not authenticated with Privy</p>
                  <div className="flex w-full flex-col items-center">
                    <div className="flex w-4/5 flex-col px-5">
                      <PrivyLoginButton />
                      <ZkPassportButton />
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-background-white relative top-[-54px] flex h-full flex-col items-center justify-center gap-[68px] px-0 pt-[54px]">
                  <LoadingAnimation />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
