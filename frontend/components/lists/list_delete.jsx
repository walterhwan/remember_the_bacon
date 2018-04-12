import React from 'react';

class ListDelete extends React.Component {
  constructor(props) {
    super(props);

    this.handleDeleteList = this.handleDeleteList.bind(this);
  }

  handleDeleteList(e) {
    e.preventDefault();
    const confirmDeleteList = document.getElementsByClassName('confirm-delete-list-div modal')[0];
    this.props.deleteList(confirmDeleteList.data);

    this.props.history.push(`/lists/${this.props.lists[0].id}`);

    this.closeModal();
  }

  closeModal() {
    const screen = document.getElementsByClassName('modal-screen modal')[0];
    const modals = document.getElementsByClassName('modal');
    for (const modal of modals) {
      modal.classList.remove('is-open');
      screen.classList.remove('is-open');
    }
  }

  render() {
    const listId = this.props.match.params.listId;
    const lists = this.props.lists;
    return (
      <div className='confirm-delete-list-div modal'>
        <form
          onSubmit={this.handleDeleteList}
          className='cofirm-delete-list-form'>
          <h1>Remove list</h1>
          <p>{'Are you sure you wish to remove this list?'}</p>
          <ul>
            <li>
              <input
                type='submit'
                value='Yes, remove list'>
              </input>
            </li>
            <li>
              <input
                type='button'
                value='Cancel'
                onClick={this.closeModal}>
              </input>
            </li>
          </ul>
        </form>
      </div>
    );
  }
}

export default ListDelete;
