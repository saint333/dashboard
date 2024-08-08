export const authConfig = {
  providers: [],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async authorized({ request }) {
      const isLoggedIn = request.cookies.get("sessionToken");
      const isOnDashboard = request.nextUrl.pathname.startsWith("/dashboard");
      const inicio = request.nextUrl.pathname
      if (inicio === "/") {
        return false;
      }
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
