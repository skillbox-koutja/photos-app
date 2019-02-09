import {Button} from "reactstrap";
import {FontAwesomeIcon as Icon} from "@fortawesome/react-fontawesome";
import {faHeart as fasHeart} from "@fortawesome/free-solid-svg-icons/faHeart";
import {faHeart as farHeart} from "@fortawesome/free-regular-svg-icons/faHeart";
import React from "react";
import numeral from 'numeral';

export default class Like extends React.Component {
    renderLikes = (photo) => {
        const icon = photo.liked_by_user ? <Icon icon={fasHeart}/> : <Icon icon={farHeart}/>,
            likes = photo.likes || 0,
            format = Math.abs(likes) >= 1000 ? '0.0a' : '0a';
        return (
            <React.Fragment>
                {icon} {numeral(likes).format(format)}
            </React.Fragment>
        );
    };

    render() {
        const {
            toggleLike,
            photo,
        } = this.props;
        const likes = this.renderLikes(photo);
        return toggleLike ?
            <Button onClick={() => toggleLike(photo)}>{likes}</Button> :
            <span>{likes}</span>
    }
}