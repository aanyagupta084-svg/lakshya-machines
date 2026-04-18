import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export type InquiryId = bigint;
export interface Inquiry {
    id: InquiryId;
    name: string;
    email: string;
    machineInterest: string;
    message: string;
    timestamp: bigint;
    phone: string;
}
export interface InquiryInput {
    name: string;
    email: string;
    machineInterest: string;
    message: string;
    phone: string;
}
export interface backendInterface {
    listInquiries(): Promise<Array<Inquiry>>;
    submitInquiry(input: InquiryInput): Promise<Inquiry>;
}
