import React from 'react';
import PropTypes from 'prop-types';
import {
    Card,
    CardImg,
    CardBody,
    Row,
    Col,
    Button
} from 'reactstrap';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHeart as fasHeart} from '@fortawesome/free-solid-svg-icons/faHeart';
import {faHeart as farHeart} from '@fortawesome/free-regular-svg-icons/faHeart';

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

export default class ListPhoto extends React.Component {
    renderPhoto = (photo) => {
        const {openModal, toggleLike} = this.props;
        return (
            <Col sm="4"
                 key={photo.id}>
                <Card className="photo">
                    <CardImg
                        key={photo.id}
                        src={photo.urls.small}
                        alt="thumbnail unsplash"
                        onClick={() => openModal(photo.urls.regular)}
                    />
                    <CardBody>
                        <Button onClick={() => toggleLike(photo)}>
                            {photo.liked_by_user ? <FontAwesomeIcon icon={fasHeart}/> :
                                <FontAwesomeIcon icon={farHeart}/>}
                            {photo.likes} key={photo.id}
                        </Button>
                    </CardBody>
                </Card>
            </Col>
        )
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

ListPhoto.propTypes = {
    photos: PropTypes.array.isRequired,
    openModal: PropTypes.func.isRequired,
    toggleLike: PropTypes.func.isRequired,
};
