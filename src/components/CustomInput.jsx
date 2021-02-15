import React from "react";

import { Form, Typography } from "antd";

const { Text } = Typography;

export default function CustomInput({
  label,
  inputProps,
  itemProps,
  InputType,
  children,
}) {
  return (
    <Form.Item
      label={
        <Text type="secondary" strong>
          {label}
        </Text>
      }
      {...itemProps}
    >
      <InputType {...inputProps}>{children}</InputType>
    </Form.Item>
  );
}
