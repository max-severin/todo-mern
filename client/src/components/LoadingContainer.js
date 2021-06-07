import PropTypes from 'prop-types';
import LoadingItem from './LoadingItem';

const LoadingContainer = ({ totalLoadingItems }) => (
  <div className="loading-wrapper">
    {[...Array(totalLoadingItems)].map((n, i) => (
      <LoadingItem
        key={i}
        wrapperAnimation={i % 2 === 0 ? 'animate-translate-positive' : 'animate-translate-negative'}
        grandParentAnimation="animate-rotate"
        parentAnimation="animate-scale"
        itemAnimation={i % 2 === 0 ? 'animate-color-1' : 'animate-color-2'}
      />
    ))}
  </div>
);

LoadingContainer.propTypes = {
  totalLoadingItems: PropTypes.number.isRequired,
};

export default LoadingContainer;
