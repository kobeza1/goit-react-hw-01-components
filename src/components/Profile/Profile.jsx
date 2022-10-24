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
  Label,
  Quantity,
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
          <Label className="label">Followers</Label>
          <Quantity className="quantity">{followers}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label className="label">Views</Label>
          <Quantity className="quantity">{views}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label className="label">Likes</Label>
          <Quantity className="quantity">{likes}</Quantity>
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
