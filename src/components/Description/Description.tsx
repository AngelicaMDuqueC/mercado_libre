import { PropsWithChildren } from 'react';
// import { useAxios, ResponseDescription } from 'hooks/useAxios';
import { CustomHeading } from '../CustomHeading';
import { HeadingLevel } from 'components/CustomHeading/CustomHeading';

type DescriptionProps = {
  id: string;
  title: string;
  tagType?: HeadingLevel;
  className: string;
  headingClass?: string;
  paragraphClass?: string;
};

const obj = {
  text: '',
  plain_text:
    'Hermoso dúplex de 4 ambientes, compuesto en planta baja de: cochera, living comedor, cocina comedor diario, toilette de recepción, galería y fondo libre de 40 M2 con posibilidad de poner una pileta, quincho, parrilla, etc. Primer planta: Dos dormitorios con placard, uno al frente y otro al contrafrente, baño completo con bañera. Segunda planta: Dormitorio-Escritorio-Oficina con placard. Todos los ambientes cuentan con ventilación y luz natural. Excelente ubicación en el corazón de Villa Luzuriaga, zona tranquila, residencial y de muchos dúplex, a pocas cuadras de la Plaza de "Barrio Marina", Universidad Nacional de La Matanza, 4 cuadras de Av. Don Bosco y media cuadra de Av. Juan Domingo Perón.      \r\n    \n\n-\n\nNota: La información gráfica y escrita contenida en el presente aviso es meramente a título estimativo y no forma parte de ningún tipo de documentación contractual. Las medidas y superficies definitivas surgirán del título de propiedad del inmueble referido. Asimismo, los importes de impuestos, tasas, servicios y expensas aquí indicados están sujetos a verificación por parte del potencial comprador. El valor del inmueble indicado en el presente puede ser modificado sin previo aviso. Operación supeditada a que el propietario cumplimente con la R.G. N 2371/07 COTI.\n\nPara los casos de alquiler de vivienda, el monto máximo de comisión que se le puede requerir a los propietarios será el equivalente al cuatro con quince centésimos por ciento (4,15%) del valor total del respectivo contrato. Art. 5, Ley 5859 (inc.9 del art. 10, Ley 2340). Se encuentra prohibido cobrar a los inquilinos que sean personas físicas comisiones inmobiliarias y gastos de gestoría de informes. Art. 4, Ley 5859 ( inc. 8, art.10, Ley 2340).',
  last_updated: '2023-02-08T16:10:14.769Z',
  date_created: '2023-02-08T16:10:14.769Z',
  snapshot: {
    url: 'http://descriptions.mlstatic.com/D-MLA1339976441.jpg?hash=8520c3b8559cb08aa7e782b8f5334ffe_0x0',
    width: 0,
    height: 0,
    status: ''
  }
};

export const Description = ({
  id,
  title,
  tagType = 'h1',
  className,
  headingClass,
  paragraphClass
}: PropsWithChildren<DescriptionProps>) => {
  console.log(id);

  return (
    <div className={className}>
      <CustomHeading type={tagType} customClass={headingClass}>
        {title}
      </CustomHeading>
      <p className={paragraphClass}>{obj['plain_text']}</p>
    </div>
  );
};
