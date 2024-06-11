import { signIn } from "../auth";

export const authenticate = async (prevState, formData) => {
  try {
    console.log("🚀 ~ authenticate ~ prevState:");
    const user = await signIn("credentials", {...formData});
  } catch (err) {
    console.log("🚀 ~ authenticate ~ err:", err)
    if (err.message.includes("CredentialsSignin")) {
      return "Wrong Credentials";
    }
    return "Something went wrong";
  }
};
