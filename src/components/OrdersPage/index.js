import React, { PureComponent } from 'react';
import styles from './orders-page.module.scss';
import FadeIn from 'components/FadeIn';
import TitleBar from './TitleBar';
import Table from 'components/Table';

const headList = [
  'Customer',
  'Product List',
  'Total',
  'Add to Cart',
  'Check-out',
  'Address',
  'Status',
];

const bodyList = [
  {
    customer: 'Ian Medina',
    productList: [
      { name: 'Vestibulum.', price: 1400, amount: 1 },
      { name: 'Fusce vehicu.', price: 800, amount: 1 },
    ],
    total: 2200,
    addToCart: '2018/6/8 13:39',
    checkOut: '2018/6/8 20:23',
    address: '386 Windler Drives Apt.358',
    status: 'paid',
  },
  {
    customer: 'Manuel Stephens',
    productList: [
      { name: 'Donec facili.', price: 1400, amount: 1 },
    ],
    total: 1400,
    addToCart: '2018/6/8 13:39',
    checkOut: '2018/6/8 20:23',
    address: '531 Orval Mission Suite 134',
    status: 'paid',
  },
  {
    customer: 'Daisy Reynolds',
    productList: [
      { name: 'Curabitur lo.', price: 1400, amount: 1 },
      { name: 'Donec facili.', price: 800, amount: 1 },
      { name: 'Nam porttito.', price: 800, amount: 1 },
    ],
    total: 3000,
    addToCart: '2018/6/8 13:39',
    checkOut: '2018/6/8 20:23',
    address: '38 Juston Islands Apt. 012',
    status: 'shipping',
  },
  {
    customer: 'Daisy Reynolds',
    productList: [
      { name: 'Lorem ipsum', price: 1400, amount: 1 },
      { name: 'Nam porttito.', price: 1400, amount: 1 },
    ],
    total: 2800,
    addToCart: '2018/6/8 13:39',
    checkOut: '2018/6/8 20:23',
    address: '38 Juston Islands Apt. 012',
    status: 'shipping',
  },
  {
    customer: 'Daisy Reynolds',
    productList: [
      { name: 'Mauris non.', price: 1400, amount: 1 },
      { name: 'Vestibulum.', price: 1400, amount: 1 },
    ],
    total: 2800,
    addToCart: '2018/6/8 13:39',
    checkOut: '2018/6/8 20:23',
    address: '38 Juston Islands Apt. 012',
    status: 'done',
  },
  {
    customer: 'Daisy Reynolds',
    productList: [
      { name: 'Curabitur lo.', price: 1400, amount: 1 },
    ],
    total: 1400,
    addToCart: '2018/6/8 13:39',
    checkOut: '',
    address: '38 Juston Islands Apt. 012',
    status: 'unpaid',
  },
];

export default class OrdersPage extends PureComponent {
  constructor (props) {
    super(props);
    this.state = {
      itemStatusDropdown: false,
      selectStatusDropdown: false,
      editSectionDropdown: false,
    };
  }

  handleClickItemStatus = () => this.setState({ itemStatusDropdown: !this.state.itemStatusDropdown });
  handleClickSelectStatus = () => this.setState({ selectStatusDropdown: !this.state.selectStatusDropdown });
  handleClickEditSection = () => this.setState({ editSectionDropdown: !this.state.editSectionDropdown });

  itemStatusDropdownClose = () => this.setState(() => ({ itemStatusDropdown: false }));
  selectStatusDropdownClose = () => this.setState(() => ({ selectStatusDropdown: false }));

  render () {
    const {
      itemStatusDropdown,
      selectStatusDropdown,
      editSectionDropdown,
    } = this.state;

    return (
      <FadeIn>
        <div className={styles['container']}>
          <TitleBar
            itemStatusDropdown={itemStatusDropdown}
            selectStatusDropdown={selectStatusDropdown}
            editSectionDropdown={editSectionDropdown}
            handleClickItemStatus={this.handleClickItemStatus}
            handleClickSelectStatus={this.handleClickSelectStatus}
            handleClickEditSection={this.handleClickEditSection}
            itemStatusDropdownClose={this.itemStatusDropdownClose}
            selectStatusDropdownClose={this.selectStatusDropdownClose}
          />
          <div className={styles['table-wrapper']}>
            <Table
              headList={headList}
              bodyList={bodyList}
            />
          </div>
        </div>
      </FadeIn>
    );
  }
}
