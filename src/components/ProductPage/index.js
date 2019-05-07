import React, { PureComponent } from 'react';
import styles from './product-page.module.scss';
import FadeIn from 'components/FadeIn';
import TitleBar from './TitleBar';
import Table from './Table';

export default class ProductPage extends PureComponent {
  state = {
    allChecked: false,
  }

  handleAllChecked = () => {
    this.setState({ allChecked: !this.state.allChecked });
  }

  render () {
    return (
      <FadeIn>
        <div className={styles["container"]}>
          <TitleBar handleAllChecked={this.handleAllChecked} />
          <Table allChecked={this.state.allChecked} />
        </div>
      </FadeIn>
    );
  }
}


