export const authConfig = {
  providers: [],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async authorized({ auth, request }) {
      console.log("🚀 ~ authorized ~ auth:", request.cookies.get("authjs.session-token").value)
      const isLoggedIn = auth?.user;
      const isOnDashboard = request.nextUrl.pathname.startsWith("/dashboard");
      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false;
      } else if (isLoggedIn) {
        return Response.redirect(new URL("/dashboard", request.nextUrl.origin));
      }
      return true;
    },
  },
};
