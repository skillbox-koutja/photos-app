import React from 'react';
import {connect} from 'react-redux';
import {Feed} from '../components/feed/Feed';
import {getPhotos} from '../actions/FeedActions';
import {
    toggleLike,
    selectPhoto,
    deselectPhoto,
} from '../actions/PhotoActions';

class FeedContainer extends React.Component {
    render() {
        const {
            photo,
            feed,
            getPhotos,
            toggleLike,
            selectPhoto,
            deselectPhoto,
        } = this.props;
        return (
            <Feed
                target={photo.target}
                photos={feed.photos}
                isFetching={feed.isFetching}
                error={feed.error}
                getPhotos={getPhotos}
                toggleLike={toggleLike}
                selectPhoto={selectPhoto}
                deselectPhoto={deselectPhoto}
            />
        )
    }
}

const mapStateToProps = state => {
    return {
        feed: state.feed,
        photo: state.photo,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        getPhotos: () => dispatch(getPhotos()),
        selectPhoto: (photo) => dispatch(selectPhoto(photo)),
        deselectPhoto: (photo) => dispatch(deselectPhoto(photo)),
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FeedContainer);
