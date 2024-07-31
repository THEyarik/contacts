import React from 'react';
import Input from '../shared/ui/input/Input';
import Button from '../shared/ui/button/Button';


const contactTagsForm: React.FC = () => {
  return (
    <form className="w-full flex flex-col gap-[10px] pt-[40px]">
      <Input placeholder="Add new Tag" />
      <Button>
          Add Tag
      </Button>
    </form>
  );
};

export default contactTagsForm;