import './Header.scss';
import Moment from 'react-moment';

const Header = () => {
  const now = new Date();

  return (
    <header className="todo-app-header">
      <div className="todo-app-header--wrapper">
        <div className="todo-app-header--date">
          <Moment format="Do MMMM">{now}</Moment>
          ,
          {' '}
          <strong className="text-big"><Moment format="dddd">{now}</Moment></strong>
        </div>
        <div className="todo-app-header--logo">
          to
          <strong>DO</strong>
        </div>
      </div>
    </header>
  );
};

export default Header;
