import React from 'react';
import CreateContacts from '../widgets/createContacts/createContacts';
import ContactsList from '../widgets/contactsList/contactsList';


const Home: React.FC = () => {
  return (
    <div className="flex gap-[20px] justify-center w-full max-[768px]:flex-col">
      <CreateContacts />
      <ContactsList />
    </div>
  );
};

export default Home;