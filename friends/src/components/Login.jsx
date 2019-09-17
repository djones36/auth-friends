import React from "react";
import { Form as Formik, Field, withFormik } from "formik";
import { Segment, Button, Form } from "semantic-ui-react";

const Login = props => {
  return (
    <Segment raised compact>
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
    </Segment>
  );
};

const FormikForm = withFormik({
  mapPropsToValues(values) {
    return {
      username: values.username || "",
      password: values.password || ""
    };
  }
  //   handleSubmit(values,props){
  //       .post("")
  //     .then(res => )
  //   }
})(Login);
export default FormikForm;
