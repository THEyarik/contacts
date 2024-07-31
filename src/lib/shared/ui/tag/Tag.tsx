import React, { PropsWithChildren } from 'react';

type Props = PropsWithChildren

const Tag: React.FC<Props> = ({
  children,
  ...rest
}) => {
  return (
    <div
      className="font-[500] text-[13px] bg-[#A6A6A6] flex justify-center items-center h-[20px]
      px-[12px] rounded-[4px]"
      {...rest}
    >
      {children}
    </div>
  );
};

export default Tag;