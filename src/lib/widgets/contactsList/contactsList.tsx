import React from 'react';
import UserCard from '../../entities/userCard/userCard';
import H2 from '../../shared/typography/h2';

type Props = {
  // define your props here
};

const contactsList: React.FC<Props> = () => {
  return (
    <div className="flex flex-col gap-[10px]">
      <H2>Contacts</H2>
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
    </div>
  );
};

export default contactsList;