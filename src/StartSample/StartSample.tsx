import React, {useCallback} from "react";
import { createForm } from "@formily/core";
import { FormProvider, FormConsumer, Field } from "@formily/react";
import {
  FormItem,
  FormLayout,
  Input,
  FormButtonGroup,
  Submit,
} from "@formily/antd";

const form = createForm();

const StartSample = () => {

    const onSubmit = useCallback((values: any) => {
        console.log('===>>>=== submit data = ', values)
    }, [])
  return (
    <FormProvider form={form}>
      <FormLayout layout="vertical">
        <Field
          name="input"
          title="输入框"
          required
          initialValue="Hello world"
          decorator={[FormItem]}
          component={[Input]}
        />
      </FormLayout>
      <FormConsumer>
        {() => (
          <div
            style={{
              marginBottom: 20,
              padding: 5,
              border: "1px dashed #666",
            }}
          >
            实时响应：{form.values.input}
          </div>
        )}
      </FormConsumer>
      <FormButtonGroup>
        <Submit onSubmit={onSubmit}>提交</Submit>
      </FormButtonGroup>
    </FormProvider>
  );
};

export default StartSample