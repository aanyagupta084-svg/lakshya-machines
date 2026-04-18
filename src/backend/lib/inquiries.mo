import List "mo:core/List";
import Time "mo:core/Time";
import Types "../types/inquiries";

module {
  public func submitInquiry(
    inquiries : List.List<Types.Inquiry>,
    nextId : Nat,
    input : Types.InquiryInput,
  ) : Types.Inquiry {
    Runtime.trap("not implemented");
  };

  public func listInquiries(inquiries : List.List<Types.Inquiry>) : [Types.Inquiry] {
    Runtime.trap("not implemented");
  };
};
