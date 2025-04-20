export const AccountStatusConvertor = (status) => {
  if (status === 1) {
    return "Active";
  } else if (status === 0) {
    return "Inactive";
  }
};
