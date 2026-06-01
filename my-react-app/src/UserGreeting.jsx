// import PropTypes from 'prop-types';

// function UserGreeting(props) {
//     // if (props.isLoggedIn) {
//     //     return <h1>Welcome back, {props.username}!</h1>;
//     // }
//     // return <h1>Please sign up.</h1>;

//     const welcomeMessage = <h1 className="welcome-message">Welcome back, {props.username}!</h1>;
//     const loginMessage = <h1 className="login-message">Please sign up.</h1>;

//     return(props.isLoggedIn ? welcomeMessage : loginMessage);
// }

// UserGreeting.propTypes = {
//     isLoggedIn: PropTypes.bool,
//     username: PropTypes.string
// }

function UserGreeting({
    isLoggedIn = false,
    username = 'Guest'
}) {
    const welcomeMessage = <h1 className="welcome-message">Welcome back, {username}!</h1>;
    const loginMessage = <h1 className="login-message">Please sign up.</h1>;

    return (
        isLoggedIn ? welcomeMessage : loginMessage
    )
}


export default UserGreeting;