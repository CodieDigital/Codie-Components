
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { getCookie, setCookie } from "../../../utils/cookies";

import * as S from "./styles";

export function AceptRatedr({ children }: { children: React.ReactNode }) {
  const [acept, setAcept] = useState<"aceito" | "recusado" | "default">(
    "aceito"
  );

  const router = useRouter();

  function getAcept() {
    setAcept("aceito");
    setCookie("acept-ratedr", "aceito", 30);
  }

  function getRecuse() {
    setAcept("recusado");
    setCookie("acept-ratedr", "recusado", 30);
  }

  useEffect(() => {
    if ((process as any).browser) {
      const aceptRatedr = getCookie("acept-ratedr");

      if (
        !aceptRatedr ||
        (aceptRatedr !== "aceito" && aceptRatedr !== "recusado")
      ) {
        setAcept("default");

        return;
      }

      if (aceptRatedr === "aceito") {
        setAcept("aceito");
        return;
      }

      if (aceptRatedr === "recusado") {
        setAcept("recusado");

        return;
      }
    }
  }, []);

  return (
    <>
      {(acept === "default" || acept === "recusado") &&
        !router.asPath.includes("politica") && (
          <S.AceptCookies id="cookies">
            <div className="overlay"></div>

            <div className="bottom">
              <p>
                Aviso: Conteúdo restrito para maiores de 18 anos.{" "}
                <Link href="/politica-e-privacidade">Saiba mais.</Link>
              </p>

              <div className="actions-cookie">
                {acept !== "recusado" && (
                  <button className="recusar" onClick={getRecuse}>
                    Recusar
                  </button>
                )}

                <button type="button" className="aceitar" onClick={getAcept}>
                  Aceitar que sou maior de 18 anos e entrar
                </button>
              </div>
            </div>
          </S.AceptCookies>
        )}

      {(acept === "default" ||
        acept === "aceito" ||
        router.asPath.includes("politica")) && <>{children}</>}
    </>
  );
}
