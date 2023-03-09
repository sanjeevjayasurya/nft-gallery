import { useState, useEffect } from "react";
import { ethers } from "ethers";
import { useRouter } from "next/router";
import NFTCard from "../../components/NFTCard";
import { AlchemyProvider } from "../../utils/AlchemyProvider";
const products = [
  {
    id: 1,
    name: "Basic Tee 8-Pack",
    href: "#",
    price: "$256",
    description:
      "Get the full lineup of our Basic Tees. Have a fresh shirt all week, and an extra for laundry day.",
    options: "8 colors",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-01.jpg",
    imageAlt:
      "Eight shirts arranged on table in black, olive, grey, blue, white, red, mustard, and green.",
  },
  {
    id: 2,
    name: "Basic Tee",
    href: "#",
    price: "$32",
    description:
      "Look like a visionary CEO and wear the same black t-shirt every day.",
    options: "Black",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-02.jpg",
    imageAlt: "Front of plain black t-shirt.",
  },
  // More products...
];

export default function AddressPage({ nfts = null, ensName = null }) {
  const router = useRouter();
  const { address } = router.query;
  console.log(ensName);
  return (
    <div className="pt-32">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>
        <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
          {nfts.map((nft) => (
            <NFTCard key={nft?.id?.token} nft={nft} />
          ))}
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { address } = context.params;
  const API_KEY = process.env.NEXT_PUBLIC_ALCHEMY_API_KEY;
  const BASE_URL = `https://eth-mainnet.alchemyapi.io/v2/${API_KEY}/getNFTs/`;
  const response = await fetch(`${BASE_URL}?owner=${address}`);
  const walletAddress = await AlchemyProvider.resolveName(address);
  const ensName = await AlchemyProvider.lookupAddress(address);
  const data = await response.json();
  const nfts = data.ownedNfts;

  return {
    props: { nfts, ensName, walletAddress },
  };
}
