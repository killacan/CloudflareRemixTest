import { FaGithub } from "react-icons/fa";
import AuthButton from "./secondaryAuthButton";
import { Form } from "@remix-run/react";

export default function OAuthWithGithub() {

    return (
      <Form action="/auth/loginGithub" method="post">
        <AuthButton>
            with Github <FaGithub className='text-2xl mx-3' />
        </AuthButton>
      </Form>
    );
  }