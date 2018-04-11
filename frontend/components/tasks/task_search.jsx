import React from 'react';
import TaskIndexContainer from './task_index_container';
import TaskCreateContainer from './task_create_container';
import { toggleTaskDetailSection } from '../../util/css_util.jsx';

const applySearchOnFocusEvent = () => {
  let searchInput = document.getElementsByClassName('task-search')[0];
  let searchIcon = document.getElementsByClassName('search-icon')[0];
  let searchForm = document.getElementsByClassName('search-form')[0];

  searchInput.addEventListener("focus", function () {
    searchIcon.style.color = 'gray';
    searchForm.style.backgroundColor = 'white';
  });

  searchInput.addEventListener("focusout", function () {
    searchIcon.style.color = 'white';
    searchForm.style.backgroundColor = '#417CE1';
  });
};

class TaskSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {searchTerm: ''};

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    applySearchOnFocusEvent();
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.fetchTaskSearch(this.state.searchTerm);
  }

  update(field) {
    return (e) =>
      this.setState({[field]: e.target.value});
  }

  render() {
    return (
      <form
        className="search-form"
        id='search-form'
        onSubmit={this.handleSubmit}>
        <i className="material-icons search-icon">search</i>
        <input
          className="task-search"
          type='search'
          onChange={this.update('searchTerm')} />
      </form>
    );
  }
}

export default TaskSearch;
