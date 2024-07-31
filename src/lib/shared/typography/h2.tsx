import React, { PropsWithChildren } from 'react';

type Props = PropsWithChildren

const H2: React.FC<Props> = ({
  children
}) => {
  return (
    <h2 className="text-[20px] text-black font-[500]">
      {children}
    </h2>
  );
};

export default H2;