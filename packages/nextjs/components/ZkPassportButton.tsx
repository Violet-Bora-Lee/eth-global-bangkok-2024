import React from "react";
// import QRCode from "qrcode.react";
import { ZkPassport } from "zkpassport-sdk";

const ZkPassportButton: React.FC = () => {
  // const [qrCodeUrl, setQrCodeUrl] = useState<string | null>(null);

  const handleZkPassport = async () => {
    const zkPassport = new ZkPassport("demo.zkpassport_ROLLIIN.id");
    // Specify your app name, logo and the purpose of the request
    // you'll send to your visitors or users
    const queryBuilder = await zkPassport.request({
      name: "Rollin'pool",
      logo: "",
      purpose: "Proof of country and first name to connect to the Rollin'pool app",
    });

    // Specify the data you want to disclose
    // Then you can call the `done` method to get the url and the callbacks to follow the progress
    // and get back the result along with the proof
    // onGeneratingProof, requestId, isQRCodeScanned, url
    const { onQRCodeScanned, onProofGenerated, onReject, onError } = queryBuilder
      .disclose("nationality")
      .disclose("firstname")
      .done();

    // Set the QR code URL to be displayed
    // setQrCodeUrl(url);

    onQRCodeScanned(() => {
      // The user scanned the QR code or clicked the button
      // Essentially, this means the request popup is now opened
      // on the user phone
      console.log("QR code scanned");
    });

    onProofGenerated((result: any) => {
      // The proof has been generated
      // You can retrieve the proof, the verification key and the result of your query
      // Note: the verify function will soon be added to the SDK so you can verify the proof
      // directly
      console.log("Proof", result.proof);
      console.log("Verification key", result.verificationKey);
      console.log("Query result", result.queryResult);
      console.log("firstname", result.queryResult.firstname.disclose.result);
      console.log("nationality", result.queryResult.nationality.disclose.result);
    });

    onReject(() => {
      console.log("Request was rejected by the user");
    });

    onError((error: any) => {
      console.error("An error occurred", error);
    });
  };

  return (
    <div>
      <button onClick={handleZkPassport}>Connect with ZkPassport</button>
      {/* {qrCodeUrl && (
        <div>
          <h3>Scan the QR Code</h3>
          <QRCode value={qrCodeUrl} />
        </div>
      )} */}
    </div>
  );
};

export default ZkPassportButton;
