module {
  public type InquiryId = Nat;

  public type Inquiry = {
    id : InquiryId;
    name : Text;
    phone : Text;
    email : Text;
    machineInterest : Text;
    message : Text;
    timestamp : Int;
  };

  public type InquiryInput = {
    name : Text;
    phone : Text;
    email : Text;
    machineInterest : Text;
    message : Text;
  };
};
