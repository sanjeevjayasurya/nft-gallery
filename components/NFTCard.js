import { useState } from "react";
import { generateImageUrl } from "../utils/generateImageurl";
import { imgError } from "../utils/imgError";
import NFTModal from "./NFTModal";

export default function NFTCard({ nft }) {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div
        onClick={() => setShowModal(true)}
        className="group relative flex flex-col group-hover:scale-125 overflow-hidden rounded-lg border border-gray-200 bg-white"
      >
        <div className="aspect-w-3 aspect-h-4 bg-gray-200 sm:aspect-none sm:h-96 overflow-hidden">
          <img
            src={generateImageUrl(nft.metadata.image)}
            onError={imgError}
            alt={nft.metadata.name}
            className="transition duration-350 h-full w-full object-cover object-center group-hover:scale-[1.15] sm:h-full sm:w-full overflow-hidden"
          />
        </div>
        <div className="group-hover:bg-slate-100 flex flex-1 flex-col space-y-2 p-4">
          <h3 className="text-base font-bold text-gray-900">
            <div>
              <span aria-hidden="true" className=" absolute inset-0" />
              {nft.title}
            </div>
          </h3>
          {/* <p className="text-sm text-gray-500">{nft.description}</p> */}
          <div className="flex flex-1 flex-col justify-end">
            {/* <p className="text-sm italic text-gray-500">{product.options}</p> */}
            <p className="text-base font-medium text-gray-900">
              <span className="font-bold">Floor price: </span>
              {nft.contractMetadata.openSea.floorPrice} ETH
            </p>
          </div>
          <div className="relative">
            <div
              className="absolute inset-0 flex items-center"
              aria-hidden="true"
            >
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center">
              {/* <span className="bg-white px-2 text-gray-500">
                <img className="h-5 w-5" src="/images/ethereum.svg" />
              </span> */}
            </div>
            {/* <div className="block">
              <img
                className="inline-block h-6 w-6 rounded-full"
                src={nft.contractMetadata.openSea.imageUrl}
                alt="avatar"
              />
            </div> */}
          </div>
          <div className="flex items-center">
            <img
              className="inline-block h-6 w-6 rounded-full"
              onError={imgError}
              src={generateImageUrl(nft?.contractMetadata?.openSea?.imageUrl)}
              alt=""
            />
            <span className="text-sm font-semibold ml-2">
              {nft?.contractMetadata?.openSea?.collectionName}
            </span>
          </div>
        </div>
      </div>
      {showModal && (
        <NFTModal showModal={showModal} setShowModal={setShowModal} nft={nft} />
      )}
    </>
  );
}
