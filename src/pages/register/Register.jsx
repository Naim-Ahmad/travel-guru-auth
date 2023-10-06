import { Button, Checkbox, Label } from 'flowbite-react';
import { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import MyNavbar from '../../Layout/navbar/MyNavbar';
import Divider from '../../components/Divider';
import FloatingLabel from '../../components/FloatingLabel';
import SocialAuth from '../../components/SocialAuth';
import { AuthContext } from '../../contexts/AuthProvider';

export default function Register() {
    const {signUpWithEmail, updateUserProfile} = useContext(AuthContext)
    const handleRegister = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const firstName = form.get('first-name')
        const lastName = form.get('last-name')
        const email = form.get('email')
        const password = form.get('password')
        const confirmPassword = form.get('confirm-password')

        signUpWithEmail(email, password)
        .then(() => {
            updateUserProfile(firstName + lastName)
                .then(() => {
                    toast.success('Account Registration Successful!')
                })
                .catch(err => {
                    console.error(err)
                    toast.error(err.code)
            })
        })
        .catch(err => {
            console.error(err)
            toast.error(err.code)
        })
    }
    
    return (
      <>
        <MyNavbar />

        <div className='flex justify-center min-h-screen items-center'>
        <div className='border rounded-lg px-11 py-8'>
            <h1 className='text-2xl font-bold mb-6'>Create An Account</h1>
        <form onSubmit={handleRegister} className="flex max-w-xl w-96 flex-col gap-8">
            <div>
                <FloatingLabel placeholder="First Name" name="first-name" required/>
            </div>
            <div>
                <FloatingLabel placeholder="Last Name" name="last-name" required/>
            </div>
            <div>
                <FloatingLabel type='email' placeholder="Email" name="email" required/>
            </div>
            <div>
                <FloatingLabel type='password' placeholder="Password" name="password" required/>
            </div>
            <div>
                <FloatingLabel type='password' placeholder="Confirm Password" name="confirm-password" required/>
            </div>
            <div className="flex items-center gap-2">
                    <Checkbox id="agree" />
                    <Label
                    className="flex"
                    htmlFor="agree"
                    >
                        <p>
                            I agree with the 
                        </p>
                        <Link
                            className="text-cyan-600 hover:underline dark:text-cyan-500"
                            to="/terms-condition"
                        >
                            <p>
                            terms and conditions
                            </p>
                    </Link>
                    </Label>
            </div>
                
            <Button type="submit" color='warning'>
                Create an Account
            </Button>
            </form>
            <p className='text-center mt-6'>Already have an account? <Link to="/login" className='text-warning'>Login</Link></p>
            <Divider />
            <SocialAuth />
        </div>
        </div>
      </>
  )
}
