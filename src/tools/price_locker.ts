import { SolanaAgentKit } from "../index";
import PriceLockerSDK, { Locker } from "@pricelocker/sdk";
import { PublicKey } from "@solana/web3.js";

function initializePriceLockerSDK(agent: SolanaAgentKit): PriceLockerSDK {
  return new PriceLockerSDK(agent.wallet, agent.connection);
}

export async function getPriceLockerList(agent: SolanaAgentKit): Promise<
  {
    publicKey: PublicKey;
    data: Locker;
  }[]
> {
  try {
    const sdk = initializePriceLockerSDK(agent);
    return await sdk.getLockers();
  } catch (error: any) {
    console.error("Full error details:", error);
    throw error;
  }
}

export async function createPriceLocker(
  agent: SolanaAgentKit,
  lockerName: string,
  tokenMint: string,
): Promise<string> {
  try {
    const sdk = initializePriceLockerSDK(agent);
    return await sdk.createLocker(lockerName, new PublicKey(tokenMint));
  } catch (error: any) {
    console.error("Full error details:", error);
    throw error;
  }
}

export async function depositToPriceLocker(
  agent: SolanaAgentKit,
  lockerName: string,
  amount: number,
): Promise<string> {
  try {
    const sdk = initializePriceLockerSDK(agent);
    return await sdk.depositFunds(lockerName, amount);
  } catch (error: any) {
    console.error("Full error details:", error);
    throw error;
  }
}

export async function withdrawFromPriceLocker(
  agent: SolanaAgentKit,
  lockerName: string,
  amount: number,
): Promise<string> {
  try {
    const sdk = initializePriceLockerSDK(agent);
    return await sdk.withdrawFunds(lockerName, amount);
  } catch (error: any) {
    console.error("Full error details:", error);
    throw error;
  }
}

/* Time Lock */
export async function timeLockInPriceLocker(
  agent: SolanaAgentKit,
  lockerName: string,
  amount: number,
  timeInSeconds: number,
): Promise<string> {
  try {
    const sdk = initializePriceLockerSDK(agent);
    return await sdk.timeLockFunds(lockerName, amount, timeInSeconds);
  } catch (error: any) {
    console.error("Full error details:", error);
    throw error;
  }
}

export async function timeUnlockInPriceLocker(
  agent: SolanaAgentKit,
  lockerName: string,
  index: number,
): Promise<string> {
  try {
    const sdk = initializePriceLockerSDK(agent);
    return await sdk.timeUnlockFunds(lockerName, index);
  } catch (error: any) {
    console.error("Full error details:", error);
    throw error;
  }
}

/* Price Lock */
export async function priceLockInPriceLocker(
  agent: SolanaAgentKit,
  lockerName: string,
  amount: number,
  strikePrice: number,
): Promise<string> {
  try {
    const sdk = initializePriceLockerSDK(agent);
    return await sdk.priceLockFunds(
      lockerName,
      amount,
      strikePrice * 100, // convert to cents
    );
  } catch (error: any) {
    console.error("Full error details:", error);
    throw error;
  }
}

export async function priceUnlockInPriceLocker(
  agent: SolanaAgentKit,
  lockerName: string,
  index: number,
): Promise<string> {
  try {
    const sdk = initializePriceLockerSDK(agent);
    return await sdk.priceUnlockFunds(lockerName, index);
  } catch (error: any) {
    console.error("Full error details:", error);
    throw error;
  }
}
