import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { rateNumber } from 'utils/formattedNumber';

const viewsFacebook = 45836;
const lastWeekViewsFacebook = 44937;

const viewsGoogle = 23582;
const lastWeekViewsGoogle = 20000;

const viewShopify = 2489;
const lastWeekViewsShopify = 2508;

const viewWordpress = 1057;
const lastWeekViewsWordpress = 1800;

const websites = [
  {
    icon: <FontAwesomeIcon icon={["fab", "facebook"]} />,
    name: 'Facebook.com',
    views: viewsFacebook,
    lastWeekViews: lastWeekViewsFacebook,
    rate: rateNumber(viewsFacebook, lastWeekViewsFacebook),
  },
  {
    icon: <FontAwesomeIcon icon={["fab", "google"]} />,
    name: 'Google.com',
    views: viewsGoogle,
    lastWeekViews: lastWeekViewsGoogle,
    rate: rateNumber(viewsGoogle, lastWeekViewsGoogle),
  },
  {
    icon: <FontAwesomeIcon icon={["fab", "stripe-s"]} />,
    name: 'Shopify.com',
    views: viewShopify,
    lastWeekViews: lastWeekViewsShopify,
    rate: rateNumber(viewShopify, lastWeekViewsShopify),
  },
  {
    icon: <FontAwesomeIcon icon={["fab", "wordpress"]} />,
    name: 'Wordpress.com',
    views: viewWordpress,
    lastWeekViews: lastWeekViewsWordpress,
    rate: rateNumber(viewWordpress, lastWeekViewsWordpress),
  }
];

export default websites;
