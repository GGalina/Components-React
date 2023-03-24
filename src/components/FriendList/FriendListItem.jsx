import s from './FriendList.module.css';

const FriendListItem = ({ avatar, name, isOnline}) => {
    return (
        <li className={s.listItem}>
            {isOnline ? <span className={s.online}>&nbsp;</span> : <span className={s.offline}>&nbsp;</span>}
            <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
            <p className={s.name}>{name}</p>
        </li>
    );
};

export default FriendListItem;