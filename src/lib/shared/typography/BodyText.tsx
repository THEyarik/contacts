import React, { PropsWithChildren } from 'react';

type Props = PropsWithChildren

const BodyText: React.FC<Props> = ({ children }) => {
  return (
    <p className="text-[16px] font-[500]">
      {children}
    </p>
  );
};

export default BodyText;