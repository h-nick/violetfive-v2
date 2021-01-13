import { FC, useState } from 'react';
import {
  Modal, Button, Form, Col,
} from 'react-bootstrap';
import clsx from 'clsx';
import { useIntl } from 'react-intl';
import { useForm } from 'react-hook-form';
import classes from './contact.module.scss';
import CustomButton from '../button/button';

interface FCProps {
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

const Contact: FC<FCProps> = ({ close, show }) => {
  const [submitting, setSubmitting] = useState<boolean>(false);
  const { register, handleSubmit, errors } = useForm<Inputs>();
  const { formatMessage } = useIntl();

  const t = (id: string): string => formatMessage({ id });

  const onSubmit = async (data: Inputs) => {
    setSubmitting(true);
    /* eslint-disable no-alert */
    try {
      const { ok } = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(data),
      });

      if (!ok) {
        alert(t('contactFormNotSentServer'));
      } else {
        alert(t('contactFormSent'));
        close();
      }
    } catch {
      alert(t('contactFormNotSentClient'));
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Modal show={show} onHide={close} className={classes.root}>
      <Modal.Header closeButton>
        <span className={clsx(classes.title, 'modal-title pl-3')}>{t('contactFormh1')}</span>
      </Modal.Header>

      <Modal.Body>
        <p>{t('contactt1')}</p>
        <CustomButton
          _className="my-3"
          hoverType="color"
          link
          href="https://wa.me/+584249090849"
          text={t('whatsapp')}
        />

        <p>{t('contactt2')}</p>
        <ul className="m-0 p-0">
          <li className="mt-1">
            <a href="tel://+584249090849">+58 (424) 909 0849</a>
          </li>
          <li className="mt-1">
            <a href="tel://+584163955711">+58 (416) 395 5711</a>
          </li>
          <li className="mt-1">
            <a href="tel://+584148749099">+58 (414) 874 9099</a>
          </li>

        </ul>
      </Modal.Body>

      <Modal.Header>
        <span className={clsx(classes.title, 'modal-title pl-3')}>{t('contactFormh2')}</span>
      </Modal.Header>

      <Modal.Body>
        <Form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
          <Form.Row>
            <Form.Group as={Col} sm="6">
              <Form.Label>{t('contactFormName')}</Form.Label>
              <input
                className={clsx(errors.name && classes.error, 'form-control')}
                ref={register({ required: true, minLength: 3 })}
                name="name"
              />
            </Form.Group>

            <Form.Group as={Col} sm="6">
              <Form.Label>{t('contactFormEmail')}</Form.Label>
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
              <Form.Label>{t('contactFormOrganization')}</Form.Label>
              <Form.Control ref={register} name="organization" />
            </Form.Group>

            <Form.Group as={Col} sm="6">
              <Form.Label>{t('contactFormReferral')}</Form.Label>
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
                <option value="advertisement">{t('contactFormReferralAdvertisement')}</option>
                <option value="friend">{t('contactFormReferralFriend')}</option>
                <option value="random">{t('contactFormReferralRandom')}</option>
              </select>
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>{t('contactFormMessage')}</Form.Label>
              <textarea
                ref={register({ required: true, minLength: 15 })}
                className={clsx(errors.message && classes.error, 'form-control')}
                name="message"
              />
            </Form.Group>
          </Form.Row>

          <hr />

          <Form.Row>
            <Form.Group as={Col}>
              <Button className="mr-2" variant="secondary" onClick={close}>{t('contactFormClose')}</Button>
              <Button
                className={classes.submit}
                type="submit"
                variant="primary"
                disabled={submitting}
              >
                {submitting ? t('contactFormSubmitting') : t('contactFormSubmit')}
              </Button>
            </Form.Group>
          </Form.Row>

          {
            errors && (
              <>
                {
                  errors.name && (
                    <p className={clsx(classes.errorMsg, 'mb-1')}>
                      {t('contactErrorName')}
                    </p>
                  )
                }
                {
                  errors.email && (
                    <p className={clsx(classes.errorMsg, 'mb-1')}>
                      {t('contactErrorEmail')}
                    </p>
                  )
                }
                {
                  errors.referral && (
                    <p className={clsx(classes.errorMsg, 'mb-1')}>
                      {t('contactErrorReferral')}
                    </p>
                  )
                }
                {
                  errors.message && (
                    <p className={clsx(classes.errorMsg, 'mb-1')}>
                      {t('contactErrorMessage')}
                    </p>
                  )
                }
              </>
            )
          }
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default Contact;
