import React from 'react';
import {connect} from 'react-redux';
import {Feed} from '../components/feed/Feed';
import {getPhotos} from '../actions/FeedActions';
import {toggleLike} from '../actions/UserActions';

class FeedContainer extends React.Component {
    render() {
        const {feed, getPhotos, toggleLike} = this.props;
        return (
            <Feed
                photos={feed.photos}
                isFetching={feed.isFetching}
                error={feed.error}
                getPhotos={getPhotos}
                toggleLike={toggleLike}
            />
        )
    }
}

const mapStateToProps = state => {
    return {
        feed: state.feed,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        getPhotos: () => dispatch(getPhotos()),
        toggleLike: (photo) => dispatch(toggleLike(photo)),
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FeedContainer);
