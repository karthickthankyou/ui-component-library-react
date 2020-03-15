module.exports = /* eslint-disable */ [{"name":"EyeIcon","description":"SVG Eye Icon","code":"import React from 'react';\n\n/** SVG Eye Icon */\nfunction EyeIcon() {\n    // Attribution: Fabián Alexis at https://commons.wikimedia.org/wiki/File:Antu_view-preview.svg\n    return (\n        <svg width=\"16\" height=\"16\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 22 22\">\n            <g transform=\"matrix(.02146 0 0 .02146 1 1)\" fill=\"#4d4d4d\">\n                <path d=\"m466.07 161.53c-205.6 0-382.8 121.2-464.2 296.1-2.5 5.3-2.5 11.5 0 16.9 81.4 174.9 258.6 296.1 464.2 296.1 205.6 0 382.8-121.2 464.2-296.1 2.5-5.3 2.5-11.5 0-16.9-81.4-174.9-258.6-296.1-464.2-296.1m0 514.7c-116.1 0-210.1-94.1-210.1-210.1 0-116.1 94.1-210.1 210.1-210.1 116.1 0 210.1 94.1 210.1 210.1 0 116-94.1 210.1-210.1 210.1\" />\n                <circle cx=\"466.08\" cy=\"466.02\" r=\"134.5\" />\n            </g>\n        </svg>\n    )\n}\n\nexport default EyeIcon;\n","examples":[{"name":"ExampleEyeIcon","description":"","code":"import React from 'react';\nimport EyeIcon from 'kar-react/EyeIcon';\n\nexport default function EyeIconExample() {\n    return <EyeIcon />;\n}\n"}]},{"name":"HelloWorld","description":"A super lame component that displays hellow","props":{"message":{"type":{"name":"string"},"required":false,"description":"Message to display","defaultValue":{"value":"'World'","computed":false}}},"code":"import React from 'react'\nimport PropTypes from 'prop-types'\n\n/**  A super lame component that displays hellow*/\nconst HelloWorld = ({ message }) => {\n    return (\n        <div>\n            <h1>Hello {message}</h1>\n        </div>\n    )\n}\n\nHelloWorld.propTypes = {\n    /** Message to display */\n    message: PropTypes.string\n};\n\nHelloWorld.defaultProps = {\n    message: 'World'\n};\n\nexport default HelloWorld;\n","examples":[{"name":"ExampleHelloWorld","description":"Custom message","code":"import React from 'react';\nimport HelloWorld from 'kar-react/HelloWorld';\n\n/** Custom message */\nexport default function ExampleHelloWorld() {\n    return <HelloWorld message=\"Karthick Ragavendran!!\" />\n}\n"}]},{"name":"Label","description":"Label with required field display, htmlFor, and block styling","props":{"htmlFor":{"type":{"name":"string"},"required":true,"description":"HTML ID for associated input"},"label":{"type":{"name":"string"},"required":true,"description":"Label text"},"required":{"type":{"name":"bool"},"required":false,"description":"Display asterisk after label if true"}},"code":"import React from 'react';\nimport PropTypes from 'prop-types';\n\n/** Label with required field display, htmlFor, and block styling */\nfunction Label({ htmlFor, label, required }) {\n    return (\n        <label style={{ display: 'block' }} htmlFor={htmlFor}>\n            {label} {required && <span style={{ color: 'red' }}> *</span>}\n        </label>\n    )\n}\n\nLabel.propTypes = {\n    /** HTML ID for associated input */\n    htmlFor: PropTypes.string.isRequired,\n\n    /** Label text */\n    label: PropTypes.string.isRequired,\n\n    /** Display asterisk after label if true */\n    required: PropTypes.bool\n};\n\nexport default Label;\n","examples":[{"name":"ExampleLabelOptional","description":"Optional label","code":"import React from 'react';\nimport Label from 'kar-react/Label';\n\n/** Optional label */\nexport default function ExampleOptional() {\n    return <Label htmlFor=\"test\" label=\"test\" />\n}\n"},{"name":"ExampleRequired","description":"Required label","code":"import React from 'react';\nimport Label from 'kar-react/Label';\n\n/** Required label */\nexport default function ExampleRequired() {\n    return <Label htmlFor=\"test\" label=\"test\" required />\n}"}]},{"name":"PasswordInput","description":"Password input with integrated label, quality tips, and show password toggle.","props":{"htmlId":{"type":{"name":"string"},"required":true,"description":"Unique HTML ID. Used for tying label to HTML input. Handy hook for automated testing."},"name":{"type":{"name":"string"},"required":true,"description":"Input name. Recommend setting this to match object's property so a single change handler can be used by convention."},"value":{"type":{"name":"any"},"required":false,"description":"Password value"},"label":{"type":{"name":"string"},"required":false,"description":"Input label","defaultValue":{"value":"'Password'","computed":false}},"onChange":{"type":{"name":"func"},"required":true,"description":"Function called when password input value changes"},"maxLength":{"type":{"name":"number"},"required":false,"description":"Max password length accepted","defaultValue":{"value":"50","computed":false}},"placeholder":{"type":{"name":"string"},"required":false,"description":"Placeholder displayed when no password is entered"},"showVisibilityToggle":{"type":{"name":"bool"},"required":false,"description":"Set to true to show the toggle for displaying the currently entered password","defaultValue":{"value":"false","computed":false}},"quality":{"type":{"name":"number"},"required":false,"description":"Display password quality visually via ProgressBar, accepts a number between 0 and 100"},"error":{"type":{"name":"string"},"required":false,"description":"Validation error to display"}},"code":"import React from 'react';\nimport PropTypes from 'prop-types';\nimport ProgressBar from '../ProgressBar';\nimport EyeIcon from '../EyeIcon';\nimport TextInput from '../TextInput';\n\n/** Password input with integrated label, quality tips, and show password toggle. */\nclass PasswordInput extends React.Component {\n    constructor(props) {\n        super(props);\n        this.state = {\n            showPassword: false\n        }\n    }\n\n    toggleShowPassword = event => {\n        this.setState(prevState => {\n            return { showPassword: !prevState.showPassword };\n        });\n        if (event) event.preventDefault();\n    }\n\n    render() {\n        const { htmlId, value, label, error, onChange, placeholder, maxLength, showVisibilityToggle, quality, ...props } = this.props;\n        const { showPassword } = this.state;\n\n        return (\n            <TextInput\n                htmlId={htmlId}\n                label={label}\n                placeholder={placeholder}\n                type={showPassword ? 'text' : 'password'}\n                onChange={onChange}\n                value={value}\n                maxLength={maxLength}\n                error={error}\n                required\n                {...props}>\n                {\n                    showVisibilityToggle &&\n                    <a\n                        href=\"\"\n                        onClick={this.toggleShowPassword}\n                        style={{ marginLeft: 5 }}>\n                        <EyeIcon />\n                    </a>\n                }\n                {\n                    value.length > 0 && quality && <ProgressBar percent={quality} width={130} />\n                }\n            </TextInput>\n        );\n    }\n}\n\nPasswordInput.propTypes = {\n    /** Unique HTML ID. Used for tying label to HTML input. Handy hook for automated testing. */\n    htmlId: PropTypes.string.isRequired,\n\n    /** Input name. Recommend setting this to match object's property so a single change handler can be used by convention.*/\n    name: PropTypes.string.isRequired,\n\n    /** Password value */\n    value: PropTypes.any,\n\n    /** Input label */\n    label: PropTypes.string,\n\n    /** Function called when password input value changes */\n    onChange: PropTypes.func.isRequired,\n\n    /** Max password length accepted */\n    maxLength: PropTypes.number,\n\n    /** Placeholder displayed when no password is entered */\n    placeholder: PropTypes.string,\n\n    /** Set to true to show the toggle for displaying the currently entered password */\n    showVisibilityToggle: PropTypes.bool,\n\n    /** Display password quality visually via ProgressBar, accepts a number between 0 and 100 */\n    quality: PropTypes.number,\n\n    /** Validation error to display */\n    error: PropTypes.string\n};\n\nPasswordInput.defaultProps = {\n    maxLength: 50,\n    showVisibilityToggle: false,\n    label: 'Password'\n};\n\nexport default PasswordInput;\n","examples":[{"name":"ExampleAllFeatures","description":"All features enabled","code":"import React from 'react';\nimport PasswordInput from 'kar-react/PasswordInput';\n\n/** All features enabled */\nclass ExampleAllFeatures extends React.Component {\n    constructor(props) {\n        super(props);\n\n        this.state = {\n            password: ''\n        };\n    }\n\n    getQuality() {\n        const length = this.state.password.length;\n        return length > 10 ? 100 : length * 10;\n    }\n\n    render() {\n        return (\n            <div>\n                <PasswordInput\n                    htmlId=\"password-input-example-all-features\"\n                    name=\"password\"\n                    onChange={event => this.setState({ password: event.target.value })}\n                    value={this.state.password}\n                    minLength={8}\n                    placeholder=\"Enter password\"\n                    showVisibilityToggle\n                    quality={this.getQuality()}\n                    {...this.props} />\n            </div>\n        )\n    }\n}\n\nexport default ExampleAllFeatures;\n"}]},{"name":"ProgressBar","description":"","props":{"percent":{"type":{"name":"number"},"required":true,"description":"Percent of progress completed"},"width":{"type":{"name":"number"},"required":true,"description":"Bar width"},"height":{"type":{"name":"number"},"required":false,"description":"Bar height","defaultValue":{"value":"5","computed":false}}},"code":"import React from 'react';\nimport PropTypes from 'prop-types';\n\nclass ProgressBar extends React.Component {\n    getColor = (percent) => {\n        if (this.props.percent === 100) return 'green';\n        return this.props.percent > 50 ? 'lightgreen' : 'red';\n    }\n\n    getWidthAsPercentOfTotalWidth = () => {\n        return parseInt(this.props.width * (this.props.percent / 100), 10);\n    }\n\n    render() {\n        const { percent, width, height } = this.props;\n        return (\n            <div style={{ border: 'solid 1px lightgray', width: width }}>\n                <div style={{\n                    width: this.getWidthAsPercentOfTotalWidth(),\n                    height,\n                    backgroundColor: this.getColor(percent)\n                }} />\n            </div>\n        );\n    }\n}\n\nProgressBar.propTypes = {\n    /** Percent of progress completed */\n    percent: PropTypes.number.isRequired,\n\n    /** Bar width */\n    width: PropTypes.number.isRequired,\n\n    /** Bar height */\n    height: PropTypes.number\n};\n\nProgressBar.defaultProps = {\n    height: 5\n};\n\nexport default ProgressBar;\n","examples":[{"name":"Example100Percent","description":"100 Percent and width height 20px","code":"import React from 'react';\nimport ProgressBar from 'kar-react/ProgressBar'\n\n/** 100 Percent and width height 20px */\nexport default function Example10Percent() {\n    return <ProgressBar percent={30} width={200} height={20} />\n}\n"},{"name":"Example10Percent","description":"10 Percent","code":"import React from 'react';\nimport ProgressBar from 'kar-react/ProgressBar'\n\n/** 10 Percent */\nexport default function Example10Percent() {\n    return <ProgressBar percent={10} width={200} />\n}\n"},{"name":"Example65Percent","description":"65 Percent","code":"import React from 'react';\nimport ProgressBar from 'kar-react/ProgressBar'\n\n/** 65 Percent */\nexport default function Example10Percent() {\n    return <ProgressBar percent={65} width={200} />\n}\n"}]},{"name":"TextInput","description":"Text input with integrated label to enforce consistency in layout, error display, label placement, and required field marker.","props":{"htmlId":{"type":{"name":"string"},"required":true,"description":"Unique HTML ID. Used for tying label to HTML input. Handy hook for automated testing."},"name":{"type":{"name":"string"},"required":true,"description":"Input name. Recommend setting this to match object's property so a single change handler can be used."},"label":{"type":{"name":"string"},"required":true,"description":"Input label"},"type":{"type":{"name":"enum","value":[{"value":"'text'","computed":false},{"value":"'number'","computed":false},{"value":"'password'","computed":false}]},"required":false,"description":"Input type","defaultValue":{"value":"\"text\"","computed":false}},"required":{"type":{"name":"bool"},"required":false,"description":"Mark label with asterisk if set to true","defaultValue":{"value":"false","computed":false}},"onChange":{"type":{"name":"func"},"required":true,"description":"Function to call onChange"},"placeholder":{"type":{"name":"string"},"required":false,"description":"Placeholder to display when empty"},"value":{"type":{"name":"any"},"required":false,"description":"Value"},"error":{"type":{"name":"string"},"required":false,"description":"String to display when error occurs"},"children":{"type":{"name":"node"},"required":false,"description":"Child component to display next to the input"}},"code":"import React from 'react';\nimport PropTypes from 'prop-types';\nimport Label from '../Label';\n\n/** Text input with integrated label to enforce consistency in layout, error display, label placement, and required field marker. */\nfunction TextInput({ htmlId, name, label, type = \"text\", required = false, onChange, placeholder, value, error, children, ...props }) {\n    return (\n        <div style={{ marginBottom: 16 }}>\n            <Label htmlFor={htmlId} label={label} required={required} />\n            <input\n                id={htmlId}\n                type={type}\n                name={name}\n                placeholder={placeholder}\n                value={value}\n                onChange={onChange}\n                style={error && { border: 'solid 1px red' }}\n                {...props} />\n            {children}\n            {error && <div className=\"error\" style={{ color: 'red' }}>{error}</div>}\n        </div>\n    );\n};\n\nTextInput.propTypes = {\n    /** Unique HTML ID. Used for tying label to HTML input. Handy hook for automated testing. */\n    htmlId: PropTypes.string.isRequired,\n\n    /** Input name. Recommend setting this to match object's property so a single change handler can be used. */\n    name: PropTypes.string.isRequired,\n\n    /** Input label */\n    label: PropTypes.string.isRequired,\n\n    /** Input type */\n    type: PropTypes.oneOf(['text', 'number', 'password']),\n\n    /** Mark label with asterisk if set to true */\n    required: PropTypes.bool,\n\n    /** Function to call onChange */\n    onChange: PropTypes.func.isRequired,\n\n    /** Placeholder to display when empty */\n    placeholder: PropTypes.string,\n\n    /** Value */\n    value: PropTypes.any,\n\n    /** String to display when error occurs */\n    error: PropTypes.string,\n\n    /** Child component to display next to the input */\n    children: PropTypes.node\n};\n\nexport default TextInput;\n","examples":[{"name":"ExampleError","description":"Required TextBox with error","code":"import React from 'react';\nimport TextInput from 'kar-react/TextInput';\n\n/** Required TextBox with error */\nexport default class ExampleError extends React.Component {\n    render() {\n        return (\n            <TextInput\n                htmlId=\"example-error\"\n                label=\"First Name\"\n                name=\"firstname\"\n                onChange={() => { }}\n                required\n                error=\"First name is required.\"\n            />\n        )\n    }\n}\n"},{"name":"ExampleOptional","description":"Optional TextBox","code":"import React from 'react';\nimport TextInput from 'kar-react/TextInput';\n\n/** Optional TextBox */\nexport default class ExampleOptional extends React.Component {\n    render() {\n        return (\n            <TextInput\n                htmlId=\"example-optional\"\n                label=\"First Name\"\n                name=\"firstname\"\n                onChange={() => { }}\n            />\n        )\n    }\n}\n"}]}]