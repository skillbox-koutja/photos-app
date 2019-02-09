import React from 'react';
import {NavBar} from '../index';

import PropTypes from 'prop-types';
import PhotoList from '../photo/PhotoList';
import {Button} from 'reactstrap';


export class Feed extends React.Component {
    componentDidMount() {
        document.addEventListener('scroll', this.trackScrolling, false);
        this.loadPhotos(1);
    }

    loadPhotos(offset) {
        this.props.getPhotos(offset, () => {
            document.addEventListener('scroll', this.trackScrolling, false)
        });
    }

    isBottom(el) {
        return el.getBoundingClientRect().bottom <= window.innerHeight;
    }

    componentWillUnmount() {
        document.removeEventListener('scroll', this.trackScrolling, false);
    }

    trackScrolling = () => {
        const wrappedElement = document.getElementById('root');
        if (this.isBottom(wrappedElement)) {
            this.loadPhotos();
            document.removeEventListener('scroll', this.trackScrolling, false);
        }
    };

    renderTemplate = () => {
        const {
            photos,
            error,
            selectPhoto,
        } = this.props;

        if (error) {
            return <p className="error">Во время загрузки фото произошла ошибка</p>;
        }

        return <PhotoList
            photos={photos}
            selectPhoto={selectPhoto}
        />;
    };

    render() {
        const {isFetching} = this.props;
        return (
            <React.Fragment>
                <NavBar/>
                {this.renderTemplate()}
                {isFetching ? <p>Загрузка...</p> : <Button onClick={() => this.loadPhotos()}>Загрузить еще</Button>}

            </React.Fragment>
        );
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