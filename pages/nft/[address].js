import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import NFTCard from "../components/NFTCard";

export default function AddressPage({ nfts }) {
  const router = useRouter();
  const { address } = router.query;

  return (
    <div className="grid grid-cols-3 gap-4">
      {nfts.map((nft) => (
        <NFTCard key={nft.id.tokenId} nft={nft} />
      ))}
    </div>
  );
}

export async function getServerSideProps(context) {
  const { address } = context.params;
  const API_KEY = process.env.NEXT_PUBLIC_ALCHEMY_API_KEY;
  const BASE_URL = `https://eth-mainnet.alchemyapi.io/v2/${API_KEY}/getNFTs/`;
  const response = await fetch(`${BASE_URL}?owner=${address}`);
  const data = await response.json();
  const nfts = data.ownedNfts;

  return {
    props: { nfts },
  };
}
