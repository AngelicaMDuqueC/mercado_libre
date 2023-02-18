import { useNavigate } from 'react-router-dom';
import RenderList from 'components/RenderList';
import { Button } from 'components';
import style from './Breadcrumbs.module.scss';
type Props = {
  className?: string;
  paths: Path[];
};

export const Breadcrumbs = ({ className, paths }: Props) => {
  const navigate = useNavigate();
  return (
    <nav className={className}>
      <RenderList
        itemList={paths}
        render={(item) => {
          return (
            <Button
              className={style.btn}
              text={(item as Path)?.name}
              onClick={(e) => {
                e.preventDefault();
                navigate((item as Path)?.path);
              }}
            />
          );
        }}
      />
    </nav>
  );
};
