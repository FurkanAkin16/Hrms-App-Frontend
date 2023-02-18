import React, { useRef } from 'react';
import { Button, Form } from 'semantic-ui-react';

const FormExampleWidthField = () => {
  const nameRef = useRef();
  const surnameRef = useRef();
  const jobRef = useRef();
  const ageRef = useRef();
  const mailRef = useRef();
  const cityRef = useRef();
  const languageRef = useRef();
  const linkedinRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = () => {
    window.alert('Teşekkürler başarıyla kayıt oldunuz!');

   
    nameRef.current.value = '---';
    surnameRef.current.value = '';
    jobRef.current.value = '';
    ageRef.current.value = '';
    mailRef.current.value = '';
    cityRef.current.value = '';
    languageRef.current.value = '';
    linkedinRef.current.value = '';
    passwordRef.current.value = '';
  };

  return (
    <Form>
      <Form.Group>
        <Form.Input label='Ad' placeholder='Adınız' width={6} ref={nameRef} />
        <Form.Input label='Soyad' placeholder='Soyadınız' width={4} ref={surnameRef} />
        <Form.Input label='Meslek' placeholder='Meslek tanımınız' width={6} ref={jobRef} />
      </Form.Group>
      <Form.Group>
        <Form.Input label='Yaş' placeholder='**' width={2} ref={ageRef} />
        <Form.Input label='Mail' placeholder='example@gmail.com' width={8} ref={mailRef} />
        <Form.Input label='Şehir' placeholder='Adana' width={6} ref={cityRef} />
      </Form.Group>
      <Form.Group>
        <Form.Input label='Dil' placeholder='ENG/GER/FR' width={4} ref={languageRef} />
        <Form.Input label='Linkedin' placeholder='www.linkedin.com/example' width={6} ref={linkedinRef} />
        <Form.Input label='Şifre' placeholder='' type='password' width={6} ref={passwordRef} />

      </Form.Group>
      <Button  type='submit' onClick={handleSubmit}>Onayla</Button>
    </Form>
  );
};

export default FormExampleWidthField;
