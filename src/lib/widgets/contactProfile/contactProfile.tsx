import React from 'react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import profileAvatar from '../../shared/icons/profileAvatar.png';
import BodyText from '../../shared/typography/BodyText';
import Tag from '../../shared/ui/tag/Tag';
import ContactTagsForm from '../../features/contactTagsForm';


const contactProfile: React.FC = () => {
  return (
    <div className="max-w-[430px] mx-auto">
      <div className="flex items-center gap-[10px] ">
        <img
          className="w-[59px] h-[59px]"
          src={profileAvatar}
          alt="Avatar"
        />
        <div className="flex leading-[24px] flex-col ">
          <BodyText>
                      First Name Last Name
          </BodyText>
          <BodyText>
                      email@email.com
          </BodyText>
        </div>
      </div>

      <div className="flex flex-col gap-[10px] mt-[30px]">
        <BodyText>
                Tags
        </BodyText>
        <div className="flex flex-wrap gap-[10px] mt-[20px]">
          <Tag>
                Tag
          </Tag>
          <Tag>
                Tag
          </Tag>
          <Tag>
                Tag
          </Tag>
          <Tag>
                Tag
          </Tag>
          <Tag>
                Tag
          </Tag>
          <Tag>
                Tag
          </Tag>
          <Tag>
                Tag
          </Tag>
          <Tag>
                Tag
          </Tag>
          <Tag>
                Tag
          </Tag>

        </div>
      </div>
      <ContactTagsForm />
    </div>
  );
};

export default contactProfile;