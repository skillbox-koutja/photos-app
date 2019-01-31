import React from 'react';
import {NavBar} from '../index';

import PropTypes from 'prop-types';
import PhotoManager from '../photo/PhotoManager';

export class Feed extends React.Component {
    componentDidMount() {
        // this.props.getPhotos();
    }
    renderTemplate = () => {
        const { photos, isFetching, error, toggleLike} = this.props;

        if (error) {
            return <p className="error">Во время загрузки фото произошла ошибка</p>
        }

        if (isFetching) {
            return <p>Загрузка...</p>
        } else {
            return <PhotoManager photos={photos} toggleLike={toggleLike} />
        }
    };
    render() {
        return (
            <React.Fragment>
                <NavBar/>
                {this.renderTemplate()}
            </React.Fragment>
        )
    }
}

Feed.propTypes = {
    photos: PropTypes.array.isRequired,
    error: PropTypes.string,
    isFetching: PropTypes.bool.isRequired,
    getPhotos: PropTypes.func.isRequired,
    toggleLike: PropTypes.func.isRequired,
};