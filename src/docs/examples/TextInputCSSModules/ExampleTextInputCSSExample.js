import React from 'react';
import TextInputCSSModules from 'kar-react/TextInputCSSModules';

/** Required TextBox with error */
export default class ExampleError extends React.Component {
    render() {
        return (
            <TextInputCSSModules
                htmlId="example-error"
                label="First Name"
                name="firstname"
                onChange={() => { }}
                required
                error="First name is required."
            />
        )
    }
}
