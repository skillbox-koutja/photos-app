import React from 'react';
import {deselectPhoto, getPhoto, toggleLike} from '../actions/PhotoActions';
import {connect} from 'react-redux';
import {Alert, Button, NavItem} from 'reactstrap';
import {NavBar, TargetPhoto} from '../components';
import {push} from 'connected-react-router';

class TargetPhotoContainer extends React.Component {
  componentDidMount() {
    if (!this.props.target) {
      this.loadPhoto();
    }
  }

  loadPhoto() {
    const {match} = this.props;
    this.props.getPhoto(match.params.id);
  }

  render() {
    const {
      photo,
      error,
      deselectPhoto,
      authorizedUser,
      goHome,
    } = this.props;
    const toggleLike = authorizedUser ? this.props.toggleLike : null;
    if (error) {
      return <Alert color="danger">Во время загрузки фото произошла ошибка</Alert>;
    }

    const target = photo.target,
      isLoading = photo.isLoading || !target;
    if (isLoading) {
      return <Alert color="info">Загружаю...</Alert>;
    }

    return <React.Fragment>
      <NavBar>
        <NavItem>
          <Button onClick={goHome}>Вернуться назад</Button>
        </NavItem>
      </NavBar>
      <TargetPhoto
        target={target}
        isLoading={isLoading}
        toggleLike={toggleLike}
        deselectPhoto={deselectPhoto}
      />
    </React.Fragment>;
  }
}

const mapStateToProps = state => {
  return {
    authorizedUser: state.user.authorizedUser,
    photo: state.photo,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleLike: (photo) => dispatch(toggleLike(photo)),
    deselectPhoto: (photo) => dispatch(deselectPhoto(photo)),
    getPhoto: (id) => dispatch(getPhoto(id)),
    goHome: () => dispatch(push('/')),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TargetPhotoContainer);
