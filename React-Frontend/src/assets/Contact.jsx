import PropTypes from 'prop-types'
export default function Contact(props) {
    return (
        <div>
            <h2>{props.email} {props.phone}</h2>
            <p>Send Me Message</p>
        </div>
    );
}

Contact.propTypes = {
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired
};