import NextAuth from "next-auth/next";
import CrendetialsProvider from "next-auth/providers/credentials";
import {getAdminByEmailAndPassword} from "@/lib/prisma/admin"
export default NextAuth({
    session:{
        strategy:"jwt"
    },
    providers:[
        CrendetialsProvider({
            
            type:"credentials",
            credentials:{},
            async authorize(credentials,req){
               try {
                const { email, password }:any = credentials;
                const { admin, error } = await getAdminByEmailAndPassword(email,password );
                return admin;
               } catch (error) {
                return null
               }
            }
        })
    ],
    pages:{
        signIn:"/auth"
    }
});