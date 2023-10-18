import {Request, Response} from 'express';
import Usuario from '../models/usuario';

export const getUsuarios = async (req: Request, res: Response) => {

    const listUser = await Usuario.findAll()

    res.json(listUser)

}

export const getUsuario = async (req: Request, res: Response) => {

    const {id} = req.params;
    const usuario = await Usuario.findByPk(id);

    if(usuario) {
        res.json(usuario)
    } else {
        res.status(404).json ({
            msg:`No existe este usuario con el id ${id}`
        })
    }
 
}

export const deleteUsuario = async (req: Request, res: Response) => {

    const {id} = req.params;
    const usuario = await Usuario.findByPk(id);

    if(!usuario) {
        res.status(404).json ({
            msg:`No existe este usuario con el id ${id}`
        })
    } else {
       await usuario.destroy ();
       res.json ({
        msg:`Registro eliminado con exito`
       })
    }
  
}

export const postUsuario = async (req: Request, res: Response) => {

    const { body } = req;   

    try{

        await Usuario.create (body);
    
        res.json({
        msg: `Usuario añadido con existo`,  
        body
    })

    }catch (error){

        res.status(404).json ({
            msg:`Error operacion no realizada`
        })
        
    }

}

export const updatetUsuario = async (req: Request, res: Response) => {

    const { body } = req;
    const {id} = req.params;
    const usuario = await Usuario.findByPk(id);

    try{

    if(usuario){
        
            await usuario.update(body);

            res.json({
                msg: `Usuario actualizado con existo`,
                body
            })  

        }else{
            res.status(404).json ({
                msg:`No existe este usuario con el id ${id}`
            })

        }

    }catch (error){
        res.status(404).json ({
            msg:`Error operacion no realizada`
        })
    }

}