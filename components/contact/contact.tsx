import { FC, useState } from 'react';
import {
  Modal, Button, Form, Col,
} from 'react-bootstrap';
import clsx from 'clsx';
import { useIntl } from 'react-intl';
import { useForm } from 'react-hook-form';
import classes from './contact.module.scss';

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
      <Modal.Header>
        <span className={clsx(classes.title, 'modal-title pl-3')}>{t('contactFormh')}</span>
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
