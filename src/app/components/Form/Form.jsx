import './Form.css'

export default function Form() {
    return (
        <form className='grid gap-[1.5rem]'>
            <input 
                className='block'
                type="text"
                id="name"
                name="name"
                placeholder='Name'
            />
            <input
                className='block'
                type="text"
                id="email"
                name="email"
                placeholder='Email Adress'
            />
            <input
                className='block'
                type="text"
                id="phone"
                name="phone"
                placeholder='Phone'
            />
            <textarea
                className='block message-input'
                type="text"
                id="message"
                name="message"
                placeholder='Your message'
            />
            <button className='button-secondary form-button'>Submit</button>
        </form>
    )
}