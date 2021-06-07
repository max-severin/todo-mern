import PropTypes from 'prop-types';

const LoadingItem = ({
  wrapperAnimation, grandParentAnimation, parentAnimation, itemAnimation
}) => (
  <span className={wrapperAnimation}>
    <span className={grandParentAnimation}>
      <span className={parentAnimation}>
        <span className={`loading ${itemAnimation}`} />
      </span>
    </span>
  </span>
);

LoadingItem.propTypes = {
  wrapperAnimation: PropTypes.string.isRequired,
  grandParentAnimation: PropTypes.string.isRequired,
  parentAnimation: PropTypes.string.isRequired,
  itemAnimation: PropTypes.string.isRequired,
};

export default LoadingItem;
