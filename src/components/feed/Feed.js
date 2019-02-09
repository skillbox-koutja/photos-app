import React from 'react';
import {NavBar} from '../index';

import PropTypes from 'prop-types';
import PhotoList from '../photo/PhotoList';

export class Feed extends React.Component {
    componentDidMount() {
        this.props.getPhotos();
    }

    renderTemplate = () => {
        const {
            photos,
            isFetching,
            error,
            selectPhoto,
        } = this.props;

        if (error) {
            return <p className="error">Во время загрузки фото произошла ошибка</p>
        }

        if (isFetching) {
            return <p>Загрузка...</p>
        } else {
            return <PhotoList
                photos={photos}
                selectPhoto={selectPhoto}
            />
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
    target: PropTypes.object,
    photos: PropTypes.array.isRequired,
    error: PropTypes.string,
    isFetching: PropTypes.bool.isRequired,
    getPhotos: PropTypes.func.isRequired,
    selectPhoto: PropTypes.func.isRequired,
};