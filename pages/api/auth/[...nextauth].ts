import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { db } from "../../../Firebase/firebase";
import {
  collection,
  query,
  where,
  getDocs,
  getFirestore,
  doc,
  getDoc,
} from "firebase/firestore";

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        //database lookup
        const docRef = doc(db, "user", credentials.username);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          //auth check
          if (
            data.username === credentials.username &&
            data.password === credentials.password
          ) {
            return {
              id: data.id,
              username: data.username,
              email: data.email,
            };
          } else {
            //login failed
            // doc.data() will be undefined in this case
            return null;
          }
        }
      },
    }),
  ],
  callbacks: {
    jwt: ({ token, user }) => {
      if (user) {
        // user is logged in
        token.id = user.id;
        return {
          token,
        };
      } return token;
    },
    session: ({ session, token }) => {
      if (token) {
        session.id = token.id;
      }
      return session;
    },
  },
  secret: "test",
  jwt: { secret: "test" },
});
