import React from 'react';

class ListIndex extends React.Component {
  componentDidMount() {
    this.props.fetchListIndex();
  }

  renderListItem(list) {
    return (
      <li key={`list-item-${list.id}`}>
        <p>{list.name}</p>
      </li>
    );
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
          <i className="material-icons add-box">add_box</i>
        </li>
        {
          lists.map((list)=> this.renderListItem(list))
        }
      </ul>
    );
  }
}

export default ListIndex;
