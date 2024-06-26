import React, { useRef, useState, Suspense } from 'react'
import emailjs from '@emailjs/browser'
import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader'
import Fox from '../models/Fox'
import useAlert from '../hooks/useAlert'
import Alert from '../components/Alert'

const Contact = () => {

  const formRef = useRef(null)
  const [formValue, setFormValue] = useState({ name: '', email: '', message: '' })
  const [isLoading, setIsLoading] = useState(false)
  const [currentAnimation, setCurrentAnimation] = useState('idle')
  const { showAlert, viewAlert, hideAlert } = useAlert()

  const handleChange = (e) => {
    setFormValue({...formValue, [e.target.name]: e.target.value})
  }
  
  const handleFocus = () => {
    setCurrentAnimation('walk')
  }
  const handleBlur = () => {
    setCurrentAnimation('idle')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)
    setCurrentAnimation('hit')

    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        from_name: formValue.name,
        to_name: 'Aritra',
        from_email: formValue.email,
        to_email: 'dawnmannu@gmail.com',
        message: formValue.message
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    ).then(() => {
      setIsLoading(false)
      viewAlert({
        show: true,
        text: 'Message received successfully. We will get back you shortly',
        type: 'success'
      })
      setTimeout(() => {
        setCurrentAnimation('idle')
        setFormValue({ name: '', email: '', message: '' })
      }, [3000])
    }).catch((error) => {
      setIsLoading(false)
      console.log(error)
      setCurrentAnimation('idle')
      viewAlert({
        show: true,
        text: 'Message did not received',
        type: 'danger'
      })
    })
  }

  return (
    <section className='flex relative lg:flex-row flex-col max-container h-[100vh]'>
      { showAlert.show && <Alert { ...showAlert }/> }
      <div className='flex-1 min-w-[50%] flex flex-col'>
        <h1 className='head-text'>Let's work together</h1>

        <form
          className='w-full flex flex-col gap-7 mt-14'
          onSubmit={ handleSubmit }
        >
          <label className='text-black-500 font-semibold'>Full Name
          <input 
            type='text'
            name='name' 
            className='input' 
            placeholder='John Doe'
            required
            value={ formValue.name }
            onChange={ handleChange }
            onFocus={ handleFocus }
            onBlur={ handleBlur }
          />
          </label>
          <label className='text-black-500 font-semibold'>Email
          <input 
            type='email' 
            name='email' 
            className='input' 
            placeholder='john@doe.com'
            required
            value={ formValue.email }
            onChange={ handleChange }
            onFocus={ handleFocus }
            onBlur={ handleBlur }
          />
          </label>
          <label className='text-black-500 font-semibold'>Message
          <textarea
            name='message' 
            className='input' 
            placeholder='Let me know'
            required
            value={ formValue.message }
            onChange={ handleChange }
            onFocus={ handleFocus }
            onBlur={ handleBlur }
          />
          </label>
          <button
            type='submit'
            className='btn'
            disabled={ isLoading }
          >
            { isLoading ? 'Sending...' : 'Send Message' }
          </button>
        </form>
      </div>

      <div className=' lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]'>
        <Canvas camera={{ position: [0, 0, 5], fov: 75, near: 0.1, far: 1000}}>

          <directionalLight position={[0, 0, 1]} intensity={2.5} />
          <ambientLight intensity={1} />
          <pointLight position={[5, 10, 0]} intensity={2} />
          <spotLight
            position={[10, 10, 10]}
            angle={0.15}
            penumbra={1}
            intensity={2}
          />
          <Suspense fallback={ <Loader /> }>
            <Fox 
              currentAnimation={ currentAnimation }
              position = { [0.5, 0.35, 0] }
              rotation = { [12.6, -0.6, 0] }
              scale = { [0.5, 0.5, 0.5] }
            />
          </Suspense>
        </Canvas>
      </div>
    </section>
  )
}

export default Contact