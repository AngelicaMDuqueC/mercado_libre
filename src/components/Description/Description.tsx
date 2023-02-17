import { PropsWithChildren } from 'react';
import { CustomHeading } from '../CustomHeading';
import { title } from 'utils';
type DescriptionProps = {
  description: ResponseDescription;
  tagType?: HeadingLevel;
  className: string;
  headingClass?: string;
  paragraphClass?: string;
};

export const Description = ({
  description,
  tagType = 'h1',
  className,
  headingClass,
  paragraphClass
}: PropsWithChildren<DescriptionProps>) => {
  return (
    <div className={className}>
      <CustomHeading type={tagType} customClass={headingClass}>
        {title}
      </CustomHeading>
      <p className={paragraphClass}>{description['plain_text']}</p>
    </div>
  );
};
