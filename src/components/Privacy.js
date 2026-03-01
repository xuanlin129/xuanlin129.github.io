import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import * as Ant from 'antd';

const PrivacyModal = ({ visible, onCancel }) => {
  const { t } = useTranslation();

  return (
    <Ant.Modal open={visible} onCancel={onCancel} footer={null} width={600}>
      <Ant.Typography style={{ padding: '2rem 1rem' }}>
        <Title level={4} style={{ textAlign: 'center' }}>
          {t('privacy.title')}
        </Title>
        <Ant.Typography.Paragraph>{t('privacy.intro')}</Ant.Typography.Paragraph>

        <Title level={5}>{t('privacy.collection.title')}</Title>
        <Ant.Typography.Paragraph>
          {t('privacy.collection.prefix')}
          <Ant.Typography.Text strong>{t('privacy.fields.name_email')}</Ant.Typography.Text>
          {t('privacy.collection.middle')}
          <Ant.Typography.Text strong>{t('privacy.fields.message')}</Ant.Typography.Text>
          {t('privacy.collection.suffix')}
        </Ant.Typography.Paragraph>

        <Title level={5}>{t('privacy.usage.title')}</Title>
        <Ant.Typography.Paragraph>{t('privacy.usage.content')}</Ant.Typography.Paragraph>

        <Title level={5}>{t('privacy.thirdparty.title')}</Title>
        <Ant.Typography.Paragraph>
          {t('privacy.thirdparty.prefix')}
          <Ant.Typography.Text code>{t('privacy.thirdparty.service')}</Ant.Typography.Text>
          {t('privacy.thirdparty.suffix')}
        </Ant.Typography.Paragraph>

        <Title level={5}>{t('privacy.rights.title')}</Title>
        <Ant.Typography.Paragraph>{t('privacy.rights.content')}</Ant.Typography.Paragraph>
      </Ant.Typography>
    </Ant.Modal>
  );
};

const Title = styled(Ant.Typography.Title)`
  font-family: 'EN_Bd';
`;

export default PrivacyModal;
