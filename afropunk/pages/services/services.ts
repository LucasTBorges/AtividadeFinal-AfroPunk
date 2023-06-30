import { PrismaClient, user, ingresso} from "@prisma/client";
import {PrismaClientKnownRequestError} from "@prisma/client/runtime";

export const prisma = new PrismaClient();//Cliente do prisma: Conexão com o banco de dados

export type UserObj = user;
export type IngressoObj = ingresso;

export async function newUser(nome:string, email:string, cpf:string, senha:string, idade:number):Promise<UserObj|null>{//Tenta cadastrar um novo usuário no banco de dados
	let usuario:UserObj|null = null;
	try{
		usuario = await prisma.user.create({
			data:{
				nome:nome,
				email:email,
				cpf:cpf,
				senha:senha,
				idade:idade
			}
		});
	} catch (error) {
		if (error instanceof PrismaClientKnownRequestError) {
			if (error.code === "P2002" && (error.meta as {target: string[]}).target.includes("email")) {
				console.log("O email inserido já está associado a outro usuário.");
			}
			if (error.code === "P2002" && (error.meta as {target: string[]}).target.includes("cpf")) {
				console.log("O CPF inserido já está associado a outro usuário.");
			}
		}
	} finally{
		return usuario;
	}
}