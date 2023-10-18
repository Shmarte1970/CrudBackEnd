"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatetUsuario = exports.postUsuario = exports.deleteUsuario = exports.getUsuario = exports.getUsuarios = void 0;
const usuario_1 = __importDefault(require("../models/usuario"));
const getUsuarios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listUser = yield usuario_1.default.findAll();
    res.json(listUser);
});
exports.getUsuarios = getUsuarios;
const getUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const usuario = yield usuario_1.default.findByPk(id);
    if (usuario) {
        res.json(usuario);
    }
    else {
        res.status(404).json({
            msg: `No existe este usuario con el id ${id}`
        });
    }
});
exports.getUsuario = getUsuario;
const deleteUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const usuario = yield usuario_1.default.findByPk(id);
    if (!usuario) {
        res.status(404).json({
            msg: `No existe este usuario con el id ${id}`
        });
    }
    else {
        yield usuario.destroy();
        res.json({
            msg: `Registro eliminado con exito`
        });
    }
});
exports.deleteUsuario = deleteUsuario;
const postUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        yield usuario_1.default.create(body);
        res.json({
            msg: `Usuario añadido con existo`,
            body
        });
    }
    catch (error) {
        res.status(404).json({
            msg: `Error operacion no realizada`
        });
    }
});
exports.postUsuario = postUsuario;
const updatetUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { id } = req.params;
    const usuario = yield usuario_1.default.findByPk(id);
    try {
        if (usuario) {
            yield usuario.update(body);
            res.json({
                msg: `Usuario actualizado con existo`,
                body
            });
        }
        else {
            res.status(404).json({
                msg: `No existe este usuario con el id ${id}`
            });
        }
    }
    catch (error) {
        res.status(404).json({
            msg: `Error operacion no realizada`
        });
    }
});
exports.updatetUsuario = updatetUsuario;
