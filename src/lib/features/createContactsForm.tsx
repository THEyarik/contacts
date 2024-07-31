import React from 'react';
import { useForm } from 'react-hook-form';
import Button from '../shared/ui/button/Button';
import { createContact } from '../../app/api/createContact';

const CreateContactsForm = () => {
  const { register, getValues, formState: { errors } } = useForm();

  const formSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    createContact({
      email    : getValues('email'),
      firstName: getValues('firstName'),
      lastName : getValues('lastName')
    });
  };

  return (
    <form className="w-full flex flex-col gap-[10px]">
      <div className="flex flex-col gap-[6px]">
        <p className="text-[12px]">First Name</p>
        <input
          className="input"
          {...register('firstName', { required: 'First Name is required' })}
        />
        {errors.firstName && <p className="text-red-500">{errors.firstName?.message as string}</p>}
      </div>
      <div className="flex flex-col gap-[6px]">
        <p className="text-[12px]">Last Name</p>
        <input
          className="input"
          {...register('lastName')}
        />
      </div>
      <div className="flex flex-col gap-[6px]">
        <p className="text-[12px]">Email</p>
        <input
          className="input"
          {...register('email', {
            required: 'Email is required',
            pattern : {
              value  : /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email address'
            }
          })}
        />
        {errors.email && <p className="text-red-500">{errors.email?.message as string}</p>}
      </div>
      <Button
        onClick={formSubmit}
      >
            Add Contact
      </Button>
    </form>
  );
};

export default CreateContactsForm;
