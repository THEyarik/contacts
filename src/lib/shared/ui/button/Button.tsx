import React, { ButtonHTMLAttributes, PropsWithChildren } from 'react';

type Props = PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>;

const Button: React.FC<Props> = ({
  children,
  ...rest
}) => {
  return (
    <button
      className="border-[1px] border-[#AAAAAA] h-[48px] bg-transparent text-[16px] text-black
      flex justify-center items-center font-[500] rounded-[4px]"
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;