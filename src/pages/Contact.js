import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { Form, Row, Col, Input, Select, Checkbox, Button, App as AntdApp, Space } from 'antd';
import PrivacyModal from '../components/Privacy';
import emailjs from '@emailjs/browser';
import { confetti } from '@tsparticles/confetti';
import theme from '../config/theme';
import { Verified } from '@styled-icons/material';

function Contact() {
  const { t } = useTranslation();
  const { message } = AntdApp.useApp();
  const [form] = Form.useForm();
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [showSuccess, setShowSuccess] = React.useState(false);

  const onSubmit = async (values) => {
    setLoading(true);

    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, values, PUBLIC_KEY);

      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000); // 3 秒後消失

      // 紙屑動畫
      const end = Date.now() + 0.5 * 1000;
      const colors = [theme.primary, '#ffffff', theme.secondary];

      (function frame() {
        confetti({
          particleCount: 2,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors: colors,
        });

        confetti({
          particleCount: 2,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors: colors,
        });

        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      })();

      form.resetFields();
    } catch (error) {
      console.warn('EmailJS Error:', error);
      message.error(t('contact.form.error'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <Wrapper>
      <section className="page-head">
        <div className="container">
          <h2>{t('contact.title')}</h2>
          <p>{t('contact.subtitle')}</p>
        </div>
      </section>
      <section className="page-body">
        <div className="container">
          <div>
            <StyledForm
              $requiredText={t('contact.form.required')}
              form={form}
              colon={false}
              layout="vertical"
              onFinish={onSubmit}
            >
              <Row gutter={[{ xs: 0, sm: 32 }, 16]}>
                <Col xs={24} sm={12}>
                  <Form.Item
                    name="name"
                    label={t('contact.form.name.label')}
                    rules={[
                      { required: true, message: t('contact.form.name.required') },
                      { whitespace: true, message: t('contact.form.name.whitespace') },
                    ]}
                  >
                    <Input placeholder={t('contact.form.name.placeholder')} allowClear />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={12}>
                  <Form.Item
                    name="email"
                    label={t('contact.form.email.label')}
                    validateTrigger="onBlur"
                    rules={[
                      { required: true, message: t('contact.form.email.required') },
                      { type: 'email', message: t('contact.form.email.invalid') },
                    ]}
                  >
                    <Input placeholder={t('contact.form.email.placeholder')} allowClear />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={12}>
                  <Form.Item
                    name="phone"
                    label={t('contact.form.phone.label')}
                    rules={[{ pattern: /^[0-9+\s-]+$/, message: t('contact.form.phone.invalid') }]}
                  >
                    <Input placeholder={t('contact.form.phone.placeholder')} />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={12}>
                  <Form.Item
                    name="type"
                    label={t('contact.form.type.label')}
                    rules={[{ required: true, message: t('contact.form.type.required') }]}
                  >
                    <Select
                      placeholder={t('contact.form.type.placeholder')}
                      options={[
                        {
                          label: t('contact.form.type.options.project'),
                          value: t('contact.form.type.options.project'),
                        },
                        { label: t('contact.form.type.options.tech'), value: t('contact.form.type.options.tech') },
                        { label: t('contact.form.type.options.job'), value: t('contact.form.type.options.job') },
                        { label: t('contact.form.type.options.other'), value: t('contact.form.type.options.other') },
                      ]}
                    />
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <Form.Item
                    name="content"
                    label={t('contact.form.content.label')}
                    rules={[{ required: true, message: t('contact.form.content.required') }]}
                  >
                    <Input.TextArea
                      placeholder={t('contact.form.content.placeholder')}
                      autoSize={{ minRows: 5, maxRows: 8 }}
                      showCount
                      maxLength={1000}
                    />
                  </Form.Item>
                </Col>
                <Col span={24} style={{ textAlign: 'center' }}>
                  <Form.Item
                    name="agreement"
                    valuePropName="checked"
                    rules={[
                      {
                        validator: (_, value) =>
                          value ? Promise.resolve() : Promise.reject(new Error(t('contact.form.agreement.required'))),
                      },
                    ]}
                  >
                    <Checkbox>
                      {t('contact.form.agreement.agree')}
                      <a
                        href=""
                        onClick={(e) => {
                          e.preventDefault();
                          setIsModalOpen(true);
                        }}
                      >
                        {' '}
                        {t('contact.form.agreement.privacy')}
                      </a>
                    </Checkbox>
                  </Form.Item>
                </Col>
                <Col xs={24} sm={12} style={{ margin: 'auto' }}>
                  <Button type="primary" block htmlType="submit" disabled={loading}>
                    {t('contact.form.submit')}
                  </Button>
                </Col>
              </Row>
            </StyledForm>
          </div>
        </div>
      </section>

      <section style={{ height: 90 }} />

      <PrivacyModal visible={isModalOpen} onCancel={() => setIsModalOpen(false)} />

      <SuccessMessage className={showSuccess ? 'visible' : ''}>
        <Space vertical>
          <Verified size={50} />
          <div>{t('contact.form.success')}</div>
        </Space>
      </SuccessMessage>
    </Wrapper>
  );
}

const SuccessMessage = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: color-mix(in srgb, var(--dark-gray-color), transparent 40%);
  color: #fff;
  width: 80%;
  max-width: 350px;
  padding: 20px 40px;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  opacity: 0;
  visibility: hidden;
  transition: all 0.5s ease-in-out;
  font-size: 1.2rem;
  font-family: 'TW_Bd';
  text-align: center;
  white-space: pre-line;

  &.visible {
    opacity: 1;
    visibility: visible;
    transform: translate(-50%, -50%) scale(1);
  }
`;

const StyledForm = styled(Form)`
  &&&&& {
    input,
    .ant-select {
      line-height: 2.5;
    }

    .ant-form-item-label > label,
    .ant-checkbox-label {
      font-weight: 500;
      font-family: 'EN_Bd';
    }

    .ant-checkbox {
      align-self: center;
      transform: scale(1.25);
    }

    .ant-btn-variant-link {
      display: inline;
    }

    .ant-form-item-required::before {
      display: none;
    }

    .ant-form-item-required::after {
      content: '${(props) => props.$requiredText}';
      font-size: 0.7em;
      color: #fff;
      background: var(--secondary-color);
      border-radius: 0.8em;
      padding: 2px 4px;
      visibility: visible;
    }

    .ant-btn[type='submit'] {
      height: 100%;
      line-height: 2.5;
      border-radius: 2rem;
    }
  }
`;

const Wrapper = styled.main`
  padding-top: var(--navbar-height);

  & > .page-head {
    padding: 50px 0;
    text-align: center;

    & h2 {
      font-size: 2.5rem;
      font-family: 'EN_Bd', 'TW_Bd', sans-serif;
    }
  }

  & > .page-body {
    padding: 30px 0;

    & > .container > div {
      margin: auto;
      max-width: 800px;
      background: var(--light-gray-color);
      border-radius: 1rem;
      padding: 2rem;
    }
  }
`;

export default Contact;
