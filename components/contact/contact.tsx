import { FC } from 'react';
import {
  Modal, Button, Form, Col,
} from 'react-bootstrap';
import clsx from 'clsx';
import { useForm } from 'react-hook-form';
import classes from './contact.module.scss';

interface AppProps {
  close: () => void,
  show: boolean
}

interface Inputs {
  name: string,
  email: string,
  organization: string,
  referral: string,
  message: string
}

const Contact: FC<AppProps> = ({ close, show }) => {
  const {
    register, handleSubmit, errors,
  } = useForm<Inputs>();

  const onSubmit = (data: Inputs) => {
    /* eslint-disable no-alert */
    fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(data),
    }).then(() => {
      alert('Your message was sent successfully.');
      close();
    }).catch(() => {
      alert('Your message could not be sent. Try again later.');
      close();
    });
  };

  return (
    <Modal show={show} onHide={close} className={classes.root}>
      <Modal.Header>
        <span className={clsx(classes.title, 'modal-title pl-3')}>Contact Us</span>
      </Modal.Header>

      <Modal.Body>
        <Form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
          <Form.Row>
            <Form.Group as={Col} sm="6">
              <Form.Label>Name (Required)</Form.Label>
              <input
                className={clsx(errors.name && classes.error, 'form-control')}
                ref={register({ required: true, minLength: 3 })}
                name="name"
              />
            </Form.Group>

            <Form.Group as={Col} sm="6">
              <Form.Label>Email (Required)</Form.Label>
              <input
                className={clsx(errors.email && classes.error, 'form-control')}
                ref={register({ required: true, minLength: 6 })}
                name="email"
                type="email"
              />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} sm="6">
              <Form.Label>Organization</Form.Label>
              <Form.Control ref={register} name="organization" />
            </Form.Group>

            <Form.Group as={Col} sm="6">
              <Form.Label>Referral</Form.Label>
              <select
                className={clsx(errors.referral && classes.error, 'form-control')}
                ref={register({ required: true })}
                defaultValue="random"
                name="referral"
              >
                <option value="google">Google</option>
                <option value="facebook">Facebook</option>
                <option value="twitter">Twitter</option>
                <option value="instagram">Instagram</option>
                <option value="advertisement">Advertisement</option>
                <option value="friend">Referred by a friend</option>
                <option value="random">Found you randomly</option>
              </select>
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>Message (Required)</Form.Label>
              <textarea
                ref={register({ required: true, minLength: 5 })}
                className={clsx(errors.message && classes.error, 'form-control')}
                name="message"
              />
            </Form.Group>
          </Form.Row>

          <hr />

          <Form.Row>
            <Form.Group as={Col}>
              <Button className="mr-2" variant="secondary" onClick={close}>Close</Button>
              <Button
                className={classes.submit}
                type="submit"
                variant="primary"
                onClick={() => {}}
              >
                Submit
              </Button>
            </Form.Group>
          </Form.Row>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default Contact;
