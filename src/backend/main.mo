import List "mo:core/List";
import InquiryTypes "types/inquiries";
import InquiriesMixin "mixins/inquiries-api";

actor {
  let inquiries = List.empty<InquiryTypes.Inquiry>();

  include InquiriesMixin(inquiries);
};
