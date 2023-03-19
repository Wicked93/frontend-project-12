import Image from 'react-bootstrap/Image';
import imageNotFound from '../assets/404-page.svg';

const NotFoundPage = () => (
  <div className="text-center">
    <Image alt="�������� �� �������" className="img-fluid h-25" src={imageNotFound} />
    <h1 className="h4 text-muted">�������� �� �������</h1>
    <p className="text-muted">
      �� �� ������ �������
      <a href="/"> �� ������� ��������</a>
    </p>
  </div>
);

export default NotFoundPage;