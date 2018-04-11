import React from 'react';

class ListForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.list;

    this.handleSubmit = this.handleSubmit.bind(this);

    const closeModal = this.closeModal;
    document.addEventListener('keyup', (e) => {
      if (e.keyCode === 27) {
        closeModal();
      }
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const name = this.state.name.trim();
    const formInput = document.getElementById(`update-list`);
    const newState = { name, id: formInput.data };

    if (name) {
      this.props.action(newState);
      this.closeModal();
      this.setState({name: ''});
    }
  }

  closeModal() {
    const screen = document.getElementsByClassName('modal-screen modal')[0];
    const modals = document.getElementsByClassName('modal');
    for (const modal of modals) {
      modal.classList.remove('is-open');
      screen.classList.remove('is-open');
    }
  }

  update(field) {
    return (e) => this.setState({[field]: e.target.value});
  }

  render() {
    const list = this.state;
    const formType = this.props.formType;
    return (
      <div className={`modal-form-list-div modal ${formType}`}>
        <i
          onClick={this.closeModal}
          className="material-icons close-form-list">
          clear
        </i>
        <form
          onSubmit={this.handleSubmit}
          className='modal-form-list-form'>
          <h1>{this.props.title}</h1>
          <label htmlFor='form-list'>
            {this.props.label}
          </label>
          <input
            id={`${formType}-list`}
            type='text'
            className='form-list-input'
            value={list.name}
            onChange={this.update('name')}
            autoComplete="off" />
          <ul>
            <li>
              <input
                type='submit'
                value={formType === 'create' ? 'Add' : 'Save'}>
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

export default ListForm;
