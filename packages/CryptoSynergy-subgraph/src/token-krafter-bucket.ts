import { Bucket, TokenAllocation, Allocation, Investment, Withdrawal } from "../generated/schema";
import {
	Rebalanced as RebalancedEvent,
	Invested as InvestedEvent,
	Withdraw as WithdrawEvent
} from "../generated/templates/TokenKrafterBucket/TokenKrafterBucket";
import { createAccount } from "./helpers";

export function handleInvested(event: InvestedEvent): void {
	let investor = createAccount(event.params.investor);
	let allocations: string[] = [];
	for (let i = 0; i < event.params.allocations.length; ++i) {
		let tokenAllocation = event.params.allocations[i];
		let allocation = new Allocation(
			event.address.toHex() +
				"-" +
				event.params.investor.toHex() +
				"-" +
				tokenAllocation.tokenAddress.toHex() +
				event.params.tokenId.toHex()
		);
		allocation.token = tokenAllocation.tokenAddress;
		allocation.amount = tokenAllocation.amount;
		allocation.save();
		allocations.push(allocation.id);
	}
	let investment = new Investment(event.address.toHex() + event.params.tokenId.toHex());
	investment.bucket = event.address;
	investment.investor = investor.id;
	investment.investmentToken = event.params.token;
	investment.investmentAmount = event.params.amount;
	investment.allocations = allocations;
	investment.investedAt = event.block.timestamp;
	investment.save();
}

export function handleWithdraw(event: WithdrawEvent): void {
	let investor = createAccount(event.params.investor);
	let investment = Investment.load(event.address.toHex() + event.params.tokenId.toHex());
	if (investment === null) return;
	let withdrawal = new Withdrawal(event.address.toHex() + event.params.tokenId.toHex());
	withdrawal.bucket = event.address;
	withdrawal.investor = investor.id;
	withdrawal.amounts = investment.allocations;
	withdrawal.withdrawnAt = event.block.timestamp;
	withdrawal.save();
}

export function handleRebalanced(event: RebalancedEvent): void {
	let bucket = Bucket.load(event.address);
	if (bucket === null) return;

	let tokenAllocations: string[] = [];
	for (let i = 0; i < event.params.newTokenAllocation.length; i++) {
		let tokenAllocation = event.params.newTokenAllocation[i];
		let allocation = TokenAllocation.load(event.address.toHex() + "-" + tokenAllocation.tokenAddress.toHex());
		if (allocation === null) {
			allocation = new TokenAllocation(event.address.toHex() + "-" + tokenAllocation.tokenAddress.toHex());
		}
		allocation.token = tokenAllocation.tokenAddress;
		allocation.weightage = tokenAllocation.weightage;
		tokenAllocations.push(allocation.id);
	}
	bucket.tokenAllocations = tokenAllocations;
	bucket.save();
}
