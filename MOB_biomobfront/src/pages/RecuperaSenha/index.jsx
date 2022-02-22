import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FormInput } from "./style";
import { Link } from "react-router-dom";
import './style.css';

const RecuperaSenha = () => {
    // const formik = useFormik({
    //     initialValues: {
    //         email: "",
    //         senha: "",
    //     },
    //     validationSchema: Yup.object({
    //         email: Yup.string().email("Email inválido").required("Email obrigatório"),
    //         senha: Yup.string()
    //             .min(8, "Senha deve conter, no mínimo, 8 caracteres")
    //             .max(35, "Senha deve conter, no máximo, 35 caracteres")
    //             .required("Senha obrigatória"),
    //     }),
    // });

    return (
        <>
            <div className="seta-voltar">
            <Link to="/login">
            <button className="voltar">
                Voltar
            </button>
            </Link>
            </div>
            <div className="titulo-recupera">
                    <text>Recupere sua senha</text>
                </div>
            <FormInput>                
                <label htmlFor="login-email" className="item-oculto">
                    Email
                </label>
                <input
                    type="email"
                    placeholder="Email"
                    className="input-email"
                    id="login-email"
                    name="email"
                    required
                />

                <button className="botReenviarSenha" type="submit">Enviar senha por e-mail</button>

            </FormInput>
        </>
    );
};

export default RecuperaSenha;