import { Helmet } from 'react-helmet-async';

type Props = {
  title: string;
  description: string;
};

export default function SEO({ title, description }: Props) {
  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {/* End standard metadata tags */}
    </Helmet>
  );
}
