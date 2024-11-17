"use client";

import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { ZkPassportButton } from "../(home)/components/ZkPassportButton";
import { Check, Upload } from "lucide-react";
import type { NextPage } from "next";
import { Button } from "~~/components/ui/button";
import { Input } from "~~/components/ui/input";

const Profile: NextPage = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        router.push("/dashboard");
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [router]);

  const [formData, setFormData] = useState({
    name: "",
    birthday: "",
    gender: "",
    licenseVerified: false,
    zkPassportVerified: false,
    price: 0,
    licenseFileName: "",
  });

  interface FileUploadEvent extends React.ChangeEvent<HTMLInputElement> {
    target: HTMLInputElement & { files: FileList };
  }

  const handleFileUpload = (event: FileUploadEvent): void => {
    const file = event.target.files[0];
    if (file) {
      if (file.type === "application/pdf") {
        // Simulate file upload and verification process
        setFormData(prev => ({
          ...prev,
          licenseFileName: file.name,
          licenseVerified: true,
        }));
      } else {
        alert("Please upload a PDF file");
      }
    }
  };

  const renderLicenseButton = () => {
    if (formData.licenseVerified) {
      return (
        <Button className="w-full bg-green-600 hover:bg-green-700 flex items-center justify-center" disabled>
          <Check className="mr-2 h-4 w-4" />
          License Verified ({formData.licenseFileName})
        </Button>
      );
    }

    return (
      <>
        <input type="file" accept=".pdf" ref={fileInputRef} onChange={handleFileUpload} className="hidden" />
        <Button className="w-full bg-purple-600 hover:bg-purple-700" onClick={() => fileInputRef.current?.click()}>
          <Upload className="mr-2 h-4 w-4" /> Upload Driver License (PDF)
        </Button>
      </>
    );
  };

  return (
    <div className="flex justify-center items-center min-h-screen h-screen">
      <div className="container_custom bg-purple-50 w-full flex flex-col h-full relative">
        <div className="h-dvh">
          <div className="flex w-full h-full flex-col items-center justify-center space-y-4">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-purple-800">Driver Profile</h2>
              <div className="space-y-4">
                <Input type="text" placeholder="Full Name" className="w-full p-2 border rounded" />
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Birthday (Must be 18 or older)</label>
                  <Input
                    type="date"
                    className="w-full p-2 border rounded"
                    max={new Date(new Date().setFullYear(new Date().getFullYear() - 18)).toISOString().split("T")[0]}
                  />
                </div>
                <select className="w-full p-2 border rounded bg-white">
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>

                <div className="space-y-4">
                  {renderLicenseButton()}
                  {!formData.licenseVerified && (
                    <>
                      <div className="text-center">or</div>
                      <Button className="w-full bg-purple-600 hover:bg-purple-700">
                        <ZkPassportButton />
                      </Button>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
