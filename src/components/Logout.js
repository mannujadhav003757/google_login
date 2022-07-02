import { GoogleLogout } from 'react-google-login'

const clientId = '454333614232-ltuf6u4gaqi243ljda5c61sncgj9ce5p.apps.googleusercontent.com'

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