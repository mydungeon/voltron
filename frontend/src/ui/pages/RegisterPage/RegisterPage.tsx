import React from "react";
import RegisterPageProps from "./RegisterPage.types";
import "./RegisterPage.styles.scss";
import Form from "../../components/Form";

export default function RegisterPage({ children }: RegisterPageProps) {
  return (
    <div className="registerpage" data-testid="registerpage">
      <Form />
    </div>
  );
}
