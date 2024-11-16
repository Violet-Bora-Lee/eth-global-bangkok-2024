import { useEffect, useState } from "react";
import * as LitJsSdk from "@lit-protocol/lit-node-client";
import { LitNetwork } from "@lit-protocol/constants";
import {
  SignProtocolClient,
  SpMode,
  EvmChains,
  IndexService,
  decodeOnChainData,
  DataLocationOnChain,
  SchemaItem
} from "@ethsign/sp-sdk";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount, useChainId } from "wagmi";

export default function Home() {
  const [tripDetails, handleTripDetails] = useState("");
  const [attId, handleAttId] = useState("");
  const [result, handleResult] = useState("");
  const [litNodeClient, handleLitNodeClient] = useState<LitJsSdk.LitNodeClient>();

  const { address } = useAccount();
  const chainId = useChainId();
  const schemaId = "0x300";  

  const connect = async () => {
    const lnc = new LitJsSdk.LitNodeClient({
      litNetwork: LitNetwork.DatilDev
    });
    handleLitNodeClient(lnc);
    await lnc.connect();
  };

  useEffect(() => {
    connect();
    return () => {
      if (litNodeClient) litNodeClient.disconnect();
    };
  }, []);

  
  const encrypt = async (message: string) => {
    if (!litNodeClient) {
      return {
        ciphertext: null,
        dataToEncryptHash: null
      };
    }

    
    const accessControlConditions = [
      {
        contractAddress: "",
        standardContractType: "",
        chain: "ethereum",
        method: "eth_getBalance",
        parameters: [":userAddress", "latest"],
        returnValueTest: {
          comparator: ">=",
          value: "1000000000000" 
        }
      }
    ];

  
    const { ciphertext, dataToEncryptHash } = await LitJsSdk.encryptString(
      {
        accessControlConditions,
        dataToEncrypt: message
      },
      litNodeClient
    );

    return { ciphertext, dataToEncryptHash };
  };

  return (
    <div>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <ConnectButton />

        <input
          id="tripDetails"
          placeholder="Enter Trip Details (Itinerary, Locations)"
          value={tripDetails}
          onChange={(e) => handleTripDetails(e.target.value)}
        />
        <button
          onClick={async () => {
            const { ciphertext, dataToEncryptHash } = await encrypt(tripDetails);
            if (ciphertext && dataToEncryptHash) {
              const client = new SignProtocolClient(SpMode.OnChain, {
                chain: EvmChains.baseSepolia
              });

              const res = await client.createAttestation({
                schemaId: schemaId,
                data: {
                  ciphertext,
                  dataToEncryptHash
                },
                indexingValue: address?.toLowerCase() ?? ""
              });
              handleResult(JSON.stringify(res)); // Display attestation result
            }
          }}
        >
          Encrypt & Create Attestation
        </button>

        <input
          id="attId"
          placeholder="Attestation ID"
          value={attId}
          onChange={(e) => handleAttId(e.target.value)}
        />
        <button
          onClick={async () => {
            const indexingClient = new IndexService("testnet");
            const att = await indexingClient.queryAttestation(`onchain_evm_${chainId}_${attId}`);

            if (att) {
              const data = decodeOnChainData(att.data, DataLocationOnChain.ONCHAIN, att.schema.data as SchemaItem[]);

              
              fetch("http://localhost:8080/lit", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
              })
                .then((res) => res.json())
                .then((result) => handleResult(JSON.stringify(result)));
            }
          }}
        >
          Decrypt & Retrieve Data
        </button>

        <p className="break-all">{result}</p>
      </main>
    </div>
  );
}
