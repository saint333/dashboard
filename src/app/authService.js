export const login = async (credentials) => {
  console.log("🚀 ~ login ~ credentials:", credentials);
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
    if (!response.ok) {
      return "Error en las credenciales con api";
    }
    const user = await response.json();
    console.log("🚀 ~ login ~ user:", user)
    return user;
  } catch (error) {
    console.log("🚀 ~ login ~ error:", error);
    return "Error en las credenciales";
  }
};