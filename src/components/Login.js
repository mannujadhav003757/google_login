import { GoogleLogin } from 'react-google-login'

const clientId = '286213407093-s07fd7a3l9hoddsakohpi73nl1k1pbsp.apps.googleusercontent.com'

function Login(props) {

    const onSuccess = (res)  => {
        console.log("********",res)
        console.log('LOGIN SUCCESS! Current User', res.profileObj);

        localStorage.setItem('userDetails', JSON.stringify(res.profileObj))

        props.getIsLogin(true)
        
    }

    const onFailure = (res)  => {
        console.log('LOGIN FAILED!', res);

        localStorage.removeItem('userDetails')

        props.getIsLogin(false)
    }

    return (
        <div id="signInButton">
            <h1>Please Sign in with Google</h1>
            <GoogleLogin
                className='mt-4'
                clientId={clientId}
                buttonText="Login"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
            />
        </div>
        
    )
}

export default Login