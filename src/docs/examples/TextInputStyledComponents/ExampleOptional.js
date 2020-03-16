import React from 'react';
import TextInputStyledComponents from 'kar-react/TextInputStyledComponents';

/** Optional TextBox */
export default class ExampleOptional extends React.Component {
    render() {
        return (
            <TextInputStyledComponents
                htmlId="example-optional"
                label="First Name"
                name="firstname"
                onChange={() => { }}
            />
        )
    }
}
