import { FaDiscord } from "react-icons/fa";
import AuthButton from "./secondaryAuthButton";
import { Form } from "@remix-run/react";

export default function OAuthWithDiscord() {

    return (
      <Form action="/auth/loginDiscord" method="post">
        <AuthButton>
          with Discord <FaDiscord className='text-2xl mx-3' />
        </AuthButton>
      </Form>
    );
  }