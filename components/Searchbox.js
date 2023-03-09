import { ethers } from "ethers";
import { useState } from "react";
import { WalletIcon, ExclamationCircleIcon } from "@heroicons/react/20/solid";
import { useRouter } from "next/router";

const API_KEY = process.env.NEXT_PUBLIC_ALCHEMY_API_KEY;

function wait(milliseconds) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

async function checkHexAddress(address) {
  await wait(1000);
  return ethers.isAddress(address);
}

async function isValidAddress(
  address,
  setIsLoading,
  setError,
  setWalletAddress
) {
  setIsLoading(true);
  let isValid;
  const provider = new ethers.AlchemyProvider("homestead", API_KEY);
  const hexRegex = /^0x[0-9a-fA-F]+$/gi;
  const alphaRegex =
    /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
  if (alphaRegex.test(address)) {
    console.log("alpha tegex");
    try {
      isValid = await provider.resolveName(address);
      if (isValid) {
        setIsLoading(false);
        setError(false);
        return true;
      } else {
        setIsLoading(false);
        setError(true);
        return false;
      }
    } catch (e) {
      setIsLoading(false);
      setError(true);
      return true;
    }
  }
  if (hexRegex.test(address)) {
    console.log("reached hex Regex");
    isValid = await checkHexAddress(address);
    if (isValid) {
      setIsLoading(false);
      setError(false);
      return true;
    } else {
      setIsLoading(false);
      setError(true);
      return false;
    }
    // const validHexAddress = console.log(validHexAddress);
    // return new Promise((resolve) =>
    //   setTimeout(() => {
    //     setIsLoading(false);
    //     setError(!validHexAddress);
    //     console.log("This is validHexAddress >> ", validHexAddress);
    //     return validHexAddress;
    //   }, 2000)
    // );
  } else {
    setIsLoading(false);
    console.log("reaching here");
    return false;
  }
}

// export default function SearchBox({
//   walletAddress,
//   setWalletAddress,
//   fetchNFT,
// }) {
//   const queryClient = useQueryClient();
//   const [error, setError] = useState(false);
//   return (
// <form
//   onSubmit={async (e) => {
//     e.preventDefault();
//     if (await isValidAddress(walletAddress)) {
//       fetchNFT.refetch();
//       setError(false);
//     } else {
//       queryClient.resetQueries();
//       setError(true);
//     }
//   }}
//     >
//       <input
//         value={walletAddress}
//         onChange={(e) => {
//           setError(false);
//           setWalletAddress(e.target.value);
//         }}
//       />
//       <input type="submit" value="Submit" />
//       {error && <div>Error!</div>}
//     </form>
//   );
// }

export default function SearchBox({
  walletAddress,
  setWalletAddress,
  fetchNFT,
}) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  return (
    <div className="w-full">
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          //   setIsLoading(true);
          //   console.log(await isValidAddress(walletAddress, setIsLoading, setError))
          const isValid = await isValidAddress(
            walletAddress,
            setIsLoading,
            setError
          );
          if (isValid) {
            router.push(`nft/${walletAddress}`, null, { shallow: true });
            console.log("valid address");
            // fetchNFT.refetch();
            // setError(false);
          } else {
            console.log("invalid address");
            // queryClient.resetQueries();
            // setError(true);
          }
        }}
      >
        <label
          htmlFor="email"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          To unlock your digital treasure trove
        </label>
        <div className="mt-2 flex rounded-md shadow-sm">
          <div className="relative flex flex-grow items-stretch focus-within:z-10">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <WalletIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </div>

            <input
              type="text"
              id="eth-address"
              pattern={/^[a-zA-Z0-9.]*$/}
              title="Please remove unnecessary spaces"
              className="block w-full rounded-none rounded-l-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="Enter your wallet address"
              value={walletAddress}
              onChange={(e) => {
                setError(false);
                setWalletAddress(e.target.value);
              }}
            />
          </div>
          <button
            disabled={walletAddress.length === 0}
            type="submit"
            //   className="relative -ml-px rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            className="disabled:bg-indigo-500 relative -ml-px inline-flex items-center gap-x-1.5 rounded-r-md px-3 py-2 text-sm font-semibold text-white bg-indigo-600 ring-1 ring-inset ring-black hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            {isLoading ? (
              <>
                <div aria-label="Loading..." role="status">
                  <svg className="h-4 w-4 animate-spin" viewBox="3 3 18 18">
                    <path
                      className="fill-indigo-500"
                      d="M12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5ZM3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z"
                    ></path>
                    <path
                      className="fill-indigo-300"
                      d="M16.9497 7.05015C14.2161 4.31648 9.78392 4.31648 7.05025 7.05015C6.65973 7.44067 6.02656 7.44067 5.63604 7.05015C5.24551 6.65962 5.24551 6.02646 5.63604 5.63593C9.15076 2.12121 14.8492 2.12121 18.364 5.63593C18.7545 6.02646 18.7545 6.65962 18.364 7.05015C17.9734 7.44067 17.3403 7.44067 16.9497 7.05015Z"
                    ></path>
                  </svg>
                </div>
                Verifying...
              </>
            ) : (
              <>Get Started</>
            )}
          </button>
        </div>
        {error && (
          <div
            title="Please ensure that you have entered a valid wallet address. A wallet address typically consists of a string of alphanumeric characters and may include uppercase and lowercase letters. Double-check the address you have entered and try again. If you continue to experience issues, please contact customer support for further assistance."
            className="mt-3 h-6"
          >
            <ExclamationCircleIcon
              className="h-5 w-5 text-red-500 inline mb-[0.5px] mr-1"
              aria-hidden="true"
            />
            <p className="text-sm text-red-600 inline" id="email-error">
              Error: Invalid wallet address entered.
            </p>
          </div>
        )}
      </form>
    </div>
  );
}
