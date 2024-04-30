// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Account extends Entity {
  constructor(id: Bytes) {
    super();
    this.set("id", Value.fromBytes(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Account entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.BYTES,
        `Entities of type Account must have an ID of type Bytes but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Account", id.toBytes().toHexString(), this);
    }
  }

  static loadInBlock(id: Bytes): Account | null {
    return changetype<Account | null>(
      store.get_in_block("Account", id.toHexString())
    );
  }

  static load(id: Bytes): Account | null {
    return changetype<Account | null>(store.get("Account", id.toHexString()));
  }

  get id(): Bytes {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set id(value: Bytes) {
    this.set("id", Value.fromBytes(value));
  }

  get createdBuckets(): BucketLoader {
    return new BucketLoader(
      "Account",
      this.get("id")!
        .toBytes()
        .toHexString(),
      "createdBuckets"
    );
  }

  get investments(): InvestmentLoader {
    return new InvestmentLoader(
      "Account",
      this.get("id")!.toString(),
      "investments"
    );
  }

  get withdrawals(): WithdrawalLoader {
    return new WithdrawalLoader(
      "Account",
      this.get("id")!.toString(),
      "withdrawals"
    );
  }
}

export class TokenAllocation extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save TokenAllocation entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type TokenAllocation must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("TokenAllocation", id.toString(), this);
    }
  }

  static loadInBlock(id: string): TokenAllocation | null {
    return changetype<TokenAllocation | null>(
      store.get_in_block("TokenAllocation", id)
    );
  }

  static load(id: string): TokenAllocation | null {
    return changetype<TokenAllocation | null>(store.get("TokenAllocation", id));
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get token(): Bytes {
    let value = this.get("token");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set token(value: Bytes) {
    this.set("token", Value.fromBytes(value));
  }

  get weightage(): BigInt {
    let value = this.get("weightage");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set weightage(value: BigInt) {
    this.set("weightage", Value.fromBigInt(value));
  }
}

export class Bucket extends Entity {
  constructor(id: Bytes) {
    super();
    this.set("id", Value.fromBytes(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Bucket entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.BYTES,
        `Entities of type Bucket must have an ID of type Bytes but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Bucket", id.toBytes().toHexString(), this);
    }
  }

  static loadInBlock(id: Bytes): Bucket | null {
    return changetype<Bucket | null>(
      store.get_in_block("Bucket", id.toHexString())
    );
  }

  static load(id: Bytes): Bucket | null {
    return changetype<Bucket | null>(store.get("Bucket", id.toHexString()));
  }

  get id(): Bytes {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set id(value: Bytes) {
    this.set("id", Value.fromBytes(value));
  }

  get creator(): Bytes {
    let value = this.get("creator");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set creator(value: Bytes) {
    this.set("creator", Value.fromBytes(value));
  }

  get name(): string {
    let value = this.get("name");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set name(value: string) {
    this.set("name", Value.fromString(value));
  }

  get description(): string {
    let value = this.get("description");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set description(value: string) {
    this.set("description", Value.fromString(value));
  }

  get tokenURI(): string {
    let value = this.get("tokenURI");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set tokenURI(value: string) {
    this.set("tokenURI", Value.fromString(value));
  }

  get createdAt(): BigInt {
    let value = this.get("createdAt");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set createdAt(value: BigInt) {
    this.set("createdAt", Value.fromBigInt(value));
  }

  get tokenAllocations(): Array<string> {
    let value = this.get("tokenAllocations");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toStringArray();
    }
  }

  set tokenAllocations(value: Array<string>) {
    this.set("tokenAllocations", Value.fromStringArray(value));
  }

  get investments(): InvestmentLoader {
    return new InvestmentLoader(
      "Bucket",
      this.get("id")!.toString(),
      "investments"
    );
  }

  get withdrawals(): WithdrawalLoader {
    return new WithdrawalLoader(
      "Bucket",
      this.get("id")!.toString(),
      "withdrawals"
    );
  }
}

export class Allocation extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Allocation entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Allocation must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Allocation", id.toString(), this);
    }
  }

  static loadInBlock(id: string): Allocation | null {
    return changetype<Allocation | null>(store.get_in_block("Allocation", id));
  }

  static load(id: string): Allocation | null {
    return changetype<Allocation | null>(store.get("Allocation", id));
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get token(): Bytes {
    let value = this.get("token");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set token(value: Bytes) {
    this.set("token", Value.fromBytes(value));
  }

  get amount(): BigInt {
    let value = this.get("amount");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set amount(value: BigInt) {
    this.set("amount", Value.fromBigInt(value));
  }
}

export class Investment extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Investment entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Investment must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Investment", id.toString(), this);
    }
  }

  static loadInBlock(id: string): Investment | null {
    return changetype<Investment | null>(store.get_in_block("Investment", id));
  }

  static load(id: string): Investment | null {
    return changetype<Investment | null>(store.get("Investment", id));
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get bucket(): Bytes {
    let value = this.get("bucket");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set bucket(value: Bytes) {
    this.set("bucket", Value.fromBytes(value));
  }

  get investor(): Bytes {
    let value = this.get("investor");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set investor(value: Bytes) {
    this.set("investor", Value.fromBytes(value));
  }

  get investmentToken(): Bytes {
    let value = this.get("investmentToken");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set investmentToken(value: Bytes) {
    this.set("investmentToken", Value.fromBytes(value));
  }

  get investmentAmount(): BigInt {
    let value = this.get("investmentAmount");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set investmentAmount(value: BigInt) {
    this.set("investmentAmount", Value.fromBigInt(value));
  }

  get allocations(): Array<string> {
    let value = this.get("allocations");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toStringArray();
    }
  }

  set allocations(value: Array<string>) {
    this.set("allocations", Value.fromStringArray(value));
  }

  get investedAt(): BigInt {
    let value = this.get("investedAt");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set investedAt(value: BigInt) {
    this.set("investedAt", Value.fromBigInt(value));
  }
}

export class Withdrawal extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Withdrawal entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Withdrawal must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Withdrawal", id.toString(), this);
    }
  }

  static loadInBlock(id: string): Withdrawal | null {
    return changetype<Withdrawal | null>(store.get_in_block("Withdrawal", id));
  }

  static load(id: string): Withdrawal | null {
    return changetype<Withdrawal | null>(store.get("Withdrawal", id));
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get bucket(): Bytes {
    let value = this.get("bucket");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set bucket(value: Bytes) {
    this.set("bucket", Value.fromBytes(value));
  }

  get investor(): Bytes {
    let value = this.get("investor");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set investor(value: Bytes) {
    this.set("investor", Value.fromBytes(value));
  }

  get amounts(): Array<string> {
    let value = this.get("amounts");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toStringArray();
    }
  }

  set amounts(value: Array<string>) {
    this.set("amounts", Value.fromStringArray(value));
  }

  get withdrawnAt(): BigInt {
    let value = this.get("withdrawnAt");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set withdrawnAt(value: BigInt) {
    this.set("withdrawnAt", Value.fromBigInt(value));
  }
}

export class BucketLoader extends Entity {
  _entity: string;
  _field: string;
  _id: string;

  constructor(entity: string, id: string, field: string) {
    super();
    this._entity = entity;
    this._id = id;
    this._field = field;
  }

  load(): Bucket[] {
    let value = store.loadRelated(this._entity, this._id, this._field);
    return changetype<Bucket[]>(value);
  }
}

export class InvestmentLoader extends Entity {
  _entity: string;
  _field: string;
  _id: string;

  constructor(entity: string, id: string, field: string) {
    super();
    this._entity = entity;
    this._id = id;
    this._field = field;
  }

  load(): Investment[] {
    let value = store.loadRelated(this._entity, this._id, this._field);
    return changetype<Investment[]>(value);
  }
}

export class WithdrawalLoader extends Entity {
  _entity: string;
  _field: string;
  _id: string;

  constructor(entity: string, id: string, field: string) {
    super();
    this._entity = entity;
    this._id = id;
    this._field = field;
  }

  load(): Withdrawal[] {
    let value = store.loadRelated(this._entity, this._id, this._field);
    return changetype<Withdrawal[]>(value);
  }
}
