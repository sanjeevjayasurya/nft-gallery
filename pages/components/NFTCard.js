import { useState } from "react";

function NFTCard({ nft }) {
  const [showModal, setShowModal] = useState(false);
  const handlePurchase = () => {
    const tokenIdInDecimals = BigInt(nft?.id?.tokenId).toString();
    const openseaLink = `https://opensea.io/assets/ethereum/${nft?.contract?.address}/${tokenIdInDecimals}`;
    window.open(openseaLink, "_blank");
  };

  const convertIpfsToHttpsUrl = (url) => {
    return `https://ipfs.io/ipfs/${url?.substring(6)}`;
  };

  return (
    <>
      <div
        className="bg-white rounded-lg shadow-lg overflow-hidden"
        onClick={() => setShowModal(true)}
      >
        <img
          src={
            nft.metadata.image_url ||
            (nft.metadata.image && convertIpfsToHttpsUrl(nft.metadata.image)) ||
            nft.contractMetadata.openSea.imageUrl
          }
          alt={nft.name}
          className="w-full h-40 object-scale-down"
        />
        <div className="p-4">
          <h2 className="text-lg font-medium text-gray-900">{nft.name}</h2>
          <p className="mt-2 text-gray-600">{nft.description}</p>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-gray-900 bg-opacity-50">
          <div className="bg-white rounded-lg overflow-hidden relative">
            <button
              className="absolute top-0 right-0"
              onClick={() => setShowModal(false)}
            >
              Close
            </button>
            <img
              src={
                nft.metadata.image_url ||
                (nft.metadata.image &&
                  convertIpfsToHttpsUrl(nft.metadata.image)) ||
                nft.contractMetadata.openSea.imageUrl
              }
              alt={nft.name}
              className="w-full h-80 object-contain"
            />
            <div className="p-4">
              <h2 className="text-lg font-medium text-gray-900">{nft.name}</h2>
              <p className="mt-2 text-gray-600">{nft.description}</p>
              <p className="mt-2 text-gray-600">Owner: {nft.owner}</p>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={handlePurchase}
              >
                Purchase on OpenSea
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default NFTCard;
