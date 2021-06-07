import { useState } from 'react';
import PropTypes from 'prop-types';

const randomNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const RoundBackGround = ({
  totalRoundItems
}) => {
  const colorsList = [
    'violet',
    'light-violet',
    'dark-violet',
    'dodgerblue',
    'light-dodgerblue',
    'dark-dodgerblue',
  ];

  const [roundItems, setRoundItems] = useState([...Array(totalRoundItems)].map((item) => {
    colorsList.sort((a, b) => a - b);
    return {
      randomColor: colorsList.pop(),
      randomSize: randomNumber(1, 75),
      randomMarginTop: randomNumber(1, 50),
      randomMarginLeft: randomNumber(1, 50),
    };
  }));

  return (
    <div className="round-background-container">
      {roundItems.map((item, i) => (
        <div
          key={i}
          className={`round-background-item round-background-item--${item.randomColor}`}
          style={{
            width: `${item.randomSize}vh`,
            height: `${item.randomSize}vh`,
            marginTop: `${item.randomMarginTop}vh`,
            marginLeft: `${item.randomMarginLeft}vh`,
          }}
        />
      ))}
    </div>
  );
};
RoundBackGround.propTypes = {
  totalRoundItems: PropTypes.number.isRequired,
};

export default RoundBackGround;
