import { useLocation, useNavigate } from 'react-router-dom';
import RenderList from 'components/RenderList';
import { Button } from 'components';
import style from './Breadcrumbs.module.scss';
type Props = {
  className?: string;
};

export const Breadcrumbs = ({ className }: Props) => {
  const location = useLocation();
  const pathnames = ['Home', ...location.pathname.split('/').filter((x) => x)];

  const navigate = useNavigate();
  return (
    <nav className={className}>
      <RenderList
        itemList={pathnames}
        render={(item, index) => {
          return (
            <Button
              text={item as string}
              className={style.btn}
              onClick={(e) => {
                e.preventDefault();
                const length = pathnames.length;
                if (typeof index === 'number') {
                  const to = (index as number) - (length - 1);

                  if (to < 0) navigate(to);
                }
              }}
            />
          );
        }}
      />
    </nav>
  );
};
