import React, { useEffect, useState } from "react";
import { Modal } from "./Modal";
import { QRCodeSVG } from "qrcode.react";
import { ZkPassport } from "zkpassport-sdk";

type ProofResult = {
  firstname: string;
  proof: any;
  queryResult: any;
  verificationKey: any;
  nationality: string;
};

export const ZkPassportButton = () => {
  const [qrCodeUrl, setQrCodeUrl] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [proofResult, setProofResult] = useState<any>(null);

  const [error, setError] = useState(false);
  const [userRejected, setUserRejected] = useState(false);

  useEffect(() => {
    console.log("urk is", qrCodeUrl);
    setQrCodeUrl(qrCodeUrl);
  }, [qrCodeUrl]);

  function generateQRCode(url: string) {
    setQrCodeUrl(url);
    setIsModalOpen(true);
  }

  const redirectToZKPassport = (url: string) => {
    window.open(url, "_blank");
  };
  const handleZkPassport = async () => {
    setIsModalOpen(true);

    // modifie l'url pour avoir la prod et non le localhost
    const zkPassport = new ZkPassport("https://eth-global-bangkok-2024-nextjs.vercel.app/");

    // user's query to the passeport
    const queryBuilder = await zkPassport.request({
      name: "Rollin'pool",
      logo: "",
      purpose: "Proof of country and first name to connect to the Rollin'pool app",
    });

    // decomposition of the query response onQRCodeScanned
    const { url, onProofGenerated, onReject, onError } = queryBuilder
      .disclose("nationality")
      .disclose("firstname")
      .done();

    generateQRCode(url);

    onReject(() => {
      setUserRejected(true);
      console.log("User rejected the request");
    });

    onError((error: any) => {
      setError(error);
      console.log("An error occurred", error);
    });

    // onQRCodeScanned(() => {
    //   // The user scanned the QR code or clicked the button
    //   // Essentially, this means the request popup is now opened
    //   // on the user phone
    //   console.log("QR code scanned");
    // });

    onProofGenerated((proof: ProofResult) => {
      // The proof has been generated
      // You can retrieve the proof, the verification key and the result of your query
      // Note: the verify function will soon be added to the SDK so you can verify the proof
      // directly
      console.log("Proof", proof.proof);
      console.log("Verification key", proof.verificationKey);
      console.log("Query result", proof.queryResult);
      console.log("firstname", proof.queryResult.firstname.disclose.result);
      console.log("nationality", proof.queryResult.nationality.disclose.result);
      setProofResult(proof);
    });
  };

  return (
    <div>
      <button
        className={`flex items-center justify-center gap-1.5 px-6 py-2.5 min-w-32 min-h-12 rounded-xl font-medium cursor-pointer select-none
        `}
        onClick={handleZkPassport}
      >
        Connect with ZkPassport
      </button>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <button
          className="text-gray-500 hover:text-gray-700 flex items-center justify-center"
          onClick={() => setIsModalOpen(false)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        <div className="flex items-center justify-between space-x-4">
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-4">Scan the QR Code</h3>
            {qrCodeUrl && <QRCodeSVG value={qrCodeUrl} />}
          </div>
          <h3 className="text-lg font-semibold mb-4">or</h3>

          <div className="flex flex-col items-center">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
              onClick={() => redirectToZKPassport(qrCodeUrl)}
            >
              Go directly to zk Passport
            </button>
          </div>
          {userRejected && <p>User have rejected the request</p>}
          {error && <p>They is an error {error}</p>}

          {proofResult && (
            <div>
              <h3>Proof Result</h3>
              <p>First Name: {proofResult.firstname.disclose.result}</p>
              <p>Nationality: {proofResult.nationality.disclose.result}</p>
            </div>
          )}
        </div>
      </Modal>

      {/* {onQRCodeScanned && <></>} */}
    </div>
  );
};
