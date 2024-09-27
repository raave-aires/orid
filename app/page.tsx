"use client"

//dependências
import React from "react";

//bibliotecas
import { Field, Formik, getIn, Form } from 'formik';
import * as yup from 'yup';

//componentes
import { Button, Input } from "@nextui-org/react";

export default function Formulario() {
  const dados_iniciais = {
    email: "",
  };

  const validacao_de_dados = yup.object().shape({
    email: yup.string().email("O email digitado parece inválido").required("Este campo é obrigatório.")
  });

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <Formik 
        initialValues={dados_iniciais} 
        validationSchema={validacao_de_dados} 
        onSubmit={values => {
        alert(JSON.stringify(values, null, 2));
        }}
     >{({
        handleSubmit,
        handleBlur,
        handleChange,
        setFieldValue,
        touched,
        errors,
        values,
        isSubmitting,
        isValid,
      }) => (
        <Form>
          <Field
            id="email"
            name="email"

            as={Input}
            variant="faded"
            className="max-w-64"
            label="E-mail"
            
            isRequired={true}
            isInvalid={
              getIn(touched, "email") &&
              getIn(errors, "email")
            }

            errorMessage={
              getIn(touched, "email") &&
              getIn(errors, "email")
            }
          />

          <Button
            color="primary"
            variant="flat"
            type="submit"
            isDisabled={!isValid || isSubmitting}
            isLoading={isSubmitting}
          >
            Salvar
          </Button>
        </Form>
      )}
        
      </Formik>
    </div>
  );
}
