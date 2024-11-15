"use client";

import { useEffect, useState } from "react";
import { usePrivy } from "@privy-io/react-auth";

const PrivyLoginButton = () => {
  const { ready, authenticated, user, login } = usePrivy();
  const [isLoading, setIsLoading] = useState(false);
  const disableLogin = !ready || (ready && authenticated);

  useEffect(() => {
    console.log("ready", ready);
    console.log("authenticated", authenticated);
    console.log("user", user);
  }, [ready, authenticated, user]);

  const handleLogin = async () => {
    setIsLoading(true);
    try {
      await login();
    } catch (error) {
      console.log("Error logging in", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      className={`flex items-center justify-center gap-1.5 px-6 py-2.5 min-w-32 min-h-12 rounded-xl font-medium cursor-pointer select-none
        `}
      onClick={handleLogin}
      disabled={disableLogin || isLoading}
    >
      {isLoading ? (
        <div className="w-[30px] h-[30px] relative mx-[5px]">
          <div className="w-[5px] h-[5px] rounded-full bg-gray-600 absolute left-0 top-1/2 -translate-y-1/2 animate-loader-dot-1"></div>
          <div className="w-[5px] h-[5px] rounded-full bg-gray-600 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 animate-loader-dot-2"></div>
          <div className="w-[5px] h-[5px] rounded-full bg-gray-600 absolute right-0 top-1/2 -translate-y-1/2 animate-loader-dot-3"></div>
        </div>
      ) : (
        <>Login</>
      )}

      <style>
        {`
    @keyframes loader-dot-1 {
      0%, 100% { transform: translateY(-50%); }
      20% { transform: translateY(0%); }
      40% { transform: translateY(100%); }
      60%, 80% { transform: translateY(-50%); }
    }

    @keyframes loader-dot-2 {
      0%, 100% { transform: translate(-50%, -50%); }
      20%, 80% { transform: translate(-50%, -50%); }
      40% { transform: translate(-50%, 0%); }
      60% { transform: translate(-50%, 100%); }
    }

    @keyframes loader-dot-3 {
      0%, 100% { transform: translateY(-50%); }
      20%, 40% { transform: translateY(-50%); }
      60% { transform: translateY(0%); }
      80% { transform: translateY(100%); }
    }

    .animate-loader-dot-1 {
      animation: loader-dot-1 1s infinite linear;
    }

    .animate-loader-dot-2 {
      animation: loader-dot-2 1s infinite linear;
    }

    .animate-loader-dot-3 {
      animation: loader-dot-3 1s infinite linear;
    }
  `}
      </style>
    </button>
  );
};

export default PrivyLoginButton;
