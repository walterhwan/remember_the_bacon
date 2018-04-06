import React from 'react';
import { NavLink } from 'react-router-dom';

class ListIndex extends React.Component {
  componentDidMount() {
    this.props.fetchListIndex();
  }

  renderListItem(list) {
    return (
      <NavLink
        key={`list-item-${list.id}`}
        to={`/main/lists/${list.id}`}>
        <li >
          <p>{list.name}</p>
        </li>
      </NavLink>
    );
  }

  handleOpenModal() {
    const modals = document.getElementsByClassName('modal');
    for (const modal of modals) {
      modal.classList.add('is-open');
    }
  }

  render() {
    const { lists } = this.props;
    return (
      <ul className="list-index-ul">
        <li className="create-list-li">
          <i className="material-icons">
            arrow_drop_down
          </i>
          <p onClick={()=>console.log('clicked')}>
            Lists
          </p>
          <i
            className="material-icons add-box"
            onClick={this.handleOpenModal}>
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
