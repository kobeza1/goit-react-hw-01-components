import PropTypes from 'prop-types';
import { FriendsListItem } from './FriendsListItem';
import { Friends } from './Friends.styled';

export const FriendsList = ({ friends }) => {
  return (
    <Friends className="friend-list">
      {friends.map(friend => {
        return (
          <FriendsListItem
            key={friend.id}
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
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
