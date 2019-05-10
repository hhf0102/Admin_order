export const itemStatus = [
  'Change Status to...',
  'Paid',
  'Unpaid',
  'Shipping',
  'Done'
];

export const itemStatusProductPage = [
  'Change Status to...',
  'Published',
  'Unpublished',
];

export const btnItemStatus = itemStatus.filter((item) => item !== 'Change Status to...');
export const btnDropdownStatusProductPage = itemStatusProductPage.filter((item) => item !== 'Change Status to...');
