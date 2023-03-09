import Link from "next/link";

export default function EmptyState() {
  return (
    <div className="text-center">
      <img
        src="/images/noNft.png"
        alt="no nft"
        className="mx-auto h-24 w-24 text-gray-400"
      />
      <h3 className="mt-2 text-6xl font-semibold text-gray-900">
        No NFTs found
      </h3>
      <p className="mt-1 text-lg text-gray-500">
        Click the button above to go home
      </p>
      {/* <div className="mt-6">
        <Link
          href="/"
          className="items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
        >
          <span aria-hidden="true">&larr;</span> Go home
        </Link>
      </div> */}
    </div>
  );
}
