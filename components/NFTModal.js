import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { imgError } from "../utils/imgError";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { generateImageUrl } from "../utils/generateImageurl";

export default function NFTModal({ showModal, setShowModal, nft }) {
  const handlePurchase = () => {
    const tokenIdInDecimals = BigInt(nft?.id?.tokenId).toString();
    const openseaLink = `https://opensea.io/assets/ethereum/${nft?.contract?.address}/${tokenIdInDecimals}`;
    window.open(openseaLink, "_blank");
  };
  return (
    <Transition.Root show={showModal} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setShowModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 hidden bg-gray-500 bg-opacity-75 transition-opacity md:block" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
              enterTo="opacity-100 translate-y-0 md:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 md:scale-100"
              leaveTo="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
            >
              <Dialog.Panel className="flex w-full transform text-left text-base transition md:my-8 md:max-w-2xl md:px-4 lg:max-w-4xl">
                <div className="relative flex w-full items-center overflow-hidden bg-white px-4 pt-14 pb-8 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                  <button
                    type="button"
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-500 sm:top-8 sm:right-6 md:top-6 md:right-6 lg:top-8 lg:right-8"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="sr-only">Close</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>

                  <div className="grid w-full grid-cols-1 items-start gap-y-8 gap-x-6 sm:grid-cols-12 lg:gap-x-8">
                    <div className="sm:col-span-4 lg:col-span-5">
                      <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-100">
                        <img
                          src={generateImageUrl(nft.metadata.image)}
                          onError={imgError}
                          alt={nft.metadata.name}
                          className="object-cover object-center"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col self-stretch justify-between sm:col-span-8 lg:col-span-7">
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">
                          {nft.title ? nft.title : "No title provided"}
                        </h2>

                        <section className="mt-3">
                          <p className="text-2xl text-gray-900">
                            {nft.contractMetadata.openSea.floorPrice} ETH
                          </p>
                          <div className="mt-3"></div>
                          <div className="mt-6">
                            <p className="text-sm text-gray-700">
                              <span className="font-bold">Description: </span>
                              {nft.description
                                ? nft.description
                                : "No description provided"}
                            </p>
                          </div>
                        </section>
                      </div>
                      <section className="mt-6">
                        <form>
                          <div className="mt-6"></div>
                          {/* <p className="absolute top-4 left-4 text-center sm:static sm:mt-6"> */}
                          <button
                            onClick={handlePurchase}
                            className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                          >
                            View on OpenSea
                          </button>
                          {/* </p> */}
                        </form>
                      </section>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
