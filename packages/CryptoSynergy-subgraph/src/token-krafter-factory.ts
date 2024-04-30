import { BucketCreated as BucketCreatedEvent } from "../generated/TokenKrafterFactory/TokenKrafterFactory";
import { TokenKrafterBucket } from "../generated/templates";
import { Bucket, TokenAllocation } from "../generated/schema";
import { createAccount } from "./helpers";

export function handleBucketCreated(event: BucketCreatedEvent): void {
	TokenKrafterBucket.create(event.params.bucket);

	let tokenAllocations: string[] = [];
	for (let i = 0; i < event.params.tokenAllocations.length; ++i) {
		let tokenAllocation = event.params.tokenAllocations[i];
		let allocation = new TokenAllocation(event.params.bucket.toHex() + "-" + tokenAllocation.tokenAddress.toHex());
		allocation.token = tokenAllocation.tokenAddress;
		allocation.weightage = tokenAllocation.weightage;
		allocation.save();
		tokenAllocations.push(allocation.id);
	}

	let creator = createAccount(event.params.creator);

	let entity = new Bucket(event.params.bucket);
	entity.creator = creator.id;
	entity.name = event.params.name;
	entity.description = event.params.description;
	entity.tokenURI = event.params.tokenURI;
	entity.createdAt = event.block.timestamp;
	entity.tokenAllocations = tokenAllocations;

	entity.save();
}
