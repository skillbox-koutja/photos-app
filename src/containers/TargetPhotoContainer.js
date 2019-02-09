import React from 'react';
import {deselectPhoto, toggleLike, getPhoto} from '../actions/PhotoActions';
import {connect} from 'react-redux';
import {Alert} from 'reactstrap';
import {TargetPhoto} from '../components';

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
            toggleLike,
            deselectPhoto,
        } = this.props;

        if (error) {
            return <Alert color="danger">Во время загрузки фото произошла ошибка</Alert>;
        }

        const target = photo.target,
            isLoading = photo.isLoading || !target;
        if (isLoading) {
            return <Alert color="info">Загружаю...</Alert>;
        }

        return <TargetPhoto
            target={target}
            isLoading={isLoading}
            toggleLike={toggleLike}
            deselectPhoto={deselectPhoto}
        />;
    }
}

const mapStateToProps = state => {
    return {
        photo: state.photo,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        toggleLike: (photo) => dispatch(toggleLike(photo)),
        deselectPhoto: (photo) => dispatch(deselectPhoto(photo)),
        getPhoto: (id) => dispatch(getPhoto(id)),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TargetPhotoContainer);
