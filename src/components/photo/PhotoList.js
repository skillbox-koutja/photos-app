import React from 'react';
import PropTypes from 'prop-types';
import {
    Row,
    Col,
} from 'reactstrap';


import PhotoCard from './PhotoCard';

const createGridRows = photos => {
    const rows = [];
    let cols = [];
    for (let i = 0, r = 0; i < photos.length; i++, r++) {
        cols.push(photos[i]);
        if (2 === r) {
            r = -1;
            rows.push(cols);
            cols = [];
        }
    }
    if (cols.length > 0) {
        rows.push(cols);
    }
    return rows;
};

export default class PhotoList extends React.Component {
    renderPhoto = (photo) => {
        const {selectPhoto} = this.props;
        return (
            <Col sm="4"
                 key={photo.id}>
                <PhotoCard
                    photo={photo}
                    src={photo.urls.small}
                    selectPhoto={selectPhoto}
                    author={photo.user.name}
                    authorLink={photo.user.links.html}
                    createdAt={photo.created_at}
                />
            </Col>
        );
    };

    render() {
        const {photos} = this.props;
        console.log(photos[0]);
        return createGridRows(photos).map((cols, i) => (
            <Row key={i}> {
                cols.map(this.renderPhoto)
            }</Row>
        ));
    }
}

PhotoList.propTypes = {
    photos: PropTypes.array.isRequired,
    selectPhoto: PropTypes.func.isRequired,
};
