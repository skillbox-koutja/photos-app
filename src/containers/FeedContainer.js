import React from 'react';
import {connect} from 'react-redux';
import {Feed} from '../components/feed/Feed';
import {getPhotos} from '../actions/FeedActions';
import {
    selectPhoto,
    deselectPhoto,
} from '../actions/PhotoActions';

class FeedContainer extends React.Component {
    render() {
        const {
            photo,
            feed,
            getPhotos,
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
        getPhotos: (offset, success) => dispatch(getPhotos(offset, success)),
        selectPhoto: (photo) => dispatch(selectPhoto(photo)),
        deselectPhoto: (photo) => dispatch(deselectPhoto(photo)),
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FeedContainer);
