import { useEffect, useState } from "react";
import Head from "next/head";
import NFTCard from "./components/NFTCard";
import NFTModal from "./components/NFTModal";
import SearchBox from "./components/Searchbox";
import { useQuery } from "@tanstack/react-query";

const API_KEY = process.env.NEXT_PUBLIC_ALCHEMY_API_KEY;
const baseUrl = `https://eth-mainnet.alchemyapi.io/v2/${API_KEY}/getNFTs/`;

export default function NFTs() {
  const [walletAddress, setWalletAddress] = useState("");
  const [selectedNFT, setSelectedNFT] = useState(null);

  const fetchNFTs = async () => {
    const fetchURL = `${baseUrl}?owner=${walletAddress}`;
    const requestOptions = {
      method: "GET"
    };
    const getNFTs = await fetch(fetchURL, requestOptions).then((data) =>
      data.json()
    );
    return getNFTs;
  };

  const nftData = useQuery(["fetchNFTs"], fetchNFTs, {
    enabled: false,
    refetchOnWindowFocus: false,
    retry: false,
    cacheTime: 0,
  });

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
        <SearchBox
          walletAddress={walletAddress}
          setWalletAddress={setWalletAddress}
          fetchNFT={nftData}
        />
        {nftData.isInitialLoading && <div>Loading ... </div>}
        <h1 className="text-2xl font-bold mb-8">NFTs for {walletAddress}</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {nftData?.data?.ownedNfts.length !== 0 ? (
            nftData?.data?.ownedNfts?.map((nft) => (
              <NFTCard
                key={nft.id.tokenId}
                nft={nft}
                onClick={handleNFTClick}
              />
            ))
          ) : (
            <div>No NFT found</div>
          )}
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
