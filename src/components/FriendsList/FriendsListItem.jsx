import PropTypes from 'prop-types';
import { FriendItem, Status, Avatar } from './Friends.styled';

export const FriendsListItem = ({ avatar, name, isOnline, id }) => {
  return (
    <FriendItem className="item">
      <Status className="status" status={isOnline}></Status>
      <Avatar className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </FriendItem>
  );
};

FriendsListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
  id: PropTypes.number,
};
