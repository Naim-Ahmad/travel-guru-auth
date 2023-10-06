import { Button, Checkbox, Label } from 'flowbite-react';
import { Link } from 'react-router-dom';

import Divider from '../../components/Divider';
import FloatingLabel from '../../components/FloatingLabel';
import SocialAuth from '../../components/SocialAuth';
import MyNavbar from '../../Layout/navbar/MyNavbar';


export default function Login() {
    return (
      <>
        <MyNavbar/>
        <div className='flex justify-center min-h-screen items-center'>
          <div className='border rounded-lg px-11 py-8'>
              <h1 className='text-2xl font-bold mb-6'>Please Login</h1>
            <form className="flex max-w-xl w-96 flex-col gap-8">
                <div>
                    <FloatingLabel type='email' placeholder="Enter Your Email" name="email" required/>
                </div>
                <div>
                    <FloatingLabel type='password' placeholder="Enter Your Password" name="password" required/>
                </div>
                <div className="flex justify-between gap-2">
                      <div>
                        <Checkbox className='mr-2' />
                            <Label htmlFor="remember">
                            Remember me
                            </Label>
                      </div>
                      <div>
                          <button className='text-warning'>Forget Password?</button>
                      </div>
                  </div>
                  
                <Button type="submit" color='warning'>
                    Login
                </Button>
              </form>
              <p className='text-center mt-6'>Don’t have an account? <Link to="/register" className='text-warning'>Create an account</Link></p>
              <Divider />
              <SocialAuth/>
        </div>
        </div>
      </>
  )
}
