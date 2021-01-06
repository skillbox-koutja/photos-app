import {Card, CardBody, CardImg, CardLink, Row} from 'reactstrap';
import React from 'react';
import PropTypes from 'prop-types';
import Like from './Like';

export default class PhotoCard extends React.Component {
  render() {
    const {
      author,
      authorLink,
      src,
      uploadedAt,
      selectPhoto,
      toggleLike,
      photo,
    } = this.props;
    let date = (new Date(uploadedAt)).toLocaleDateString();
    return (
      <Card className="photo">
        <CardImg
          src={src}
          alt="thumbnail unsplash"
          onClick={() => selectPhoto && selectPhoto(photo)}
        />
        <CardBody>
          <Row>
            <Like photo={photo} toggleLike={toggleLike} />
            <p className="photo-author card-body-row__photo-author">
              Автор: <CardLink href={authorLink}>{author}</CardLink>
            </p>
          </Row>
          <Row>
            <p>
              Дата публикации: {date}
            </p>
          </Row>
        </CardBody>
      </Card>
    );
  }
}

PhotoCard.propTypes = {
  author: PropTypes.string.isRequired,
  authorLink: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  uploadedAt: PropTypes.string.isRequired,
  photo: PropTypes.object.isRequired,
  toggleLike: PropTypes.func,
  selectPhoto: PropTypes.func,
};
