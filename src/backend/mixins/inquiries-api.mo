import List "mo:core/List";
import InquiryTypes "../types/inquiries";
import InquiryLib "../lib/inquiries";

mixin (
  inquiries : List.List<InquiryTypes.Inquiry>,
) {
  var nextInquiryId : Nat = 0;

  public func submitInquiry(input : InquiryTypes.InquiryInput) : async InquiryTypes.Inquiry {
    Runtime.trap("not implemented");
  };

  public query func listInquiries() : async [InquiryTypes.Inquiry] {
    Runtime.trap("not implemented");
  };
};
