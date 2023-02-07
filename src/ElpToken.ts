import {Transfer} from "../generated/TokenElp2/Elp";
import {Account} from "../generated/schema";
import {BigInt, log} from "@graphprotocol/graph-ts";

const RewardTracker_elp1 = "0x68dfaee9d90f6b7b7cd643cd179849c036ae3ff7";
const RewardTracker_elp2 = "0x90fb9475baf9bbcc3ea3468f5c2a9d3a6001032f";

export function Elp1Transfer(event: Transfer): void {

    //stake
    if (event.params.to.toHexString() == RewardTracker_elp1.toLowerCase()) {
        let account = Account.load(event.params.from.toHexString())
        if (account === null) {
            account = new Account(event.params.from.toHexString())
            account.address = event.params.from.toHexString()
            account.totalStaked = '0'
            account.elp1Staked = event.params.value.toString()
            account.elp2Staked = '0'
            account.save()
        } else {
            account.elp1Staked = BigInt.fromString(account.elp1Staked).plus(event.params.value).toString()
            account.save()
        }
    }

    // unstake
    if (event.params.from.toHexString() == RewardTracker_elp1.toLowerCase()) {
        let account = Account.load(event.params.to.toHexString())
        if (account === null) {
            account = new Account(event.params.to.toHexString())
            account.address = event.params.to.toHexString()
            account.totalStaked = '0'
            account.elp1Staked = event.params.value.toString()
            account.elp2Staked = '0'
            account.save()
        } else {
            account.elp1Staked = BigInt.fromString(account.elp1Staked).minus(event.params.value).toString()
            account.save()
        }
    }


}

export function Elp2Transfer(event: Transfer): void {

    //stake
    if (event.params.to.toHexString() == RewardTracker_elp2.toLowerCase()) {
        let account = Account.load(event.params.from.toHexString())
        if (account === null) {
            account = new Account(event.params.from.toHexString())
            account.address = event.params.from.toHexString()
            account.totalStaked = '0'
            account.elp1Staked = '0'
            account.elp2Staked = event.params.value.toString()
            account.save()
        } else {
            account.elp2Staked = BigInt.fromString(account.elp2Staked).plus(event.params.value).toString()
            account.save()
        }
    }

    //unstake
    if (event.params.from.toHexString() == RewardTracker_elp2.toLowerCase()) {
        let account = Account.load(event.params.to.toHexString())
        if (account === null) {
            account = new Account(event.params.to.toHexString())
            account.address = event.params.to.toHexString()
            account.totalStaked = '0'
            account.elp1Staked = '0'
            account.elp2Staked = event.params.value.toString()
            account.save()
        } else {
            account.elp2Staked = BigInt.fromString(account.elp2Staked).minus(event.params.value).toString()
            account.save()
        }
    }


}