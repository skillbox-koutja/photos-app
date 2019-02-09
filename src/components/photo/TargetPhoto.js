import React from 'react';
import PropTypes from 'prop-types';
import PhotoCard from './PhotoCard';

class TargetPhoto extends React.Component {
    render() {
        const {
            target,
            toggleLike,
        } = this.props;

        return <PhotoCard
            author={target.user.name}
            authorLink={target.user.links.html}
            src={target.urls.full}
            createdAt={target.created_at}
            photo={target}
            toggleLike={toggleLike}
        />;
    }
}

export default TargetPhoto;

TargetPhoto.propTypes = {
    target: PropTypes.object.isRequired,
    isLoading: PropTypes.bool.isRequired,
    toggleLike: PropTypes.func.isRequired,
    deselectPhoto: PropTypes.func,
};