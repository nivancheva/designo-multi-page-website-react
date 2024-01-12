"use client"

import './Form.css'
import { z } from 'zod'
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
    name: z.string().min(1, "Can't be empty"),
    email: z.string().min(1, "Can't be empty").email({ message: "Please enter a valid email address." }),
    phone: z.coerce.number(),
    message: z.string().min(1, "Can't be empty")
})
 
export default function Form() {
    

    function handleFormSubmit(data) {
        console.log(data);
    }

    const {
        register,
        handleSubmit,
        formState: { errors }
      } = useForm({ resolver: zodResolver(schema) });

    return (
        <form className='grid gap-[1.5rem]' onSubmit={handleSubmit(handleFormSubmit)}>
            <input 
                className='block'
                placeholder='Name'
                {...register("name")}
            />
            {errors.name && <p>{errors.name.message}</p>}
            <input
                className='block'
                placeholder='Email Adress'
                {...register("email")}
            />
            {errors.email && <p>{errors.email.message}</p>}
            <input
                className='block'
                type="tel"
                placeholder='Phone'
                {...register("phone")}
            />
            {errors.phone && <p>{errors.phone.message}</p>}
            <textarea
                className='block message-input'
                placeholder='Your message'
                {...register("message")}
            />
            {errors.message && <p>{errors.message.message}</p>}
            <button className='button-secondary form-button'>Submit</button>
        </form>
    )
}