// import { useState } from "react";
// import Media from "./Media";
import { Fragment, useState } from "react";
import { Dialog, RadioGroup, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/20/solid";
import { generateImageUrl } from "../utils/generateImageurl";
// function NFTCard({ nft }) {
//   console.log(nft);
//   const { title, description, image_url, image } = nft;
//   const generateImageUrl = (url) => {
//     let src = null;
//     if (url) {
//       try {
//         if (typeof url !== "string") {
//           url = url.toString();
//         }
//         if (url.startsWith("data:")) {
//           return url;
//         }
//         const originUrl = url.split("//");
//         if (originUrl?.length === 2) {
//           switch (originUrl[0].toLowerCase()) {
//             case "http:":
//               src = url;
//               break;
//             case "https:":
//               src = url;
//               break;
//             case "ipfs:":
//               src = "https://ipfs.io/ipfs/" + originUrl[1];
//               break;
//             default:
//               src = null;
//               break;
//           }
//         } else {
//           src = "https://ipfs.io/ipfs/" + url;
//         }
//       } catch (err) {
//         console.error(err.message, "Render Url:", url);
//         src = null;
//       }
//     }
//     return src;
//   };
//   const data = {
//     ownedNfts: [
//       {
//         contract: {
//           address: "0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85",
//         },
//         id: {
//           tokenId:
//             "0xee528288619f93b2f84b4159595ae24f71de6e6f12a1f939502e5f84011b60fa",
//           tokenMetadata: {
//             tokenType: "ERC721",
//           },
//         },
//         balance: "1",
//         title: "chinyasuhail.eth",
//         description: "chinyasuhail.eth, an ENS name.",
//         tokenUri: {
//           gateway:
//             "https://metadata.ens.domains/mainnet/0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85/0xee528288619f93b2f84b4159595ae24f71de6e6f12a1f939502e5f84011b60fa",
//           raw: "https://metadata.ens.domains/mainnet/0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85/0xee528288619f93b2f84b4159595ae24f71de6e6f12a1f939502e5f84011b60fa",
//         },
//         media: [
//           {
//             gateway:
//               "https://nft-cdn.alchemy.com/eth-mainnet/c0d5271f54281534eb1f989d914f8280",
//             thumbnail:
//               "https://res.cloudinary.com/alchemyapi/image/upload/thumbnailv2/eth-mainnet/c0d5271f54281534eb1f989d914f8280",
//             raw: "https://metadata.ens.domains/mainnet/0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85/0xee528288619f93b2f84b4159595ae24f71de6e6f12a1f939502e5f84011b60fa/image",
//             format: "svg+xml",
//             bytes: 101097,
//           },
//         ],
//         metadata: {
//           background_image:
//             "https://metadata.ens.domains/mainnet/avatar/chinyasuhail.eth",
//           image:
//             "https://metadata.ens.domains/mainnet/0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85/0xee528288619f93b2f84b4159595ae24f71de6e6f12a1f939502e5f84011b60fa/image",
//           is_normalized: true,
//           segment_length: 12,
//           image_url:
//             "https://metadata.ens.domains/mainnet/0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85/0xee528288619f93b2f84b4159595ae24f71de6e6f12a1f939502e5f84011b60fa/image",
//           name: "chinyasuhail.eth",
//           description: "chinyasuhail.eth, an ENS name.",
//           attributes: [
//             {
//               display_type: "date",
//               value: 1622913075000,
//               trait_type: "Created Date",
//             },
//             {
//               display_type: "number",
//               value: 12,
//               trait_type: "Length",
//             },
//             {
//               display_type: "number",
//               value: 12,
//               trait_type: "Segment Length",
//             },
//             {
//               display_type: "string",
//               value: "letter",
//               trait_type: "Character Set",
//             },
//             {
//               display_type: "date",
//               value: 1622913075000,
//               trait_type: "Registration Date",
//             },
//             {
//               display_type: "date",
//               value: 1780697835000,
//               trait_type: "Expiration Date",
//             },
//           ],
//           name_length: 12,
//           version: 0,
//           url: "https://app.ens.domains/name/chinyasuhail.eth",
//         },
//         timeLastUpdated: "2023-03-03T06:53:23.906Z",
//         contractMetadata: {
//           tokenType: "ERC721",
//           contractDeployer: "0x4fe4e666be5752f1fdd210f4ab5de2cc26e3e0e8",
//           deployedBlockNumber: 9380410,
//           openSea: {
//             floorPrice: 0.00076315768,
//             collectionName: "ENS: Ethereum Name Service",
//             safelistRequestStatus: "verified",
//             imageUrl:
//               "https://i.seadn.io/gae/0cOqWoYA7xL9CkUjGlxsjreSYBdrUBE0c6EO1COG4XE8UeP-Z30ckqUNiL872zHQHQU5MUNMNhfDpyXIP17hRSC5HQ?w=500&auto=format",
//             description:
//               "Ethereum Name Service (ENS) domains are secure domain names for the decentralized world. ENS domains provide a way for users to map human readable names to blockchain and non-blockchain resources, like Ethereum addresses, IPFS hashes, or website URLs. ENS domains can be bought and sold on secondary markets.",
//             externalUrl: "https://ens.domains",
//             twitterUsername: "ensdomains",
//             lastIngestedAt: "2023-03-06T19:03:54.000Z",
//           },
//         },
//       },
//       {
//         contract: {
//           address: "0xfa932d5cbbdc8f6ed6d96cc6513153afa9b7487c",
//         },
//         id: {
//           tokenId:
//             "0x0000000000000000000000000000000000000000000000000000000000000d70",
//           tokenMetadata: {
//             tokenType: "ERC721",
//           },
//         },
//         balance: "1",
//         title: "Subject To Change Without Notice",
//         description:
//           "Tunes are imaginative song titles generated by AI. Audio, cover art, artist name, and other functionalities are intentionally omitted for others to interpret and create. Feel free to use a Tune in any way you want.",
//         tokenUri: {
//           gateway:
//             "https://alchemy.mypinata.cloud/ipfs/QmSTj62dobkFt62cxUJXtVYTXTwcTD3i4SVhfwJuWpt1SK/3440",
//           raw: "ipfs://QmSTj62dobkFt62cxUJXtVYTXTwcTD3i4SVhfwJuWpt1SK/3440",
//         },
//         media: [
//           {
//             gateway:
//               "https://nft-cdn.alchemy.com/eth-mainnet/421b2eba46de90dfd5c1279ddcde6224",
//             thumbnail:
//               "https://res.cloudinary.com/alchemyapi/image/upload/thumbnailv2/eth-mainnet/421b2eba46de90dfd5c1279ddcde6224",
//             raw: "ipfs://Qme2g6Rq3ytangS7HsFYPQckN9dngBzmSRVB3UQGL1ZA72/3440.png",
//             format: "png",
//             bytes: 22344,
//           },
//         ],
//         metadata: {
//           name: "Subject To Change Without Notice",
//           description:
//             "Tunes are imaginative song titles generated by AI. Audio, cover art, artist name, and other functionalities are intentionally omitted for others to interpret and create. Feel free to use a Tune in any way you want.",
//           image:
//             "ipfs://Qme2g6Rq3ytangS7HsFYPQckN9dngBzmSRVB3UQGL1ZA72/3440.png",
//         },
//         timeLastUpdated: "2023-02-23T03:37:53.838Z",
//         contractMetadata: {
//           name: "Tunes",
//           symbol: "TUNE",
//           totalSupply: "5000",
//           tokenType: "ERC721",
//           contractDeployer: "0xf7ef3eef260369732a137750bcd8d7716cae6d27",
//           deployedBlockNumber: 13183642,
//           openSea: {
//             floorPrice: 0.039,
//             collectionName: "Tunes Project",
//             safelistRequestStatus: "verified",
//             imageUrl:
//               "https://i.seadn.io/gae/Nb-AyBcWvFIx4ca8om3GE1innjt59zcTPOIWm67zqaRTjGScBpu2-LFpHp92OISFbtM1Df_N-pcwUlA4x0iMOh8C8ZYvtScd6yWy?w=500&auto=format",
//             description:
//               "Tunes are imaginative song titles generated by AI. Audio, cover art, artist name, and other functionality are intentionally omitted for others to interpret and create. Feel free to use a Tune in any way you want.\n\n[Upload a Song](https://songs.tunesproject.org)｜[Listen to Songs](https://opensea.io/collection/songs-for-tunes)｜[Join Discord](https://discord.com/invite/S7tq8bUkAR)｜[Follow on Twitter](https://twitter.com/tunesproject)",
//             externalUrl: "http://tunesproject.org",
//             twitterUsername: "tunesproject",
//             discordUrl: "https://discord.gg/S7tq8bUkAR",
//             lastIngestedAt: "2023-02-27T03:57:40.000Z",
//           },
//         },
//       },
//       {
//         contract: {
//           address: "0xfa932d5cbbdc8f6ed6d96cc6513153afa9b7487c",
//         },
//         id: {
//           tokenId:
//             "0x0000000000000000000000000000000000000000000000000000000000000f3d",
//           tokenMetadata: {
//             tokenType: "ERC721",
//           },
//         },
//         balance: "1",
//         title: "Break Your Keyboards",
//         description:
//           "Tunes are imaginative song titles generated by AI. Audio, cover art, artist name, and other functionalities are intentionally omitted for others to interpret and create. Feel free to use a Tune in any way you want.",
//         tokenUri: {
//           gateway:
//             "https://alchemy.mypinata.cloud/ipfs/QmSTj62dobkFt62cxUJXtVYTXTwcTD3i4SVhfwJuWpt1SK/3901",
//           raw: "ipfs://QmSTj62dobkFt62cxUJXtVYTXTwcTD3i4SVhfwJuWpt1SK/3901",
//         },
//         media: [
//           {
//             gateway:
//               "https://nft-cdn.alchemy.com/eth-mainnet/b1cbd26d6e5e9480b84a7fb9a0e53434",
//             thumbnail:
//               "https://res.cloudinary.com/alchemyapi/image/upload/thumbnailv2/eth-mainnet/b1cbd26d6e5e9480b84a7fb9a0e53434",
//             raw: "ipfs://Qme2g6Rq3ytangS7HsFYPQckN9dngBzmSRVB3UQGL1ZA72/3901.png",
//             format: "png",
//             bytes: 18116,
//           },
//         ],
//         metadata: {
//           name: "Break Your Keyboards",
//           description:
//             "Tunes are imaginative song titles generated by AI. Audio, cover art, artist name, and other functionalities are intentionally omitted for others to interpret and create. Feel free to use a Tune in any way you want.",
//           image:
//             "ipfs://Qme2g6Rq3ytangS7HsFYPQckN9dngBzmSRVB3UQGL1ZA72/3901.png",
//         },
//         timeLastUpdated: "2023-02-23T03:37:54.240Z",
//         contractMetadata: {
//           name: "Tunes",
//           symbol: "TUNE",
//           totalSupply: "5000",
//           tokenType: "ERC721",
//           contractDeployer: "0xf7ef3eef260369732a137750bcd8d7716cae6d27",
//           deployedBlockNumber: 13183642,
//           openSea: {
//             floorPrice: 0.039,
//             collectionName: "Tunes Project",
//             safelistRequestStatus: "verified",
//             imageUrl:
//               "https://i.seadn.io/gae/Nb-AyBcWvFIx4ca8om3GE1innjt59zcTPOIWm67zqaRTjGScBpu2-LFpHp92OISFbtM1Df_N-pcwUlA4x0iMOh8C8ZYvtScd6yWy?w=500&auto=format",
//             description:
//               "Tunes are imaginative song titles generated by AI. Audio, cover art, artist name, and other functionality are intentionally omitted for others to interpret and create. Feel free to use a Tune in any way you want.\n\n[Upload a Song](https://songs.tunesproject.org)｜[Listen to Songs](https://opensea.io/collection/songs-for-tunes)｜[Join Discord](https://discord.com/invite/S7tq8bUkAR)｜[Follow on Twitter](https://twitter.com/tunesproject)",
//             externalUrl: "http://tunesproject.org",
//             twitterUsername: "tunesproject",
//             discordUrl: "https://discord.gg/S7tq8bUkAR",
//             lastIngestedAt: "2023-02-27T03:57:40.000Z",
//           },
//         },
//       },
//     ],
//     totalCount: 3,
//     blockHash:
//       "0x8f2f3c5f5efbf6b83cee49329dd953aff8d8a30b1ba75136377ca78876211e2d",
//   };
//   const [showModal, setShowModal] = useState(false);
//   const handlePurchase = () => {
//     const tokenIdInDecimals = BigInt(nft?.id?.tokenId).toString();
//     const openseaLink = `https://opensea.io/assets/ethereum/${nft?.contract?.address}/${tokenIdInDecimals}`;
//     window.open(openseaLink, "_blank");
//   };

//   // const convertIpfsToHttpsUrl = (url) => {
//   //   return `https://ipfs.io/ipfs/${url?.substring(6)}`;
//   // };

//   return (
//     <>
//       <div
//         className="bg-white rounded-lg shadow-lg overflow-hidden"
//         onClick={() => setShowModal(true)}
//       >
//         <img
//           onError={({ currentTarget }) => {
//             console.log("This is error", currentTarget.error);
//             currentTarget.onerror = null;
//             currentTarget.src = "/images/error.webp";
//           }}
//           src={generateImageUrl(nft.metadata.image)}
//           alt={nft.name}
//           className="w-full h-40 object-scale-down"
//         />
//         {/* <Media url={convertIpfsToHttpsUrl(nft.media[0].raw)} /> */}
//         <div className="p-4">
//           <h2 className="text-lg font-medium text-gray-900">{nft.title}</h2>
//           <p className="mt-2 text-gray-600">{nft.description}</p>
//         </div>
//       </div>

//       {showModal && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-gray-900 bg-opacity-50">
//           <div className="bg-white rounded-lg overflow-hidden relative">
//             <button
//               className="absolute top-0 right-0"
//               onClick={() => setShowModal(false)}
//             >
//               Close
//             </button>
//             <img
//               onError={({ currentTarget }) => {
//                 currentTarget.onerror = null;
//                 currentTarget.src = "/images/error.webp";
//               }}
//               src={nft.metadata.image}
//               alt={nft.name}
//               className="w-full h-80 object-contain"
//             />
//             <div className="p-4">
//               <h2 className="text-lg font-medium text-gray-900">{nft.name}</h2>
//               <p className="mt-2 text-gray-600">{nft.description}</p>
//               <p className="mt-2 text-gray-600">Owner: {nft.owner}</p>
//               <button
//                 className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//                 onClick={handlePurchase}
//               >
//                 Purchase on OpenSea
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// export default NFTCard;

export default function Example({ nft }) {
  console.log(nft);
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  const [showModal, setShowModal] = useState(false);
  

  const handlePurchase = () => {
    const tokenIdInDecimals = BigInt(nft?.id?.tokenId).toString();
    const openseaLink = `https://opensea.io/assets/ethereum/${nft?.contract?.address}/${tokenIdInDecimals}`;
    window.open(openseaLink, "_blank");
  };

  return (
    <>
      <div
        onClick={() => setShowModal(true)}
        className="group relative flex flex-col group-hover:scale-125 overflow-hidden rounded-lg border border-gray-200 bg-white"
      >
        <div className="aspect-w-3 aspect-h-4 bg-gray-200 sm:aspect-none sm:h-96 overflow-hidden">
          <img
            src={generateImageUrl(nft.metadata.image)}
            onError={({ currentTarget }) => {
              currentTarget.onerror = null;
              currentTarget.src = "/images/error.png";
            }}
            alt={nft.metadata.name}
            className="transition duration-350 h-full w-full object-cover object-center group-hover:scale-[1.15] sm:h-full sm:w-full overflow-hidden"
          />
        </div>
        <div className="group-hover:bg-slate-100 flex flex-1 flex-col space-y-2 p-4">
          <h3 className="text-sm font-medium text-gray-900">
            <div>
              <span aria-hidden="true" className="absolute inset-0" />
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
        </div>
      </div>
      {showModal && (
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
                              alt={nft.metadata.name}
                              className="object-cover object-center"
                            />
                          </div>
                        </div>
                        <div className="sm:col-span-8 lg:col-span-7">
                          <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">
                            {nft.title}
                          </h2>

                          <section
                            aria-labelledby="information-heading"
                            className="mt-3"
                          >
                            <h3 id="information-heading" className="sr-only">
                              Product information
                            </h3>

                            <p className="text-2xl text-gray-900">
                              {nft.contractMetadata.openSea.floorPrice} ETH
                            </p>

                            {/* Reviews */}
                            <div className="mt-3">
                              {/* <h4 className="sr-only">Reviews</h4>
                              <div className="flex items-center">
                                <div className="flex items-center">
                                  {[0, 1, 2, 3, 4].map((rating) => (
                                    <StarIcon
                                      key={rating}
                                      className={classNames(
                                        product.rating > rating
                                          ? "text-gray-400"
                                          : "text-gray-200",
                                        "h-5 w-5 flex-shrink-0"
                                      )}
                                      aria-hidden="true"
                                    />
                                  ))}
                                </div>
                                <p className="sr-only">
                                  {product.rating} out of 5 stars
                                </p>
                              </div> */}
                            </div>

                            <div className="mt-6">
                              <h4 className="sr-only">Description</h4>

                              <p className="text-sm text-gray-700">
                                {nft.description}
                              </p>
                            </div>
                          </section>

                          <section
                            aria-labelledby="options-heading"
                            className="mt-6"
                          >
                            <h3 id="options-heading" className="sr-only">
                              Product options
                            </h3>

                            <form>
                              {/* Colors */}
                              {/* <div>
                                <h4 className="text-sm text-gray-600">Color</h4>

                                <RadioGroup
                                  value={selectedColor}
                                  onChange={setSelectedColor}
                                  className="mt-2"
                                >
                                  <RadioGroup.Label className="sr-only">
                                    {" "}
                                    Choose a color{" "}
                                  </RadioGroup.Label>
                                  <div className="flex items-center space-x-3">
                                    {product.colors.map((color) => (
                                      <RadioGroup.Option
                                        key={color.name}
                                        value={color}
                                        className={({ active, checked }) =>
                                          classNames(
                                            color.selectedColor,
                                            active && checked
                                              ? "ring ring-offset-1"
                                              : "",
                                            !active && checked ? "ring-2" : "",
                                            "relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none"
                                          )
                                        }
                                      >
                                        <RadioGroup.Label
                                          as="span"
                                          className="sr-only"
                                        >
                                          {" "}
                                          {color.name}{" "}
                                        </RadioGroup.Label>
                                        <span
                                          aria-hidden="true"
                                          className={classNames(
                                            color.bgColor,
                                            "h-8 w-8 rounded-full border border-black border-opacity-10"
                                          )}
                                        />
                                      </RadioGroup.Option>
                                    ))}
                                  </div>
                                </RadioGroup>
                              </div> */}

                              <div className="mt-6">
                                {/* <button
                                  type="submit"
                                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                                >
                                  Add to bag
                                </button> */}
                              </div>

                              <p className="absolute top-4 left-4 text-center sm:static sm:mt-6">
                                <button
                                  onClick={handlePurchase}
                                  // className="font-medium text-indigo-600 hover:text-indigo-500"
                                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                                >
                                  Purchase
                                </button>
                              </p>
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
      )}
    </>
  );
}
