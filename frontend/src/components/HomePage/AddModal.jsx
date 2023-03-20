/* eslint-disable no-undef */
import { useRef, useEffect } from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import { Button, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import {
  selectModalIsOpened, selectTypeCurrentModal, closeModal,
} from '../../slices/modalSlice';

const AddModal = () => {
  const dispatch = useDispatch();
  const typeModal = useSelector(selectTypeCurrentModal);
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current?.focus();
  }, [typeModal]);

  const isOpened = useSelector(selectModalIsOpened);
  if (!isOpened) return null;

  const ChannelVlidate = yup.object().shape({
    nameChannel: yup
      .string()
      .required('������������ ����')
      .min(3, '�� 3 �� 20 ��������')
      .max(20, '�� 3 �� 20 ��������'),
  });
  return (
    <Formik
      initialValues={
      {
        nameChannel: '',
      }
  }
      validationSchema={ChannelVlidate}
      onSubmit={async (values) => {
      // eslint-disable-next-line no-empty
        try {
          handlers[typeModal](values);
          hideModal();
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
        <form className="py-1 border rounded-2" onSubmit={handleSubmit}>
          <Modal centered show onHide={() => dispatch(closeModal())}>
            <Modal.Header closeButton>
              <Modal.Title>�������� �����</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <input
                className="form-control mb-2"
                type="nameChannel"
                name="nameChannel"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.nameChannel}
                placeholder="��� ������"
              />
              {errors.nameChannel && touched.nameChannel && errors.nameChannel}
              <div className="d-flex justify-content-end">
                <Button onClick={() => dispatch(closeModal())} className="me-2" variant="secondary" disabled={isSubmitting}>
                  ��������
                </Button>
                <Button type="submit" variant="primary" disabled={isSubmitting}>
                  ���������
                </Button>
              </div>
            </Modal.Body>
          </Modal>
        </form>
      )}
    </Formik>
  );
};

export default AddModal;