import { Button } from 'flowbite-react';
import { useContext } from 'react';
import toast from 'react-hot-toast';
import facebookIcon from '../assets/images/icons/fb.png';
import googleIcon from '../assets/images/icons/google.png';
import { AuthContext } from '../contexts/AuthProvider';

export default function SocialAuth() {
    const { continueWithGoogle, continueWithFacebook } = useContext(AuthContext)
    
    const handleSocialLogin = (socialLoginFunc) => {
        socialLoginFunc()
            .then(userCredential => {
                console.log(userCredential.user)
                toast.success('Login Succuss!')
            })
            .catch(err => {
                console.error(err)
                toast.error(err.code)
        })
    }
  return (
    <div className='space-y-3'>
          <Button
                  color="light"
                  pill
              className='w-full'
              onClick={()=> handleSocialLogin(continueWithFacebook)}
              >
                  <img className='w-6 absolute left-3' src={ facebookIcon } alt="" />
                  <p>
                      Continue With facebook
                  </p>
              </Button>
          <Button
                  color="light"
                  pill
              className='w-full'
              onClick={()=> handleSocialLogin(continueWithGoogle)}
              >
                  <img className='w-6 absolute left-3' src={ googleIcon } alt="" />
                  <p>
                      Continue With Google
                  </p>
              </Button>
        </div>
  )
}
