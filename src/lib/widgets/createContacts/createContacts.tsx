import React from 'react';
import H2 from '../../shared/typography/h2';
import CreateContactsForm from '../../features/createContactsForm';


const createContacts: React.FC = () => {
  return (
    <div className="max-w-[280px] w-full  relative max-[768px]:max-w-none">
      <div
        className="max-w-[280px]  w-full fixed top-0 flex flex-col gap-[20px]
      max-[768px]:relative max-[768px]:max-w-none"
      >
        <H2>
              Create Contact
        </H2>
        <CreateContactsForm />
      </div>

    </div>
  );
};

export default createContacts;