import React, { InputHTMLAttributes } from 'react';
import { useForm } from 'react-hook-form';
type Props =  InputHTMLAttributes<HTMLInputElement> &{
  placeholder?: string;

};
const Input: React.FC<Props> = ({
  placeholder = '',
  ...rest
}) => {
  const { register } = useForm();

  return (
    <input
      className="w-full py-[14px] px-[12px] border-[1px] rounded-[8px]
      border-[#AAAAAA] h-[48px] bg-transparent"
      type="text"
      placeholder={placeholder}
      {...rest}
      {...register('firstName', { required: 'First Name is required' })}
    />
  );
};

export default Input;