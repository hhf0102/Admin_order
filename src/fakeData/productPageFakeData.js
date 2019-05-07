import shirt from 'assets/images/shirt.jpg';

export const headList = [
  'Product',
  'Original',
  'Discount',
  'Size',
  'Color',
  'Inventory',
  'Status',
];

export const bodyList = [
  {
    name: 'Mauris non tem.',
    productImage: shirt,
    original: 3200,
    discount: 2800,
    information: [
      {
        size: 'L',
        color1: { color: 'Gray', inventory: 15 },
        color2: { color: 'Black', inventory: 20 },
      },
      {
        size: 'M',
        color1: { color: 'Gray', inventory: 15 },
        color2: { color: 'Black', inventory: 20 },
      },
      {
        size: 'S',
        color1: { color: 'Gray', inventory: 15 },
        color2: { color: 'Black', inventory: 20 },
      },
    ],
    status: 'published',
  },
  {
    name: 'Curabitur lobo.',
    productImage: shirt,
    original: 3200,
    discount: 2800,
    information: [
      {
        size: 'L',
        color1: { color: 'Gray', inventory: 15 },
        color2: { color: 'Black', inventory: 20 },
      },
      {
        size: 'M',
        color1: { color: 'Gray', inventory: 15 },
        color2: { color: 'Black', inventory: 20 },
      },
      {
        size: 'S',
        color1: { color: 'Gray', inventory: 15 },
        color2: { color: 'Black', inventory: 20 },
      },
    ],
    status: 'published',
  },
  {
    name: 'Curabitur lobo.',
    productImage: shirt,
    original: 3200,
    discount: 2800,
    information: [
      {
        size: 'L',
        color1: { color: 'Gray', inventory: 15 },
        color2: { color: 'Black', inventory: 20 },
      },
      {
        size: 'M',
        color1: { color: 'Gray', inventory: 15 },
        color2: { color: 'Black', inventory: 20 },
      },
      {
        size: 'S',
        color1: { color: 'Gray', inventory: 15 },
        color2: { color: 'Black', inventory: 20 },
      },
    ],
    status: 'unpublished',
  }
];
