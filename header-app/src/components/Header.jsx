import {useSelector} from 'store/store';

const Header = () => {
    const stateCount = useSelector(state => state.counter.value);
    
    return (
        <header style={{ padding: 20, background: '#4e4949ff' }}>
            Hello from Header App with state counter value: {stateCount}
        </header>
    )
};

export default Header;