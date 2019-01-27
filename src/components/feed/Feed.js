import React from 'react'
import {NavBar} from "../index";

// import PropTypes from 'prop-types'

export class Feed extends React.Component {
    render() {
        return (
            <React.Fragment>
                <NavBar/>
                <div className="feed">
                    картинки
                </div>
            </React.Fragment>
        )
    }
}

// Feed.propTypes = {
//     photos: PropTypes.array.isRequired,
//     getPhotos: PropTypes.func.isRequired,
//     detailPicture: PropTypes.func.isRequired,
//     error: PropTypes.string,
//     isFetching: PropTypes.bool.isRequired,
// };