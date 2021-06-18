import http from '../util/banco';

export const findAllUsers = async (paginaAtual,pageSize,dir,props,search) => {
    return (
        http.get('/cadastro/listar',{
            params:{
                paginaAtual,
                pageSize,
                dir,
                props,
                search
            }, 
         }).then( res => {
            return res.data;
         })
    )
}  

export const findUserById = async ( id ) => {
    return (
        http.get('/cadastro/alterar/${id}')
            .then( res => { 
                return res.data; 
            }).catch( error => {
                return error.response;
            })
    )
}

export const createUser = async ( cadastro ) => {
    return (
        http({
            method:'post',
            url:'/cadastro/salvar',
            data:cadastro,
            headers:{
                'Content-Type':'application/json'
            },
        }).then(res => {
            return res.data
        })

    )
}

export const updateUser = async ( cadastro ) => {
    return (
        http({
            method:'post',
            url:'/cadastro/update/${cadastro.id}',
            data:usuario,
            headers:{
                'Content-Type':'application/json'
            },
        }).then(res => {
            console.log(res.data);
            return res.data
        }).catch(error => {
            return error.response
        })
    )
}

