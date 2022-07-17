import PropTypes from 'prop-types';
import FriendListItem from '../FriendListItem/FriendListItem';

export default function FriendList({friends}) {
    return (
        <ul class="friend-list">
            {friends.map(friend => (
                <FriendListItem
                    key={friend.id}
                    name={friend.name}
                    avatar={friend.avatar}
                    isOnline={friend.isOnline}
                />
            ))}
        </ul>
    )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
    })),
}