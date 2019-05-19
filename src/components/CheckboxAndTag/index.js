import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './checkbox-and-tag.module.scss';
import Checkbox from 'components/Checkbox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CustomDropdown from 'components/CustomDropdown';
import Tooltip from 'components/Tooltip';


export default class CheckboxAndTag extends PureComponent {
  static propTypes = {
    isAllChecked: PropTypes.bool,
    handleChangeAllChecked: PropTypes.func,
    handleSelectArrow: PropTypes.func,
    handleChangeStatus: PropTypes.func,
    arrowList: PropTypes.array,
    tagList: PropTypes.array,
  }

  state = {
    showArrowDropdown: false,
    showTagDropdown: false,
    showTagTooltip: false,
  };

  handleClickArrow = () => {
    this.setState({
      showArrowDropdown: !this.state.showArrowDropdown
    });
  };
  handleClickTag = () => {
    this.setState({
      showTagDropdown: !this.state.showTagDropdown,
      showTagTooltip: false,
    })
  };

  dropdownClose = () => this.setState({
    showArrowDropdown: false,
    showTagDropdown: false
  });

  setArrowRef = (ref) => this.itemStatusRef = ref;
  setTagRef = (ref) => this.tagRef = ref;
  setTagDropdownRef = (ref) => this.tagDropdownRef = ref;

  handleShowTagTooltip = () => {
    !this.state.showTagDropdown && 
    this.setState({
      showTagTooltip: true,
    })
  }

  handleCloseTagTooltip = () => {
    this.setState({
      showTagTooltip: false,
    })
  }

  getTagTooltipContent = () => {
    return (
      <span>Change Status</span>
    )
  }


  renderCheckbox = () => {
    const { isAllChecked, handleChangeAllChecked } = this.props;
    return (
      <div className={styles["checkbox-wrapper"]}>
        <Checkbox
          isChecked={isAllChecked}
          handleChange={handleChangeAllChecked(isAllChecked)}
        />
      </div>
    );
  }

  renderArrow = () => {
    const { handleSelectArrow, arrowList } = this.props
    const { showArrowDropdown } = this.state;
    return (
      <div className={styles['arrow-wrapper']} onClick={this.handleClickArrow} ref={this.setArrowRef}>
        <FontAwesomeIcon icon="caret-down" />
        {showArrowDropdown &&
          <div className={styles['dropdown-wrapper']}>
            <CustomDropdown
              list={arrowList}
              inputRef={this.itemStatusRef}
              dropdownClose={this.dropdownClose}
              handleSelect={handleSelectArrow}
            />
          </div>
        }
      </div>
    );
  };

  renderTag = () => {
    const { handleChangeStatus, tagList } = this.props
    const { showTagDropdown, showTagTooltip } = this.state;
    return (
      <div
        className={styles['tag-wrapper']}
        onClick={this.handleClickTag}
        ref={this.setTagRef}
        onMouseEnter={this.handleShowTagTooltip}
        onMouseLeave={this.handleCloseTagTooltip}
      >
        <FontAwesomeIcon icon="tags" />
        {showTagDropdown &&
          <div className={styles['dropdown-wrapper']} ref={this.setTagDropdownRef}>
            <CustomDropdown
              list={tagList}
              inputRef={this.tagRef}
              dropdownClose={this.dropdownClose}
              handleSelect={handleChangeStatus}
            />
          </div>
        }
        {showTagTooltip && 
          <div className={styles['tooltip-wrapper']}>
            <Tooltip content={this.getTagTooltipContent()} direction="bottom" />
          </div>
        }
      </div>
    );
  };

  render () {
    return (
      <div className={styles['container']}>
        {this.renderCheckbox()}
        {this.renderArrow()}
        {this.renderTag()}
      </div>
    )
  }
}