import {BigInt} from "@graphprotocol/graph-ts"
import {
    RewardRouter,
    UserStakeElp,
    UserUnstakeElp
} from "../generated/RewardRouter/RewardRouter"
import {Account} from "../generated/schema"

export function handleUserStakeElp(event: UserStakeElp): void {

    let account = Account.load(event.params.account.toHexString())
    if (account === null) {
        account = new Account(event.params.account.toHexString())
        account.address = event.params.account.toHexString()
        account.totalStaked = event.params.amount.toString()
        account.elp1Staked = '0'
        account.elp2Staked = '0'
        account.save()
    } else {
        account.totalStaked = BigInt.fromString(account.totalStaked).plus(event.params.amount).toString()
        account.save()
    }

}

export function handleUserUnstakeElp(event: UserUnstakeElp): void {

    let account = Account.load(event.params.account.toHexString())
    if (account === null) {
        account = new Account(event.params.account.toHexString())
        account.address = event.params.account.toHexString()
        account.totalStaked = event.params.amount.toString()
        account.elp1Staked = '0'
        account.elp2Staked = '0'
        account.save()
    } else {
        account.totalStaked = BigInt.fromString(account.totalStaked).minus(event.params.amount).toString()
        account.save()
    }

}
