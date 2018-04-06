import React from 'react';
import merge from 'lodash/merge';

class ListCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.list;

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const name = this.state.name.trim();
    const newState = { name };

    if (name) {
      this.props.createList(newState);
      this.handleCloseModal();
    }
  }

  handleCloseModal() {
    const modals = document.getElementsByClassName('modal');
    for (const modal of modals) {
      modal.classList.remove('is-open');
    }
  }

  update(field) {
    return (e) => this.setState({[field]: e.target.value});
  }

  render() {
    const list = this.state;
    return (
      <div className='modal-create-list-div modal'>
        <i
          onClick={this.handleCloseModal}
          className="material-icons close-create-list">
          clear
        </i>
        <form
          onSubmit={this.handleSubmit}
          className='modal-create-list-form'>
          <h1>Add a list</h1>
          <label htmlFor='create-list'>
            Please enter a new list name:
          </label>
          <input
            id='create-list'
            type='text'
            className='create-list-input'
            value={list.name}
            onChange={this.update('name')} />
          <ul>
            <li>
              <input
                type='submit'
                value='Add'>
              </input>
            </li>
            <li>
              <input
                type='button'
                value='Cancel'
                onClick={this.handleCloseModal}>
              </input>
            </li>
          </ul>
        </form>
      </div>
    );
  }
}

export default ListCreate;
