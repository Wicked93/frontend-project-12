/* eslint-disable jsx-a11y/label-has-associated-control */
import { Formik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import routes from '../../routes/routes';
import { useAuth } from '../../contexts/AuthContext.jsx';

const LoginPage = () => {
  const validateSchema = yup.object().shape({
    name: yup.string().required(),
    password: yup.string().required(),
  });
  const navigate = useNavigate();
  const authUser = useAuth();
  return (
    <Formik
      initialValues={
    {
      name: '',
      password: '',
    }
}
      validate={validateSchema}
      onSubmit={async (values) => {
        // eslint-disable-next-line no-empty
        try {
          const res = await axios.post(routes.loginPath(), values);
          authUser.logIn(res.data);
          navigate('/');
        } catch (err) {
          console.log(err);
        }
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <form className="col-12 col-md-6 mt-3 mt-mb-0" onSubmit={handleSubmit}>
          <h1 className="text-center mb-4">�����</h1>
          <div className="form-floating mb-3">
            <input
              className="form-control"
              type="username"
              name="username"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.username}
              placeholder="��� ���"
            />
            <label htmlFor="username">��� ���</label>
            {errors.username && touched.username && errors.username}
          </div>
          <div className="form-floating mb-3">
            <input
              className="form-control"
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              placeholder="������"
            />
            <label className="form-label" htmlFor="password">������</label>
            {errors.password && touched.password && errors.password}
          </div>
          <button type="submit" className="w-100 mb-3 btn btn-outline-primary" disabled={isSubmitting}>
            �����
          </button>
        </form>
      )}
    </Formik>
  );
};

export default LoginPage;