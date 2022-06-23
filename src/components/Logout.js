import { GoogleLogout } from 'react-google-login'

const clientId = '286213407093-s07fd7a3l9hoddsakohpi73nl1k1pbsp.apps.googleusercontent.com'

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