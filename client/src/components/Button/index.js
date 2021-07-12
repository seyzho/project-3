import propTypes from 'prop-types';

const Button = ({ value, color, text, height, onClick }) => {
    return (
        <div>
            <button
                value={value}
                onClick={onClick}
                style={{ backgroundColor: color, height}}
                className='btn saveBtn'
            >
                {text}
            </button>
        </div>
    )
}

Button.defaultProps = {
    color: 'steelblue',
}

Button.propTypes = {
    value: propTypes.string,
    text: propTypes.string,
    color: propTypes.string,
    onClick: propTypes.func,
    height: propTypes.string,
}

export default Button;
