import { GoogleLogout } from 'react-google-login'

const clientId = '349925464986-6gqlvd5unbrne7cjrjimfubt4of7a7i0.apps.googleusercontent.com'

function Logout(props) {

    const onSuccess = (res)  => {
        console.log('LOGOUT SUCCESS!');
        
        localStorage.removeItem('userDetails')

        props.getIsLogout(false)
    }

    return (
        <div id="signInButton">
            <GoogleLogout
                clientId={clientId}
                buttonText={"Logout"}
                onLogoutSuccess={onSuccess}>
            </GoogleLogout>

        </div>
    )
}

export default Logout