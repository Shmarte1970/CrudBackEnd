import {Router} from 'express';
import { deleteUsuario, getUsuario, getUsuarios, postUsuario, updatetUsuario } from '../controllers/usuario';


const router = Router ();

router.get('/', getUsuarios);
router.get('/:id', getUsuario);
router.delete('/:id', deleteUsuario);
router.post('/', postUsuario);
router.put('/:id', updatetUsuario)


export default router;