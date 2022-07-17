import PropTypes from 'prop-types';

export default function FriendListItem({ avatar, name, isOnline, id }) {
    return (
        <li key={id} class="item">
            <span class="status">{isOnline ? "green" : "red"}</span>
            <img class="avatar" src={avatar} alt="User avatar" width="48" />
            <p class="name">{name}</p>
        </li>
    )
}

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.number,
}