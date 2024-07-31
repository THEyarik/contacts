import React from 'react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import profileAvatar from '../../shared/icons/profileAvatar.png';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import closeIcon from '../../shared/icons/close.png';

import BodyText from '../../shared/typography/BodyText';
import Tag from '../../shared/ui/tag/Tag';
import { Link } from 'react-router-dom';

type Props = {
  // define your props here
};

const userCard: React.FC<Props> = () => {
  return (
    <Link
      to={'/contact/1'}
      className="flex gap-[10px] max-w-[558px] w-full bg-[#EDEDED] p-[20px] rounded-[4px]
      max-[768px]:max-w-none"
    >
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
          <Tag>
                Tag
          </Tag>
          <Tag>
                Tag
          </Tag>
        </div>
      </div>
      <img
        className="w-[22px] h-[22px]"
        src={closeIcon}
        alt="Avatar"
      />
    </Link>
  );
};

export default userCard;