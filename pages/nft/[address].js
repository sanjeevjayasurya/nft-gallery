import NFTCard from "../../components/NFTCard";
import EmptyState from "../../components/EmptyState";
import Link from "next/link";

export default function AddressPage({ nfts = null, ensName = null }) {
  return (
    <div className="pt-16">
      <Link
        href="/"
        className="float-right items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
      >
        <span aria-hidden="true">&larr;</span> Go home
      </Link>
      <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-7xl">
        {nfts.length !== 0 ? (
          <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
            {nfts.map((nft) => (
              <NFTCard key={nft?.id?.token} nft={nft} />
            ))}
          </div>
        ) : (
          <EmptyState />
        )}
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { address } = context.params;
  const API_KEY = process.env.NEXT_PUBLIC_ALCHEMY_API_KEY;
  const BASE_URL = `https://eth-mainnet.alchemyapi.io/v2/${API_KEY}/getNFTs/`;
  const response = await fetch(`${BASE_URL}?owner=${address}`);
  // const walletAddress = await AlchemyProvider.resolveName(address);
  // const ensName = await AlchemyProvider.lookupAddress(address);
  const data = await response.json();
  const nfts = data.ownedNfts;

  return {
    props: { nfts },
  };
}
