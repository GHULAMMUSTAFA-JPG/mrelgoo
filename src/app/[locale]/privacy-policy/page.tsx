import { websiteBrandName } from '@/_data/common'
import CustomLink from '@/app/components/CustomLink'
import PublicLayout from '@/app/components/publicLayout/PublicLayout'
import { colors } from '@/theme/colors'
import {
  Box,
  Container,
  HStack,
  Text,
  VStack,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  OrderedList,
  ListItem,
} from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

export default function PrivacyPolicy() {
  return (
    <PublicLayout hasGreyBG>
      <Box
        userSelect='none'
        // onCopy={(event) => {
        //   event.preventDefault()
        // }}
        mt='61px'
        bg='#FAFAFA'
        pb={{ base: '1rem', md: '30px', xl: '90px' }}
      >
        <Container
          px={{ base: 'm', md: '30px', xl: '16px' }}
          maxW='container.xl'
          pt={{ base: '25.5px', md: '33.5px' }}
        >
          <Box>
            <HStack gap='m'>
              <CustomLink href='/'>
                <Image
                  src='/back-arrow.svg'
                  height={33}
                  width={33}
                  alt={websiteBrandName}
                />
              </CustomLink>
              <Text
                fontSize='20px'
                fontWeight='semibold'
                lineHeight='150%'
                textColor={colors.black}
              >
                Back
              </Text>
            </HStack>
          </Box>

          <HStack justifyContent='space-between' alignItems='flex-start'>
            <Box mt={{ base: '20px', md: '24px' }} maxW='848px'>
              <Text
                as='h1'
                fontSize={{ base: '28px', md: '42px' }}
                fontWeight='bold'
                lineHeight='150%'
                textColor={colors.black}
              >
                Privacy Policy
              </Text>
              <Text
                mt='24px'
                mb={{ base: '20px', md: '20px' }}
                fontSize={{ base: '13px', md: '14px' }}
                fontWeight='medium'
                lineHeight='150%'
                textColor={colors.black}
              >
                Last Updated: April 27, 2024
              </Text>

              <VStack gap='12px'>
                <Text
                  fontSize={{ base: '13px', md: '14px' }}
                  fontWeight='medium'
                  lineHeight='150%'
                  textColor={colors.black}
                >
                  This privacy notice for AI THINGS LLC ("
                  <b>we</b>," "<b>us</b>," or "<b>our</b>"), describes how and
                  why we might collect, store, use, and/or share ("
                  <b>process</b>") your information when you use our services ("
                  <b>Services</b>"), such as when you:
                  <br />
                  Visit our website at{' '}
                  <a href='http://www.baby.zone'>http://www.baby.zone</a>, or
                  any website of ours that links to this privacy notice
                  <br />
                  Engage with us in other related ways, including any sales,
                  marketing, or events
                  <br />
                  <b>Questions or concerns?</b> Reading this privacy notice will
                  help you understand your privacy rights and choices. If you do
                  not agree with our policies and practices, please do not use
                  our Services. If you still have any questions or concerns,
                  please contact us at{' '}
                  <a href='mailto:contact@baby.zone'>contact@baby.zone</a>.
                  <br />
                  <h2
                    style={{
                      marginTop: '24px',
                      marginBottom: '12px',
                      fontSize: '24px',
                      fontWeight: 'bold',
                      lineHeight: '150%',
                      color: '#333',
                    }}
                  >
                    SUMMARY OF KEY POINTS
                  </h2>
                  <br />
                  <i>
                    <b>
                      This summary provides key points from our privacy notice,
                      but you can find out more details about any of these
                      topics by clicking the link following each key point or by
                      using our{' '}
                      <a href='#toc' style={{ color: 'blue' }}>
                        table of contents
                      </a>{' '}
                      below to find the section you are looking for.
                    </b>
                  </i>
                  <br />
                  <br />
                  <b>What personal information do we process?</b> When you
                  visit, use, or navigate our Services, we may process personal
                  information depending on how you interact with us and the
                  Services, the choices you make, and the products and features
                  you use. Learn more about{' '}
                  <a
                    href='#personalinfo'
                    style={{ color: 'blue', textDecoration: 'underline' }}
                  >
                    personal information you disclose to us
                  </a>
                  .
                  <br />
                  <br />
                  <b>Do we process any sensitive personal information?</b> We
                  may process sensitive personal information when necessary with
                  your consent or as otherwise permitted by applicable law.
                  Learn more about{' '}
                  <a
                    href='#sensitiveinfo'
                    style={{ color: 'blue', textDecoration: 'underline' }}
                  >
                    sensitive information we process
                  </a>
                  .
                  <br />
                  <br />
                  <b>Do we receive any information from third parties?</b> We do
                  not receive any information from third parties.
                  <br />
                  <br />
                  <b>How do we process your information?</b> We process your
                  information to provide, improve, and administer our Services,
                  communicate with you, for security and fraud prevention, and
                  to comply with law. We may also process your information for
                  other purposes with your consent. We process your information
                  only when we have a valid legal reason to do so. Learn more
                  about{' '}
                  <a
                    href='#infouse'
                    style={{ color: 'blue', textDecoration: 'underline' }}
                  >
                    how we process your information
                  </a>
                  .
                  <br />
                  <br />
                  <b>
                    In what situations and with which types of parties do we
                    share personal information?
                  </b>{' '}
                  We may share information in specific situations and with
                  specific categories of third parties. Learn more about{' '}
                  <a
                    href='#whoshare'
                    style={{ color: 'blue', textDecoration: 'underline' }}
                  >
                    when and with whom we share your personal information
                  </a>
                  .
                  <br />
                  <br />
                  <b>How do we keep your information safe?</b> We have
                  organizational and technical processes and procedures in place
                  to protect your personal information. However, no electronic
                  transmission over the internet or information storage
                  technology can be guaranteed to be 100% secure, so we cannot
                  promise or guarantee that hackers, cybercriminals, or other
                  unauthorized third parties will not be able to defeat our
                  security and improperly collect, access, steal, or modify your
                  information. Learn more about{' '}
                  <a
                    href='#infosafe'
                    style={{ color: 'blue', textDecoration: 'underline' }}
                  >
                    how we keep your information safe
                  </a>
                  .
                  <br />
                  <br />
                  <b>How do you exercise your rights?</b> The easiest way to
                  exercise your rights is by visiting{' '}
                  <a
                    href='https://baby.zone/contact-us'
                    style={{ color: 'blue' }}
                  >
                    https://baby.zone/contact-us
                  </a>
                  , or by contacting us. We will consider and act upon any
                  request in accordance with applicable data protection laws.
                  <br />
                  <br />
                  Want to learn more about what we do with any information we
                  collect?{' '}
                  <a href='#toc' style={{ color: 'blue' }}>
                    Review the privacy notice in full
                  </a>
                  .
                  <br />
                  <div id='toc'>
                    <h2
                      style={{
                        marginTop: '24px',
                        marginBottom: '12px',
                        fontSize: '24px',
                        fontWeight: 'bold',
                        lineHeight: '150%',
                        color: '#333',
                      }}
                    >
                      TABLE OF CONTENTS
                    </h2>
                  </div>
                  <br />
                  <a href='#infocollect' style={{ color: 'blue' }}>
                    {' '}
                    1. WHAT INFORMATION DO WE COLLECT?
                    <br />
                  </a>
                  <a href='#infouse' style={{ color: 'blue' }}>
                    {' '}
                    2. HOW DO WE PROCESS YOUR INFORMATION?
                    <br />
                  </a>
                  <a href='#legalbases' style={{ color: 'blue' }}>
                    3. WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR PERSONAL
                    INFORMATION?
                    <br />
                  </a>
                  <a href='#whoshare' style={{ color: 'blue' }}>
                    4. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
                    <br />
                  </a>
                  <a href='#intltransfers' style={{ color: 'blue' }}>
                    5. IS YOUR INFORMATION TRANSFERRED INTERNATIONALLY?
                    <br />
                  </a>
                  <a href='#inforetain' style={{ color: 'blue' }}>
                    6. HOW LONG DO WE KEEP YOUR INFORMATION?
                    <br />
                  </a>
                  <a href='#infosafe' style={{ color: 'blue' }}>
                    7. HOW DO WE KEEP YOUR INFORMATION SAFE?
                    <br />
                  </a>
                  <a href='#infominors' style={{ color: 'blue' }}>
                    8. DO WE COLLECT INFORMATION FROM MINORS?
                    <br />
                  </a>
                  <a href='#privacyrights' style={{ color: 'blue' }}>
                    9. WHAT ARE YOUR PRIVACY RIGHTS?
                    <br />
                  </a>
                  <a href='#DNT' style={{ color: 'blue' }}>
                    10. CONTROLS FOR DO-NOT-TRACK FEATURES
                    <br />
                  </a>
                  <a href='#uslaws' style={{ color: 'blue' }}>
                    11. DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?
                    <br />
                  </a>
                  <a href='#otherlaws' style={{ color: 'blue' }}>
                    12. DO OTHER REGIONS HAVE SPECIFIC PRIVACY RIGHTS?
                    <br />
                  </a>
                  <a href='#clausea' style={{ color: 'blue' }}>
                    13. DO WE OFFER PROMOTIONS?
                    <br />
                  </a>
                  <a href='#policyupdates' style={{ color: 'blue' }}>
                    14. DO WE MAKE UPDATES TO THIS NOTICE?
                    <br />
                  </a>
                  <a href='#contact' style={{ color: 'blue' }}>
                    15. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
                    <br />
                  </a>
                  <a href='#request' style={{ color: 'blue' }}>
                    16. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE
                    COLLECT FROM YOU?
                    <br />
                  </a>
                  <br />
                  <div id='infocollect'>
                    <h2
                      style={{
                        marginTop: '24px',
                        marginBottom: '12px',
                        fontSize: '24px',
                        fontWeight: 'bold',
                        lineHeight: '150%',
                        color: '#333',
                      }}
                    >
                      1. WHAT INFORMATION DO WE COLLECT?
                    </h2>
                  </div>
                  <div id='personalinfo'>
                    <h3
                      style={{
                        marginTop: '24px',
                        marginBottom: '12px',
                        fontSize: '24px',
                        fontWeight: 'bold',
                        lineHeight: '150%',
                        color: '#333',
                      }}
                    >
                      Personal information you disclose to us
                    </h3>
                  </div>
                  <br />
                  <i>
                    <b>In Short:</b>We collect personal information that you
                    provide to us.
                  </i>
                  <br />
                  <br />
                  We collect personal information that you voluntarily provide
                  to us when you express an interest in obtaining information
                  about us or our products and Services, when you participate in
                  activities on the Services, or otherwise when you contact us.
                  <br />
                  <br />
                  <b> Personal Information Provided by You.</b> The personal
                  information that we collect depends on the context of your
                  interactions with us and the Services, the choices you make,
                  and the products and features you use. The personal
                  information we collect may include the following:
                  <br />
                  <br />
                  <ul>
                    <li>names</li>
                    <li>email addresses</li>
                    <li>photos</li>
                  </ul>
                  <br />
                  <div id='sensitiveinfo'>
                    <b>Sensitive Information.</b> When necessary, with your
                    consent or as otherwise permitted by applicable law, we
                    process the following categories of sensitive information:
                    <br />
                    <br />
                    <ul>
                      <li>biometric data</li>
                    </ul>
                  </div>
                  <br />
                  <b> Payment Data.</b> We may collect data necessary to process
                  your payment if you make purchases, such as your payment
                  instrument number, and the security code associated with your
                  payment instrument. All payment data is stored by Stripe. You
                  may find their privacy notice link(s) here:{' '}
                  <a href='https://stripe.com/privacy' rel='nofollow'>
                    https://stripe.com/privacy
                  </a>
                  .
                  <br />
                  <br />
                  All personal information that you provide to us must be true,
                  complete, and accurate, and you must notify us of any changes
                  to such personal information.
                  <br />
                  <div id='infouse'>
                    <h2
                      style={{
                        marginTop: '24px',
                        marginBottom: '12px',
                        fontSize: '24px',
                        fontWeight: 'bold',
                        lineHeight: '150%',
                        color: '#333',
                      }}
                    >
                      2. HOW DO WE PROCESS YOUR INFORMATION?
                    </h2>
                  </div>
                  <br />
                  <i>
                    <b>In Short:</b> We process your information to provide,
                    improve, and administer our Services, communicate with you,
                    for security and fraud prevention, and to comply with law.
                    We may also process your information for other purposes with
                    your consent.
                  </i>
                  <br />
                  <br />
                  <b>
                    We process your personal information for a variety of
                    reasons, depending on how you interact with our Services,
                    including:
                  </b>
                  <br />
                  <br />
                  <ul>
                    <li>
                      <b>
                        To deliver and facilitate delivery of services to the
                        user.
                      </b>{' '}
                      We may process your information to provide you with the
                      requested service.
                    </li>
                    <li>
                      <b>
                        To respond to user inquiries/offer support to users.
                      </b>{' '}
                      We may process your information to respond to your
                      inquiries and solve any potential issues you might have
                      with the requested service.
                    </li>
                    <li>
                      <b>To send administrative information to you.</b> We may
                      process your information to send you details about our
                      products and services, changes to our terms and policies,
                      and other similar information.
                    </li>
                    <li>
                      <b>To fulfill and manage your orders.</b> We may process
                      your information to fulfill and manage your orders,
                      payments, returns, and exchanges made through the
                      Services.
                    </li>
                    <li>
                      <b>To save or protect an individual's vital interest.</b>{' '}
                      We may process your information when necessary to save or
                      protect an individual’s vital interest, such as to prevent
                      harm.
                    </li>
                  </ul>
                  <br />
                  <div id='legalbases'>
                    <h2
                      style={{
                        marginTop: '24px',
                        marginBottom: '12px',
                        fontSize: '24px',
                        fontWeight: 'bold',
                        lineHeight: '150%',
                        color: '#333',
                      }}
                    >
                      3. WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR
                      INFORMATION?
                    </h2>
                  </div>
                  <br />
                  <i>
                    <b>In Short:</b> We only process your personal information
                    when we believe it is necessary and we have a valid legal
                    reason (i.e., legal basis) to do so under applicable law,
                    like with your consent, to comply with laws, to provide you
                    with services to enter into or fulfill our contractual
                    obligations, to protect your rights, or to fulfill our
                    legitimate business interests.
                  </i>
                  <br />
                  <br />
                  <a style={{ textDecoration: 'underline' }}>
                    <i>
                      <b>
                        If you are located in the EU or UK, this section applies
                        to you.
                      </b>
                    </i>
                  </a>
                  <br />
                  <br />
                  The General Data Protection Regulation (GDPR) and UK GDPR
                  require us to explain the valid legal bases we rely on in
                  order to process your personal information. As such, we may
                  rely on the following legal bases to process your personal
                  information:
                  <br />
                  <br />
                  <ul>
                    <li>
                      <b>Consent.</b> We may process your information if you
                      have given us permission (i.e., consent) to use your
                      personal information for a specific purpose. You can
                      withdraw your consent at any time. Learn more about{' '}
                      <a href='#withdrawconsent' style={{ color: 'blue' }}>
                        withdrawing your consent.
                      </a>
                    </li>
                    <li>
                      <b>Performance of a Contract.</b> We may process your
                      personal information when we believe it is necessary to
                      fulfill our contractual obligations to you, including
                      providing our Services or at your request prior to
                      entering into a contract with you.
                    </li>
                    <li>
                      <b>Legal Obligations.</b> We may process your information
                      where we believe it is necessary for compliance with our
                      legal obligations, such as to cooperate with a law
                      enforcement body or regulatory agency, exercise or defend
                      our legal rights, or disclose your information as evidence
                      in litigation in which we are involved.
                    </li>
                    <li>
                      <b>Vital Interests.</b> We may process your information
                      where we believe it is necessary to protect your vital
                      interests or the vital interests of a third party, such as
                      situations involving potential threats to the safety of
                      any person.
                    </li>
                  </ul>
                  <br />
                  <br />
                  <a style={{ textDecoration: 'underline' }}>
                    <i>
                      <b>
                        If you are located in Canada, this section applies to
                        you.
                      </b>
                    </i>
                  </a>
                  <br />
                  <br />
                  We may process your information if you have given us specific
                  permission (i.e., express consent) to use your personal
                  information for a specific purpose, or in situations where
                  your permission can be inferred (i.e., implied consent).{' '}
                  <a href='#withdrawconsent' style={{ color: 'blue' }}>
                    You can withdraw your consent
                  </a>{' '}
                  at any time.
                  <br />
                  <br />
                  In some exceptional cases, we may be legally permitted under
                  applicable law to process your information without your
                  consent, including, for example:
                  <br />
                  <br />
                  <ul>
                    <li>
                      If collection is clearly in the interests of an individual
                      and consent cannot be obtained in a timely way
                    </li>
                    <li>
                      For investigations and fraud detection and prevention
                    </li>
                    <li>
                      For business transactions provided certain conditions are
                      met
                    </li>
                    <li>
                      If it is contained in a witness statement and the
                      collection is necessary to assess, process, or settle an
                      insurance claim
                    </li>
                    <li>
                      For identifying injured, ill, or deceased persons and
                      communicating with next of kin
                    </li>
                    <li>
                      If we have reasonable grounds to believe an individual has
                      been, is, or may be victim of financial abuse
                    </li>
                    <li>
                      If it is reasonable to expect collection and use with
                      consent would compromise the availability or the accuracy
                      of the information and the collection is reasonable for
                      purposes related to investigating a breach of an agreement
                      or a contravention of the laws of Canada or a province
                    </li>
                    <li>
                      If disclosure is required to comply with a subpoena,
                      warrant, court order, or rules of the court relating to
                      the production of records
                    </li>
                    <li>
                      If it was produced by an individual in the course of their
                      employment, business, or profession and the collection is
                      consistent with the purposes for which the information was
                      produced
                    </li>
                    <li>
                      If the collection is solely for journalistic, artistic, or
                      literary purposes
                    </li>
                    <li>
                      If the information is publicly available and is specified
                      by the regulations
                    </li>
                  </ul>
                  <br />
                  <div id='whoshare'>
                    <h2
                      style={{
                        marginTop: '24px',
                        marginBottom: '12px',
                        fontSize: '24px',
                        fontWeight: 'bold',
                        lineHeight: '150%',
                        color: '#333',
                      }}
                    >
                      4. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL
                      INFORMATION?
                    </h2>
                  </div>
                  <br />
                  <i>
                    <b>In Short:</b> We may share information in specific
                    situations described in this section and/or with the
                    following categories of third parties.
                  </i>
                  <br />
                  <br />
                  <b>
                    Vendors, Consultants, and Other Third-Party Service
                    Providers.
                  </b>{' '}
                  We may share your data with third-party vendors, service
                  providers, contractors, or agents ("<b>third parties</b>") who
                  perform services for us or on our behalf and require access to
                  such information to do that work. The categories of third
                  parties we may share personal information with are as follows:
                  <br />
                  <br />
                  <ul>
                    <li>Payment Processors</li>
                    <li>Data Storage Service Providers</li>
                    <li>Cloud Computing Services</li>
                  </ul>
                  <br />
                  We also may need to share your personal information in the
                  following situations:
                  <br />
                  <br />
                  <ul>
                    <li>
                      <b>Business Transfers.</b> We may share or transfer your
                      information in connection with, or during negotiations of,
                      any merger, sale of company assets, financing, or
                      acquisition of all or a portion of our business to another
                      company.
                    </li>
                  </ul>
                  <br />
                  <div id='intltransfers'>
                    <h2
                      style={{
                        marginTop: '24px',
                        marginBottom: '12px',
                        fontSize: '24px',
                        fontWeight: 'bold',
                        lineHeight: '150%',
                        color: '#333',
                      }}
                    >
                      5. IS YOUR INFORMATION TRANSFERRED INTERNATIONALLY?
                    </h2>
                  </div>
                  <br />
                  <i>
                    <b>In Short:</b> We may transfer, store, and process your
                    information in countries other than your own.
                  </i>
                  <br />
                  <br />
                  Our servers are located in the United States. If you are
                  accessing our Services from outside the United States, please
                  be aware that your information may be transferred to, stored,
                  and processed by us in our facilities and by those third
                  parties with whom we may share your personal information (see
                  "
                  <a href='#whoshare' style={{ color: 'blue' }}>
                    WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?"
                  </a>{' '}
                  above), in the United States, and other countries.
                  <br />
                  <br />
                  If you are a resident in the European Economic Area (EEA),
                  United Kingdom (UK), or Switzerland, then these countries may
                  not necessarily have data protection laws or other similar
                  laws as comprehensive as those in your country. However, we
                  will take all necessary measures to protect your personal
                  information in accordance with this privacy notice and
                  applicable law.
                  <br />
                  <br />
                  European Commission's Standard Contractual Clauses:
                  <br />
                  <br />
                  We have implemented measures to protect your personal
                  information, including by using the European Commission's
                  Standard Contractual Clauses for transfers of personal
                  information between our group companies and between us and our
                  third-party providers. These clauses require all recipients to
                  protect all personal information that they process originating
                  from the EEA or UK in accordance with European data protection
                  laws and regulations. Our Standard Contractual Clauses can be
                  provided upon request. We have implemented similar appropriate
                  safeguards with our third-party service providers and partners
                  and further details can be provided upon request.
                  <br />
                  <div id='inforetain'>
                    <h2
                      style={{
                        marginTop: '24px',
                        marginBottom: '12px',
                        fontSize: '24px',
                        fontWeight: 'bold',
                        lineHeight: '150%',
                        color: '#333',
                      }}
                    >
                      6. HOW LONG DO WE KEEP YOUR INFORMATION?
                    </h2>
                  </div>
                  <br />
                  <i>
                    <b>In Short:</b> We keep your information for as long as
                    necessary to fulfill the purposes outlined in this privacy
                    notice unless otherwise required by law.
                  </i>
                  <br />
                  <br />
                  We will only keep your personal information for as long as it
                  is necessary for the purposes set out in this privacy notice,
                  unless a longer retention period is required or permitted by
                  law (such as tax, accounting, or other legal requirements).
                  When we have no ongoing legitimate business need to process
                  your personal information, we will either delete or anonymize
                  such information, or, if this is not possible (for example,
                  because your personal information has been stored in backup
                  archives), then we will securely store your personal
                  information and isolate it from any further processing until
                  deletion is possible.
                  <br />
                  <div id='infosafe'>
                    <h2
                      style={{
                        marginTop: '24px',
                        marginBottom: '12px',
                        fontSize: '24px',
                        fontWeight: 'bold',
                        lineHeight: '150%',
                        color: '#333',
                      }}
                    >
                      7. HOW DO WE KEEP YOUR INFORMATION SAFE?
                    </h2>
                  </div>
                  <br />
                  <i>
                    <b>In Short:</b> We aim to protect your personal information
                    through a system of organizational and technical security
                    measures.
                  </i>
                  <br />
                  <br />
                  We have implemented appropriate and reasonable technical and
                  organizational security measures designed to protect the
                  security of any personal information we process. However,
                  despite our safeguards and efforts to secure your information,
                  no electronic transmission over the Internet or information
                  storage technology can be guaranteed to be 100% secure, so we
                  cannot promise or guarantee that hackers, cybercriminals, or
                  other unauthorized third parties will not be able to defeat
                  our security and improperly collect, access, steal, or modify
                  your information. Although we will do our best to protect your
                  personal information, transmission of personal information to
                  and from our Services is at your own risk. You should only
                  access the Services within a secure environment.
                  <br />
                  <div id='infominors'>
                    <h2
                      style={{
                        marginTop: '24px',
                        marginBottom: '12px',
                        fontSize: '24px',
                        fontWeight: 'bold',
                        lineHeight: '150%',
                        color: '#333',
                      }}
                    >
                      8. DO WE COLLECT INFORMATION FROM MINORS?
                    </h2>
                  </div>
                  <br />
                  <i>
                    <b>In Short:</b> We do not knowingly collect data from or
                    market to children under 18 years of age.
                  </i>
                  <br />
                  <br />
                  We do not knowingly solicit data from or market to children
                  under 18 years of age. By using the Services, you represent
                  that you are at least 18 or that you are the parent or
                  guardian of such a minor and consent to such minor dependent’s
                  use of the Services. If we learn that personal information
                  from users less than 18 years of age has been collected, we
                  will deactivate the account and take reasonable measures to
                  promptly delete such data from our records. If you become
                  aware of any data we may have collected from children under
                  age 18, please contact us at contact@baby.zone.
                  <br />
                  <div id='privacyrights'>
                    <h2
                      style={{
                        marginTop: '24px',
                        marginBottom: '12px',
                        fontSize: '24px',
                        fontWeight: 'bold',
                        lineHeight: '150%',
                        color: '#333',
                      }}
                    >
                      9. WHAT ARE YOUR PRIVACY RIGHTS?
                    </h2>
                  </div>
                  <br />
                  <i>
                    <b>In Short:</b> We do not knowingly collect data from or
                    market to children under 18 years of age.
                  </i>
                  <br />
                  <br />
                  In some regions (like the EEA, UK, Switzerland, and Canada),
                  you have certain rights under applicable data protection laws.
                  These may include the right (i) to request access and obtain a
                  copy of your personal information, (ii) to request
                  rectification or erasure; (iii) to restrict the processing of
                  your personal information; (iv) if applicable, to data
                  portability; and (v) not to be subject to automated
                  decision-making. In certain circumstances, you may also have
                  the right to object to the processing of your personal
                  information. You can make such a request by contacting us by
                  using the contact details provided in the section "
                  <a href='#contact' style={{ color: 'blue' }}>
                    HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
                  </a>
                  " below.
                  <br />
                  <br />
                  We will consider and act upon any request in accordance with
                  applicable data protection laws.
                  <br />
                  <br />
                  If you are located in the EEA or UK and you believe we are
                  unlawfully processing your personal information, you also have
                  the right to complain to your{' '}
                  <a
                    href='https://ico.org.uk/make-a-complaint/data-protection-complaints/data-protection-complaints/'
                    rel='nofollow'
                    style={{ color: 'blue' }}
                  >
                    Member State data
                  </a>{' '}
                  protection authority or{' '}
                  <a
                    href='https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm'
                    rel='nofollow'
                    style={{ color: 'blue' }}
                  >
                    UK data protection authority
                  </a>
                  .
                  <br />
                  <br />
                  If you are located in Switzerland, you may contact the{' '}
                  <a
                    href='https://www.edoeb.admin.ch/edoeb/en/home.html'
                    rel='nofollow'
                    style={{ color: 'blue' }}
                  >
                    Federal Data Protection and Information Commissioner
                  </a>
                  .
                  <br />
                  <br />
                  <div id='withdrawconsent'>
                    <a style={{ textDecoration: 'underline' }}>
                      <b>Withdrawing your consent:</b>
                    </a>{' '}
                    If we are relying on your consent to process your personal
                    information, which may be express and/or implied consent
                    depending on the applicable law, you have the right to
                    withdraw your consent at any time. You can withdraw your
                    consent at any time by contacting us by using the contact
                    details provided in the section "
                    <a href='#contact' style={{ color: 'blue' }}>
                      HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
                    </a>
                    " below.
                  </div>
                  <br />
                  <br />
                  However, please note that this will not affect the lawfulness
                  of the processing before its withdrawal nor, when applicable
                  law allows, will it affect the processing of your personal
                  information conducted in reliance on lawful processing grounds
                  other than consent.
                  <br />
                  <br />
                  If you have questions or comments about your privacy rights,
                  you may email us at contact@baby.zone.
                  <br />
                  <div id='DNT'>
                    <h2
                      style={{
                        marginTop: '24px',
                        marginBottom: '12px',
                        fontSize: '24px',
                        fontWeight: 'bold',
                        lineHeight: '150%',
                        color: '#333',
                      }}
                    >
                      10. CONTROLS FOR DO-NOT-TRACK FEATURES
                    </h2>
                  </div>
                  <br />
                  Most web browsers and some mobile operating systems and mobile
                  applications include a Do-Not-Track ("DNT") feature or setting
                  you can activate to signal your privacy preference not to have
                  data about your online browsing activities monitored and
                  collected. At this stage no uniform technology standard for
                  recognizing and implementing DNT signals has been finalized.
                  As such, we do not currently respond to DNT browser signals or
                  any other mechanism that automatically communicates your
                  choice not to be tracked online. If a standard for online
                  tracking is adopted that we must follow in the future, we will
                  inform you about that practice in a revised version of this
                  privacy notice.
                  <br />
                  <div id='uslaws'>
                    <h2
                      style={{
                        marginTop: '24px',
                        marginBottom: '12px',
                        fontSize: '24px',
                        fontWeight: 'bold',
                        lineHeight: '150%',
                        color: '#333',
                      }}
                    >
                      11. DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY
                      RIGHTS?
                    </h2>
                  </div>
                  <br />
                  <i>
                    <b>In Short:</b> If you are a resident of California, you
                    are granted specific rights regarding access to your
                    personal information.
                  </i>
                  <br />
                  <br />
                  <b>What categories of personal information do we collect?</b>
                  <br />
                  <br />
                  We have collected the following categories of personal
                  information in the past twelve (12) months:
                  <br />
                  <br />
                  <Table variant='simple' size='sm'>
                    <Thead>
                      <Tr>
                        <Th>Category</Th>
                        <Th>Examples</Th>
                        <Th>Collected</Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      <Tr>
                        <Td>A. Identifiers</Td>
                        <Td>
                          Contact details, such as real name, alias, postal
                          address, telephone or mobile contact number, unique
                          personal identifier, online identifier, Internet
                          Protocol address, email address, and account name
                        </Td>
                        <Td>NO</Td>
                      </Tr>
                      <Tr>
                        <Td>
                          B. Personal information as defined in the California
                          Customer Records statute
                        </Td>
                        <Td>
                          Name, contact information, education, employment,
                          employment history, and financial information
                        </Td>
                        <Td> </Td>
                      </Tr>
                      <Tr>
                        <Td>
                          C. Protected classification characteristics under
                          state or federal law
                        </Td>
                        <Td>Gender and date of birth</Td>
                        <Td>NO</Td>
                      </Tr>
                      <Tr>
                        <Td>D. Commercial information</Td>
                        <Td>
                          Transaction information, purchase history, financial
                          details, and payment information
                        </Td>
                        <Td>NO</Td>
                      </Tr>
                      <Tr>
                        <Td>E. Biometric information</Td>
                        <Td>Fingerprints and voiceprints</Td>
                        <Td>NO</Td>
                      </Tr>
                      <Tr>
                        <Td>F. Internet or other similar network activity</Td>
                        <Td>
                          Browsing history, search history, online behavior,
                          interest data, and interactions with our and other
                          websites, applications, systems, and advertisements
                        </Td>
                        <Td>NO</Td>
                      </Tr>
                      <Tr>
                        <Td>G. Geolocation data</Td>
                        <Td>Device location</Td>
                        <Td>NO</Td>
                      </Tr>
                      <Tr>
                        <Td>
                          H. Audio, electronic, visual, thermal, olfactory, or
                          similar information
                        </Td>
                        <Td>
                          Images and audio, video or call recordings created in
                          connection with our business activities
                        </Td>
                        <Td>NO</Td>
                      </Tr>
                      <Tr>
                        <Td>
                          I. Professional or employment-related information
                        </Td>
                        <Td>
                          Business contact details in order to provide you our
                          Services at a business level or job title, work
                          history, and professional qualifications if you apply
                          for a job with us
                        </Td>
                        <Td>NO</Td>
                      </Tr>
                      <Tr>
                        <Td>J. Education Information</Td>
                        <Td>Student records and directory information</Td>
                        <Td>NO</Td>
                      </Tr>
                      <Tr>
                        <Td>
                          K. Inferences drawn from collected personal
                          information
                        </Td>
                        <Td>
                          Inferences drawn from any of the collected personal
                          information listed above to create a profile or
                          summary about, for example, an individual’s
                          preferences and characteristics
                        </Td>
                        <Td>NO</Td>
                      </Tr>
                      <Tr>
                        <Td>L. Sensitive personal Information</Td>
                        <Td>Biometric data</Td>
                        <Td>YES</Td>
                      </Tr>
                    </Tbody>
                  </Table>
                  <br />
                  <br />
                  We will use and retain the collected personal information as
                  needed to provide the Services or for:
                  <br />
                  <br />
                  <ul>
                    <li>Category L - 1 year</li>
                  </ul>
                  Category L information may be used, or disclosed to a service
                  provider or contractor, for additional, specified purposes.
                  You have the right to limit the use or disclosure of your
                  sensitive personal information.
                  <br />
                  We may also collect other personal information outside of
                  these categories through instances where you interact with us
                  in person, online, or by phone or mail in the context of:
                  <br />
                  <ul>
                    <li>
                      Receiving help through our customer support channels;
                    </li>
                    <li>Participation in customer surveys or contests; and</li>
                    <li>
                      Facilitation in the delivery of our Services and to
                      respond to your inquiries.
                    </li>
                  </ul>
                  <br />
                  <b>How do we use and share your personal information?</b>
                  <br />
                  Learn about how we use your personal information in the
                  section, "
                  <a href='#infouse' style={{ color: 'blue' }}>
                    HOW DO WE PROCESS YOUR INFORMATION?
                  </a>
                  "
                  <br />
                  <b>Will your information be shared with anyone else?</b>
                  <br />
                  We may disclose your personal information with our service
                  providers pursuant to a written contract between us and each
                  service provider. Learn more about how we disclose personal
                  information to in the section, "
                  <a href='#whoshare' style={{ color: 'blue' }}>
                    WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
                  </a>
                  "
                  <br />
                  <br />
                  We may use your personal information for our own business
                  purposes, such as for undertaking internal research for
                  technological development and demonstration. This is not
                  considered to be "selling" of your personal information.
                  <br />
                  <br />
                  We have not sold or shared any personal information to third
                  parties for a business or commercial purpose in the preceding
                  twelve (12) months. We have disclosed the following categories
                  of personal information to third parties for a business or
                  commercial purpose in the preceding twelve (12) months:
                  <br />
                  The categories of third parties to whom we disclosed personal
                  information for a business or commercial purpose can be found
                  under "
                  <a href='#whoshare' style={{ color: 'blue' }}>
                    WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
                  </a>
                  "
                  <br />
                  <h3
                    style={{
                      marginTop: '24px',
                      marginBottom: '12px',
                      fontSize: '24px',
                      fontWeight: 'bold',
                      lineHeight: '150%',
                      color: '#333',
                    }}
                  >
                    California Residents
                  </h3>
                  <br />
                  California Civil Code Section 1798.83, also known as the
                  "Shine The Light" law permits our users who are California
                  residents to request and obtain from us, once a year and free
                  of charge, information about categories of personal
                  information (if any) we disclosed to third parties for direct
                  marketing purposes and the names and addresses of all third
                  parties with which we shared personal information in the
                  immediately preceding calendar year. If you are a California
                  resident and would like to make such a request, please submit
                  your request in writing to us using the contact information
                  provided below.
                  <br />
                  <br />
                  If you are under 18 years of age, reside in California, and
                  have a registered account with the Services, you have the
                  right to request removal of unwanted data that you publicly
                  post on the Services. To request removal of such data, please
                  contact us using the contact information provided below and
                  include the email address associated with your account and a
                  statement that you reside in California. We will make sure the
                  data is not publicly displayed on the Services, but please be
                  aware that the data may not be completely or comprehensively
                  removed from all our systems (e.g., backups, etc.).
                  <br />
                  <a style={{ textDecoration: 'underline' }}>
                    <b>CCPA Privacy Notice</b>
                  </a>
                  <br />
                  <br />
                  This section applies only to California residents. Under the
                  California Consumer Privacy Act (CCPA), you have the rights
                  listed below.
                  <br />
                  <br />
                  The California Code of Regulations defines a "residents" as:
                  <br />
                  <br />
                  <OrderedList>
                    <ListItem>
                      every individual who is in the State of California for
                      other than a temporary or transitory purpose and
                    </ListItem>
                    <ListItem>
                      every individual who is domiciled in the State of
                      California who is outside the State of California for a
                      temporary or transitory purpose
                    </ListItem>
                  </OrderedList>
                  <br />
                  <br />
                  All other individuals are defined as "non-residents."
                  <br />
                  <br />
                  If this definition of "resident" applies to you, we must
                  adhere to certain rights and obligations regarding your
                  personal information.
                  <br />
                  <br />
                  <b>Your rights with respect to your personal data</b>
                  <br />
                  <br />
                  <a style={{ textDecoration: 'underline' }}>
                    Right to request deletion of the data — Request to delete
                  </a>
                  <br />
                  <br />
                  You can ask for the deletion of your personal information. If
                  you ask us to delete your personal information, we will
                  respect your request and delete your personal information,
                  subject to certain exceptions provided by law, such as (but
                  not limited to) the exercise by another consumer of his or her
                  right to free speech, our compliance requirements resulting
                  from a legal obligation, or any processing that may be
                  required to protect against illegal activities.
                  <br />
                  <br />
                  <a style={{ textDecoration: 'underline' }}>
                    Right to be informed — Request to know
                  </a>
                  <br />
                  <br />
                  Depending on the circumstances, you have a right to know:
                  <br />
                  <br />
                  <ul>
                    <li>
                      whether we collect and use your personal information;
                    </li>
                    <li>
                      the categories of personal information that we collect;
                    </li>
                    <li>
                      the purposes for which the collected personal information
                      is used;
                    </li>
                    <li>
                      whether we sell or share personal information to third
                      parties;
                    </li>
                    <li>
                      the categories of personal information that we sold,
                      shared, or disclosed for a business purpose;
                    </li>
                    <li>
                      the categories of third parties to whom the personal
                      information was sold, shared, or disclosed for a business
                      purpose;
                    </li>
                    <li>
                      the business or commercial purpose for collecting,
                      selling, or sharing personal information; and
                    </li>
                    <li>
                      the specific pieces of personal information we collected
                      about you.
                    </li>
                  </ul>
                  <br />
                  <br />
                  In accordance with applicable law, we are not obligated to
                  provide or delete consumer information that is de-identified
                  in response to a consumer request or to re-identify individual
                  data to verify a consumer request.
                  <br />
                  <br />
                  <a style={{ textDecoration: 'underline' }}>
                    Right to Non-Discrimination for the Exercise of a Consumer’s
                    Privacy Rights
                  </a>
                  <br />
                  <br />
                  We will not discriminate against you if you exercise your
                  privacy rights.
                  <a style={{ textDecoration: 'underline' }}>
                    Right to Limit Use and Disclosure of Sensitive Personal
                    Information
                  </a>
                  <br />
                  <br />
                  If the business collects any of the following:
                  <br />
                  <br />
                  <ul>
                    <li>
                      social security information, drivers' licenses, state ID
                      cards, passport numbers
                    </li>
                    <li>account login information</li>
                    <li>
                      credit card numbers, financial account information, or
                      credentials allowing access to such accounts
                    </li>
                    <li>precise geolocation</li>
                    <li>
                      racial or ethnic origin, religious or philosophical
                      beliefs, union membership
                    </li>
                    <li>
                      the contents of email and text, unless the business is the
                      intended recipient of the communication
                    </li>
                    <li>genetic data, biometric data, and health data</li>
                    <li>data concerning sexual orientation and sex life</li>
                  </ul>
                  <br />
                  you have the right to direct that business to limit its use of
                  your sensitive personal information to that use which is
                  necessary to perform the Services.
                  <br />
                  <br />
                  Once a business receives your request, they are no longer
                  allowed to use or disclose your sensitive personal information
                  for any other purpose unless you provide consent for the use
                  or disclosure of sensitive personal information for additional
                  purposes.
                  <br />
                  <br />
                  Please note that sensitive personal information that is
                  collected or processed without the purpose of inferring
                  characteristics about a consumer is not covered by this right,
                  as well as the publicly available information.
                  <br />
                  <br />
                  To exercise your right to limit use and disclosure of
                  sensitive personal information, please email contact@baby.zone
                  or visit:{' '}
                  <a
                    href='https://baby.zone/contact-us'
                    style={{ color: 'blue' }}
                  >
                    https://baby.zone/contact-us
                  </a>
                  .
                  <br />
                  <br />
                  <a style={{ textDecoration: 'underline' }}>
                    Verification process
                  </a>
                  <br />
                  <br />
                  Upon receiving your request, we will need to verify your
                  identity to determine you are the same person about whom we
                  have the information in our system. These verification efforts
                  require us to ask you to provide information so that we can
                  match it with information you have previously provided us. For
                  instance, depending on the type of request you submit, we may
                  ask you to provide certain information so that we can match
                  the information you provide with the information we already
                  have on file, or we may contact you through a communication
                  method (e.g., phone or email) that you have previously
                  provided to us. We may also use other verification methods as
                  the circumstances dictate.
                  <br />
                  <br />
                  We will only use personal information provided in your request
                  to verify your identity or authority to make the request. To
                  the extent possible, we will avoid requesting additional
                  information from you for the purposes of verification.
                  However, if we cannot verify your identity from the
                  information already maintained by us, we may request that you
                  provide additional information for the purposes of verifying
                  your identity and for security or fraud-prevention purposes.
                  We will delete such additionally provided information as soon
                  as we finish verifying you.
                  <br />
                  <br />
                  <a style={{ textDecoration: 'underline' }}>
                    Other privacy rights
                  </a>
                  <br />
                  <br />
                  <ul>
                    <li>
                      You may object to the processing of your personal
                      information.
                    </li>
                    <li>
                      You may request correction of your personal data if it is
                      incorrect or no longer relevant, or ask to restrict the
                      processing of the information.
                    </li>
                    <li>
                      You can designate an authorized agent to make a request
                      under the CCPA on your behalf. We may deny a request from
                      an authorized agent that does not submit proof that they
                      have been validly authorized to act on your behalf in
                      accordance with the CCPA.
                    </li>
                    <li>
                      You may request to opt out from future selling or sharing
                      of your personal information to third parties. Upon
                      receiving an opt-out request, we will act upon the request
                      as soon as feasibly possible, but no later than fifteen
                      (15) days from the date of the request submission.
                    </li>
                  </ul>
                  <br />
                  To exercise these rights, you can contact us by visiting{' '}
                  <a
                    href='https://baby.zone/contact-us'
                    style={{ color: 'blue' }}
                  >
                    https://baby.zone/contact-us
                  </a>
                  , by email at contact@baby.zone, by visiting{' '}
                  <a
                    href='https://baby.zone/contact-us'
                    style={{ color: 'blue' }}
                  >
                    https://baby.zone/contact-us
                  </a>
                  , or by referring to the contact details at the bottom of this
                  document. If you have a complaint about how we handle your
                  data, we would like to hear from you.
                  <br />
                  <div id='otherlaws'>
                    <h2
                      style={{
                        marginTop: '24px',
                        marginBottom: '12px',
                        fontSize: '24px',
                        fontWeight: 'bold',
                        lineHeight: '150%',
                        color: '#333',
                      }}
                    >
                      12. DO OTHER REGIONS HAVE SPECIFIC PRIVACY RIGHTS?
                    </h2>
                  </div>
                  <br />
                  <i>
                    <b>In Short:</b> You may have additional rights based on the
                    country you reside in.
                  </i>
                  <br />
                  <br />
                  <h3
                    style={{
                      marginTop: '24px',
                      marginBottom: '12px',
                      fontSize: '24px',
                      fontWeight: 'bold',
                      lineHeight: '150%',
                      color: '#333',
                    }}
                  >
                    Australia and New Zealand
                  </h3>
                  <br />
                  We collect and process your personal information under the
                  obligations and conditions set by Australia's Privacy Act 1988
                  and New Zealand's Privacy Act 2020 (Privacy Act).
                  <br />
                  <br />
                  This privacy notice satisfies the notice requirements defined
                  in both Privacy Acts, in particular: what personal information
                  we collect from you, from which sources, for which purposes,
                  and other recipients of your personal information.
                  <br />
                  <br />
                  If you do not wish to provide the personal information
                  necessary to fulfill their applicable purpose, it may affect
                  our ability to provide our services, in particular:
                  <ul>
                    <li>offer you the products or services that you want</li>
                    <li>respond to or help with your requests</li>
                  </ul>
                  <br />
                  At any time, you have the right to request access to or
                  correction of your personal information. You can make such a
                  request by contacting us by using the contact details provided
                  in the section "
                  <a href='#request' style={{ color: 'blue' }}>
                    HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT
                    FROM YOU?
                  </a>
                  "
                  <br />
                  If you believe we are unlawfully processing your personal
                  information, you have the right to submit a complaint about a
                  breach of the Australian Privacy Principles to the{' '}
                  <a
                    href='https://www.oaic.gov.au/privacy/privacy-complaints/lodge-a-privacy-complaint-with-us'
                    style={{ color: 'blue' }}
                    rel='nofollow'
                  >
                    Office of the Australian Information Commissioner
                  </a>{' '}
                  and a breach of New Zealand's Privacy Principles to the{' '}
                  <a
                    href='https://www.privacy.org.nz/your-rights/making-a-complaint/'
                    style={{ color: 'blue' }}
                    rel='nofollow'
                  >
                    Office of New Zealand Privacy Commissioner
                  </a>
                  .
                  <br />
                  <h3
                    style={{
                      marginTop: '24px',
                      marginBottom: '12px',
                      fontSize: '24px',
                      fontWeight: 'bold',
                      lineHeight: '150%',
                      color: '#333',
                    }}
                  >
                    Republic of South Africa
                  </h3>
                  <br />
                  At any time, you have the right to request access to or
                  correction of your personal information. You can make such a
                  request by contacting us by using the contact details provided
                  in the section "
                  <a href='#request' style={{ color: 'blue' }}>
                    HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT
                    FROM YOU?
                  </a>
                  "
                  <br />
                  <br />
                  If you are unsatisfied with the manner in which we address any
                  complaint with regard to our processing of personal
                  information, you can contact the office of the regulator, the
                  details of which are:
                  <br />
                  <br />
                  <a
                    href='https://inforegulator.org.za/'
                    style={{ color: 'blue' }}
                    rel='nofollow'
                  >
                    The Information Regulator (South Africa)
                  </a>
                  General enquiries:{' '}
                  <a
                    href='mailto:enquiries@inforegulator.org.za'
                    style={{ color: 'blue' }}
                  >
                    enquiries@inforegulator.org.za
                  </a>
                  Complaints (complete POPIA/PAIA form 5):{' '}
                  <a
                    href='mailto:PAIAComplaints@inforegulator.org.za'
                    style={{ color: 'blue' }}
                  >
                    PAIAComplaints@inforegulator.org.za
                  </a>{' '}
                  &{' '}
                  <a
                    href='mailto:POPIAComplaints@inforegulator.org.za'
                    style={{ color: 'blue' }}
                  >
                    POPIAComplaints@inforegulator.org.za
                  </a>
                  <br />
                  <div id='clausea'>
                    <h2
                      style={{
                        marginTop: '24px',
                        marginBottom: '12px',
                        fontSize: '24px',
                        fontWeight: 'bold',
                        lineHeight: '150%',
                        color: '#333',
                      }}
                    >
                      13. DO WE OFFER PROMOTIONS?
                    </h2>
                  </div>
                  <br />
                  Not automatically, after the delivery, each user will have the
                  right to accept to receive our future offers/promotions/blogs,
                  or not. If the user choose not to receive them, we will not
                  use their email to send any promotional offers.
                  <br />
                  <div id='policyupdates'>
                    <h2
                      style={{
                        marginTop: '24px',
                        marginBottom: '12px',
                        fontSize: '24px',
                        fontWeight: 'bold',
                        lineHeight: '150%',
                        color: '#333',
                      }}
                    >
                      14. DO WE MAKE UPDATES TO THIS NOTICE?
                    </h2>
                  </div>
                  <br />
                  <i>
                    <b>In Short:</b> You may have additional rights based on the
                    country you reside in.
                  </i>
                  <br />
                  <br />
                  We may update this privacy notice from time to time. The
                  updated version will be indicated by an updated "Revised" date
                  and the updated version will be effective as soon as it is
                  accessible. If we make material changes to this privacy
                  notice, we may notify you either by prominently posting a
                  notice of such changes or by directly sending you a
                  notification. We encourage you to review this privacy notice
                  frequently to be informed of how we are protecting your
                  information.
                  <br />
                  <div id='contact'>
                    <h2
                      style={{
                        marginTop: '24px',
                        marginBottom: '12px',
                        fontSize: '24px',
                        fontWeight: 'bold',
                        lineHeight: '150%',
                        color: '#333',
                      }}
                    >
                      15. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
                    </h2>
                  </div>
                  <br />
                  If you have questions or comments about this notice, you may
                  email us at contact@baby.zone.
                  <br />
                  <div id='request'>
                    <h2
                      style={{
                        marginTop: '24px',
                        marginBottom: '12px',
                        fontSize: '24px',
                        fontWeight: 'bold',
                        lineHeight: '150%',
                        color: '#333',
                      }}
                    >
                      16. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE
                      COLLECT FROM YOU?
                    </h2>
                  </div>
                  <br />
                  Based on the applicable laws of your country, you may have the
                  right to request access to the personal information we collect
                  from you, change that information, or delete it. To request to
                  review, update, or delete your personal information, please
                  visit:{' '}
                  <a
                    href='https://baby.zone/contact-us'
                    style={{ color: 'blue' }}
                  >
                    https://baby.zone/contact-us
                  </a>
                  .
                </Text>
              </VStack>
            </Box>
            <Box
              maxW='222px'
              mt='100px'
              display={{ base: 'none', xl: 'block' }}
            >
              <Text
                fontSize='20px'
                fontWeight='semibold'
                color={colors.black}
                lineHeight='150%'
              >
                Other pages
              </Text>
              <VStack alignItems='flex-start' mt='24px' gap='24px'>
                <Link href='/contact-us' passHref>
                  <Text
                    fontWeight='medium'
                    fontSize={{ base: '13px', md: '14px' }}
                    lineHeight='20%'
                    color={colors.black}
                    _hover={{ textDecoration: 'underline' }} // Optional: Add underline on hover
                  >
                    Contact Us
                  </Text>
                </Link>
                <Link href='/terms-of-service' passHref>
                  <Text
                    fontWeight='medium'
                    fontSize={{ base: '13px', md: '14px' }}
                    lineHeight='20%'
                    color={colors.black}
                    _hover={{ textDecoration: 'underline' }} // Optional: Add underline on hover
                  >
                    Terms of Service
                  </Text>
                </Link>
                <Link href='/credits' passHref>
                  <Text
                    fontWeight='medium'
                    fontSize={{ base: '13px', md: '14px' }}
                    lineHeight='20%'
                    color={colors.black}
                    _hover={{ textDecoration: 'underline' }} // Optional: Add underline on hover
                  >
                    Credits
                  </Text>
                </Link>
              </VStack>
            </Box>
          </HStack>
        </Container>
      </Box>
    </PublicLayout>
  )
}
