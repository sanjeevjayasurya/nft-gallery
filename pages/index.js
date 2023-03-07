import { useState } from "react";
import Head from "next/head";
import NFTCard from "./components/NFTCard";
import NFTModal from "./components/NFTModal";
import { ethers } from "ethers";

function isValidAddress(address) {
  return ethers.isAddress(address);
}

export default function NFTs() {
  const [walletAddress, setWalletAddress] = useState("");
  const [nFTs, setNFTs] = useState([]);
  const [selectedNFT, setSelectedNFT] = useState(null);
  const API_KEY = process.env.NEXT_PUBLIC_ALCHEMY_API_KEY;

  const fetchNFTs = async () => {
    let nfts;
    const baseURL = `https://eth-mainnet.alchemyapi.io/v2/${API_KEY}/getNFTs/`;
    const requestOptions = {
      method: "GET",
    };
    const fetchURL = `${baseURL}?owner=${walletAddress}`;
    nfts = await fetch(fetchURL, requestOptions).then((data) => data.json());
    setNFTs(nfts);
    console.log(nFTs);
  };

  const handleNFTClick = (nft) => {
    setSelectedNFT(nft);
  };

  const handleCloseModal = () => {
    setSelectedNFT(null);
  };

  return (
    <>
      <Head>
        <title>NFTs for {walletAddress}</title>
        <meta name="description" content={`NFTs owned by ${walletAddress}`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container mx-auto">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (isValidAddress(walletAddress)) fetchNFTs();
            else console.log("Invalid address");
          }}
        >
          <input
            value={walletAddress}
            onChange={(e) => setWalletAddress(e.target.value)}
          />
          <input type="submit" value="Submit" />
        </form>

        <h1 className="text-2xl font-bold mb-8">NFTs for {walletAddress}</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {nFTs?.ownedNfts?.map((nft) => (
            <NFTCard key={nft.id} nft={nft} onClick={handleNFTClick} />
          ))}
        </div>

        {selectedNFT && (
          <NFTModal nft={selectedNFT} onClose={handleCloseModal} />
        )}
      </div>
    </>
  );
}

// export async function getServerSideProps({ params }) {
//   return {
//     props: {
//       address: params.address,
//     },
//   }
// }
