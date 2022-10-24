import PropTypes from 'prop-types';
import {
  Image,
  UserInfo,
  Card,
  Name,
  NickName,
  Location,
  Stats,
  StatsItem,
} from './Profile.styled';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <Card className="profile">
      <UserInfo className="description">
        <Image src={avatar} alt="User avatar" className="avatar" />
        <Name className="name">{username}</Name>
        <NickName className="tag">@{tag}</NickName>
        <Location className="location">{location}</Location>
      </UserInfo>
      <Stats className="stats">
        <StatsItem>
          <span className="label">Followers</span>
          <span className="quantity">{followers}</span>
        </StatsItem>
        <StatsItem>
          <span className="label">Views</span>
          <span className="quantity">{views}</span>
        </StatsItem>
        <StatsItem>
          <span className="label">Likes</span>
          <span className="quantity">{likes}</span>
        </StatsItem>
      </Stats>
    </Card>
  );
};

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};
