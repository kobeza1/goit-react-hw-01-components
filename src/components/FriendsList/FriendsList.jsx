import PropTypes from 'prop-types';
import { FriendsListItem } from './FriendsListItem';
import { Friends } from './Friends.styled';

export const FriendsList = ({ friends }) => {
  return (
    <Friends className="friend-list">
      {friends.map(friend => {
        return (
          <FriendsListItem
            id={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        );
      })}
    </Friends>
  );
};

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
      id: PropTypes.number,
    })
  ),
};
