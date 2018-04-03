import { connect } from 'react-redux';
import PostIndex from './post_index';
import { fetchPosts, deletePost } from '../../actions/post_actions';

const mapStateToProps = (state) => {
  return {
    posts: Object.values(state.posts),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: () => dispatch(fetchPosts()),
    deletePost: (id) => dispatch(deletePost(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostIndex);
