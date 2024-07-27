export const login = async (credentials) => {
  try {
    const response = await fetch(process.env.URL_API_AUTH, {
      method: "POST",
      body: JSON.stringify({
        usuario: credentials.username,
        password: credentials.password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const user = await response.json();
    return user;
  } catch (error) {
    console.log("🚀 ~ login ~ error:", error)
    return {codigo: -1, message:"Error en las credenciales"};
  }
};