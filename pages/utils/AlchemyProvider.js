import { ethers } from "ethers";

const API_KEY = process.env.NEXT_PUBLIC_ALCHEMY_API_KEY;

export const AlchemyProvider = new ethers.AlchemyProvider("homestead", API_KEY);

