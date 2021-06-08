import PropTypes from 'prop-types';
import './Message.scss';

const Message = ({ message, additionalClassName }) => (
  <span className={`message ${additionalClassName}`}>{message}</span>
);

Message.propTypes = {
  message: PropTypes.string.isRequired,
  additionalClassName: PropTypes.string,
};

Message.defaultProps = {
  additionalClassName: '',
};

export default Message;
