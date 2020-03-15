import React from 'react'
import PropTypes from 'prop-types'

/**  A super lame component that displays hellow*/
const HelloWorld = ({ message }) => {
    return (
        <div>
            <h1>Hello {message}</h1>
        </div>
    )
}

HelloWorld.propTypes = {
    /** Message to display */
    message: PropTypes.string
};

HelloWorld.defaultProps = {
    message: 'World'
};

export default HelloWorld;
