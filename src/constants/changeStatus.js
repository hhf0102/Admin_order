export const changeStatusOrdersPage = [
  'Paid',
  'Unpaid',
  'Shipping',
  'Done'
];

export const changeStatusProductsPage = [
  'Published',
  'Unpublished',
];

export const btnItemStatus = changeStatusOrdersPage.filter((item) => item !== 'Change Status to...');
export const btnDropdownStatusProductPage = changeStatusProductsPage.filter((item) => item !== 'Change Status to...');
