import { BigInt } from "@graphprotocol/graph-ts"
import {
  RewardRouter,
  BuyEUSD,
  Claim,
  ClaimESBTEUSD,
  OwnershipTransferred,
  SellEUSD,
  StakeElp,
  UnstakeElp,
  UserStakeElp,
  UserUnstakeElp
} from "../generated/RewardRouter/RewardRouter"
import { ExampleEntity } from "../generated/schema"

export function handleBuyEUSD(event: BuyEUSD): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  let entity = ExampleEntity.load(event.transaction.from.toHex())

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (!entity) {
    entity = new ExampleEntity(event.transaction.from.toHex())

    // Entity fields can be set using simple assignments
    entity.count = BigInt.fromI32(0)
  }

  // BigInt and BigDecimal math are supported
  entity.count = entity.count + BigInt.fromI32(1)

  // Entity fields can be set based on event parameters
  entity.account = event.params.account
  entity.token = event.params.token

  // Entities can be written to the store with `.save()`
  entity.save()

  // Note: If a handler doesn't require existing field values, it is faster
  // _not_ to load the entity from the store. Instead, create it fresh with
  // `new Entity(...)`, set the fields that should be updated and save the
  // entity back to the store. Fields that were not set or unset remain
  // unchanged, allowing for partial updates to be applied.

  // It is also possible to access smart contracts from mappings. For
  // example, the contract that has emitted the event can be connected to
  // with:
  //
  // let contract = Contract.bind(event.address)
  //
  // The following functions can then be called on this contract to access
  // state variables and other data:
  //
  // - contract.EUSDCirculation(...)
  // - contract.LVT_MINFEE(...)
  // - contract.LVT_PRECISION(...)
  // - contract.PRICE_PRECISION(...)
  // - contract.PRICE_TO_EUSD(...)
  // - contract.SWAP_THRESHOLD(...)
  // - contract.base_fee_point(...)
  // - contract.buyEUSD(...)
  // - contract.claimAll(...)
  // - contract.claimAllForAccount(...)
  // - contract.claimEDE(...)
  // - contract.claimEDEForAccount(...)
  // - contract.claimEE(...)
  // - contract.claimESBTEUSD(...)
  // - contract.claimEUSD(...)
  // - contract.claimEUSDForAccount(...)
  // - contract.claimGeneratedFee(...)
  // - contract.claimableEDE(...)
  // - contract.claimableEDEForAccount(...)
  // - contract.claimableEDEList(...)
  // - contract.claimableEDEListForAccount(...)
  // - contract.claimableESBTEUSD(...)
  // - contract.claimableEUSD(...)
  // - contract.claimableEUSDForAccount(...)
  // - contract.claimableEUSDList(...)
  // - contract.claimableEUSDListForAccount(...)
  // - contract.cooldownDuration(...)
  // - contract.esbt(...)
  // - contract.eusd(...)
  // - contract.feeAUM(...)
  // - contract.getEUSDCollateralDetail(...)
  // - contract.getEUSDPoolInfo(...)
  // - contract.isInitialized(...)
  // - contract.isStable(...)
  // - contract.latestOperationTime(...)
  // - contract.lvt(...)
  // - contract.owner(...)
  // - contract.pricefeed(...)
  // - contract.rewardELPnWeights(...)
  // - contract.rewardToken(...)
  // - contract.sellEUSD(...)
  // - contract.sellEUSDNative(...)
  // - contract.stakeELPn(...)
  // - contract.stakedELPnAmount(...)
  // - contract.stakedELPnTracker(...)
  // - contract.stakedELPnVault(...)
  // - contract.swapStatus(...)
  // - contract.swapToken(...)
  // - contract.tokenDecimals(...)
  // - contract.totalELPnWeights(...)
  // - contract.unstakeELPn(...)
  // - contract.weth(...)
  // - contract.whitelistedELPn(...)
}

export function handleClaim(event: Claim): void {}

export function handleClaimESBTEUSD(event: ClaimESBTEUSD): void {}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {}

export function handleSellEUSD(event: SellEUSD): void {}

export function handleStakeElp(event: StakeElp): void {}

export function handleUnstakeElp(event: UnstakeElp): void {}

export function handleUserStakeElp(event: UserStakeElp): void {}

export function handleUserUnstakeElp(event: UserUnstakeElp): void {}
