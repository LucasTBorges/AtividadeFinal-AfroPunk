import { PrismaClient, user, ingresso} from "@prisma/client";

export const prisma = new PrismaClient();//Cliente do prisma: Conexão com o banco de dados
export const url = process.env.NEXTAUTH_URL;//URL do site, para ser usada em requisições
export const maxIngressos= 250;//Número máximo de ingressos que podem ser vendidos

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
		console.log("Erro ao criar usuário: "+error);
	} finally{
		return usuario;
	}
}

export async function checaCredenciais(email:string, senha:string):Promise<{name:string, email:string, id: number}|null>{//Tenta fazer login com o email e senha fornecidos
	let usuario:UserObj|null = null;
	try{
		usuario = await prisma.user.findFirst({
			where:{
				email:email,
				senha:senha
			}
		});
	} catch (error) {
		console.log(error);
	} finally{
		if (usuario){
			return {name:usuario.nome, email:usuario.email, id:usuario.id};
		}
		else{
			return null;
		}
	}
}

export async function ingressosDisponiveis():Promise<number>{//Retorna o número de ingressos disponíveis
	const vendidos = await prisma.ingresso.count();
	return maxIngressos - vendidos;
}
