import { GoogleLogin } from 'react-google-login'

const clientId = '349925464986-6gqlvd5unbrne7cjrjimfubt4of7a7i0.apps.googleusercontent.com'

function Login(props) {

    const onSuccess = (res)  => {
        //e.preventDefault()
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