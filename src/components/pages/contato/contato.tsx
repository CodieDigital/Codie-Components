import React, { useState, useRef } from "react";

import { Form } from "@unform/web";
import { FormHandles } from "@unform/core";

import { YupValidation } from "../../../utils/yup-validation";

import { Input } from "../../data/inputs";
import { LoaderCircle } from "../../data/loader-circle";

import { IContatoProps, IForm } from "./interfaces";
import { StateForm } from "../../../interfaces/state-form";

export function Contato({ api }: IContatoProps) {
    const [stateForm, setStateForm] = useState<StateForm>({ state: "default", message: "" })

    const formRef = useRef<FormHandles>(null)

    async function handleSubmit(data: IForm) {
        const yup = await import("yup");

        console.log(data)

        try {
            setStateForm({ state: "loading" });

            const schema = yup.object().shape({
                nome: yup.string().required("Por favor, insira um nome válido."),
                email: yup.string().email("Por favor, insira um email válido.").required("Por favor, insira um email."),
                telefone: yup.string().required("Por favor, insira um telefone válido."),
            });

            await schema.validate(
                data,
                {
                    abortEarly: false,
                }
            );

            formRef.current?.setErrors({});

            await api.post("/form", data);

            setStateForm({ state: "send" })

        } catch (err: any) {
            console.log("deu merda")
            console.log(err)

            const yupError = err instanceof yup.ValidationError;

            if (err && !yupError && typeof err === "string") {
                setStateForm({ state: "error", message: err });
                return;
            }

            setStateForm({ state: "default" });

            YupValidation(yup, err, formRef);
        }
    }

    if (stateForm.state === "send") {
        return <p>Enviado com sucesso</p>
    }

    return <Form ref={formRef} onSubmit={handleSubmit}>
        {stateForm.state === "error" && (
            <p className="error paragraph-4-bold-graphie error-message">{stateForm.message}</p>
        )}

        <Input name="nome" type="text" />

        <Input name="email" type="email" />

        <Input name="telefone" type="text" />

        <button type="submit">{stateForm.state === "loading" ? <LoaderCircle size={40} color={"var(--secundary-color)"} /> : "Enviar"}</button>
    </Form>
}