import { signIn } from "../auth";

export const authenticate = async (prevState, formData) => {
  try {
    console.log("🚀 ~ authenticate ~ prevState:");
    const user = await signIn("credentials", {...formData});
    console.log("🚀 ~ authenticate ~ user:", user)
  } catch (err) {
    console.log("🚀 ~ authenticate ~ err:", err.message)
    return "Usuario o contraseña incorrectos";
  }
};
