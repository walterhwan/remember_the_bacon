import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const applyListItemEvent = () => {
  const listItemDivs = document.getElementsByClassName('list-item-div');
  const listBodies = document.getElementsByClassName('list-body');
  const icons = document.getElementsByClassName('list-option-icon');
  for (let i = 0; i < listItemDivs.length; i++) {
    listBodies[i].addEventListener('mouseover', () => {
      listItemDivs[i].classList.add('hovered');
      icons[i].classList.add('hovered');
    });
    listBodies[i].addEventListener('mouseout', () => {
      listItemDivs[i].classList.remove('hovered');
      icons[i].classList.remove('hovered');
    });
  }
};

class ListIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = props;
  }

  componentDidMount() {
    this.props.fetchListIndex()
      .then(() => applyListItemEvent());

    this.handleOpenConfirmDelete = this.handleOpenConfirmDelete.bind(this);
    this.handleOpenModal = this.handleOpenModal.bind(this);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    applyListItemEvent();
  }

  renderListItem(list) {
    return (
      <div
        className='list-item-div'
        tabIndex="-1"
        key={`list-item-${list.id}`}
        onBlur={this.handleOutFocusEvent(list.id)}>
        <div className='list-head'>
        </div>
        <div
          className='list-body'>
          <NavLink
            className='list-item-a'
            activeClassName="active"
            to={`/lists/${list.id}`}>
            <p>{list.name}</p>
          </NavLink>
        </div>
        <div className='list-tail'>
          <i
            className="material-icons list-option-icon"
            onClick={this.handleToggleDropDown(list.id)}>
            settings_applications
          </i>
        </div>
        <div
          className='list-drop-down-menu-div hidden'
          key={`list-dropdown-${list.id}`}
          id={`list-drop-down-menu-div-${list.id}`}>
          <div
            onClick={this.handleOpenModal('update', list.id)}>
            <p>Rename list</p>
          </div>
          <div
            onClick={this.handleOpenConfirmDelete(list.id)}>
            <p>Remove list</p>
          </div>
        </div>
      </div>
    );
  }

  handleOutFocusEvent(id) {
    return () => {
      const dropDown = document.getElementById(`list-drop-down-menu-div-${id}`);
      dropDown.classList.add('hidden');
    };
  }

  handleToggleDropDown(id) {
    return () => {
      const dropDown = document.getElementById(`list-drop-down-menu-div-${id}`);
      if (dropDown.classList.contains('hidden')) {
        dropDown.classList.remove('hidden');
      } else {
        dropDown.classList.add('hidden');
      }
    };
  }

  handleOpenConfirmDelete(id) {
    return () => {
      const screen = document.getElementsByClassName('modal-screen modal')[0];
      const confirmDeleteList = document.getElementsByClassName('confirm-delete-list-div modal')[0];
      confirmDeleteList.classList.add('is-open');
      screen.classList.add('is-open');

      confirmDeleteList.data = id;

      const dropDowns = document.getElementsByClassName('list-drop-down-menu-div');
      for (const dropDown of dropDowns) {
        dropDown.classList.add('hidden');
      }

    };
  }

  handleOpenModal(formType, id) {
    const context = this;
    return () => {
      const list = context.props.lists.find((el) => el.id === id);

      const screen = document.getElementsByClassName('modal-screen modal')[0];
      const modal = document.getElementsByClassName(`modal ${formType}`)[0];
      const formInput = document.getElementById(`${formType}-list`);
      modal.classList.add('is-open');
      screen.classList.add('is-open');
      formInput.focus();

      if (id !== undefined) {
        formInput.data = list.id;
        formInput.value = list.name;
        const dropDown = document.getElementById(`list-drop-down-menu-div-${id}`);
        dropDown.classList.add('hidden');
      }
    };
  }

  render() {
    const { lists } = this.props;
    return (
      <ul
        className="list-index-ul">
        <li className="create-list-li">
          <i className="material-icons">
            arrow_drop_down
          </i>
          <p onClick={()=>console.log('clicked')}>
            Lists
          </p>
          <i
            className="material-icons add-box"
            onClick={this.handleOpenModal('create')}>
            add_box
          </i>
        </li>
        {
          lists.map((list)=> this.renderListItem(list))
        }
      </ul>
    );
  }
}

export default ListIndex;
