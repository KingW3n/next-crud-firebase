import Cliente from "@/core/Cliente/Cliente";
import ClienteRepositorio from "@/core/Cliente/ClienteRepositorio";
import firebase from "../config";

export default class ColecaoCliente implements ClienteRepositorio{

    #comversor = {
        toFirestore(cliente:Cliente){
            return{
                nome:cliente.nome,
                idade: cliente.idade
            }
        }, fromFirestore(snapshot: firebase.firestore.QueryDocumentSnapshot, options: firebase.firestore.snapshotOptions):Cliente{
            const dados = snapshot?.data(options)
            return new Cliente(dados.nome, dados.idade, snapshot?.id)
        }
    }

    async salvar(cliente:Cliente): Promise<Cliente> {
        if(cliente?.id){
            await this.#collection().doc(cliente.id).set(cliente)
            return cliente
        }else{
            const docRef = await this.#collection().add(cliente)
            const doc =  docRef.get()
            return doc.data()
        }
    }

    async excluir(cliente:Cliente): Promise<void> {
        return this.#collection().doc(cliente.id).delete()
    }

    async obterTodos(): Promise<Cliente[]> {
        const query = await this.#collection().get()

        return query.docs.map(doc => doc.data()) ?? []
    }

    #collection(){
        return firebase.firestore().collection('clientes').withConverter(this.#comversor)
    }
}