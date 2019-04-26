import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const websites = [
  {
    icon: <FontAwesomeIcon icon={["fab", "facebook"]} />,
    name: 'Facebook.com',
    count: '45,836',
    rate: <div style={{ color: '#7ED321' }}><FontAwesomeIcon icon="arrow-up" />20%</div>
  },
  {
    icon: <FontAwesomeIcon icon={["fab", "google"]} />,
    name: 'Google.com',
    count: '23,582',
    rate: <div style={{ color: '#7ED321' }}><FontAwesomeIcon icon="arrow-up" />12%</div>
  },
  {
    icon: <FontAwesomeIcon icon={["fab", "stripe-s"]} />,
    name: 'Shopify.com',
    count: '2,489',
    rate: <div style={{ color: '#D0021B' }}><FontAwesomeIcon icon="arrow-down" />15%</div>
  },
  {
    icon: <FontAwesomeIcon icon={["fab", "wordpress"]} />,
    name: 'Wordpress.com',
    count: '1,057',
    rate: <div style={{ color: '#D0021B' }}><FontAwesomeIcon icon="arrow-down" />30%</div>
  }
];

export default websites;