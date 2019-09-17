import React from "react";
import { Form as Formik, Field, withFormik } from "formik";
import { Button, Form } from "semantic-ui-react";

const Login = props => {
  return (
    <Form>
      <Formik>
        <Form.Field>
          <Field type="text" name="username" placeholder="username" />
        </Form.Field>
        <Form.Field>
          <Field type="password" name="password" placeholder="password" />
        </Form.Field>
        <Button type="submit">Login</Button>
      </Formik>
    </Form>
  );
};

const FormikForm = withFormik({
  mapPropsToValues(values) {
    return {
      username: values.username || "",
      password: values.password || ""
    };
  }
})(Login);
export default FormikForm;
