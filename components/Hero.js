import SearchBox from "./Searchbox";

export default function Hero({ walletAddress, setWalletAddress }) {
  return (
    <div className="mx-auto max-w-2xl py-32">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Discover Your Digital Wealth with Crypto Canvas
        </h1>
        <p className="mt-6 text-base leading-8 text-gray-600">
          Introducing NFT Canvas - a platform to showcase your
          NFTs linked to your wallet address. Our platform provides a
          transparent way to manage and track your digital assets while
          displaying your collection. Whether you&apos;re a crypto
          enthusiast or seasoned collector, NFT Canvas has got you covered.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <SearchBox
            walletAddress={walletAddress}
            setWalletAddress={setWalletAddress}
          />
        </div>
      </div>
    </div>
  );
}
