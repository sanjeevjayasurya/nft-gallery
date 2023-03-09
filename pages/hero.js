import { useState } from "react";
import Hero from "../components/Hero";

export default function Page() {
  const [walletAddress, setWalletAddress] = useState("");

  return (
    <Hero walletAddress={walletAddress} setWalletAddress={setWalletAddress} />
  );
}
