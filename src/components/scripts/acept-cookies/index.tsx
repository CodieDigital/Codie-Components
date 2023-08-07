import React, { useEffect, useState } from "react";

import Link from "next/link";
import { useRouter } from "next/router";

import { getCookie, setCookie } from "../../../utils/cookies";

import * as S from "./styles";

export function AceptCookies({ children }: { children: React.ReactNode }) {
  const [acept, setAcept] = useState<"aceito" | "recusado" | "default">(
    "aceito"
  );

  function getAcept() {
    setAcept("aceito");
    setCookie("acept-cookie", "aceito", 30);
  }

  function getRecuse() {
    setAcept("recusado");
    setCookie("acept-cookie", "recusado", 30);
  }

  const router = useRouter();

  useEffect(() => {
    if ((process as any).browser) {
      const aceptCookie = getCookie("acept-cookie");

      if (
        !aceptCookie ||
        (aceptCookie !== "aceito" && aceptCookie !== "recusado")
      ) {
        setAcept("default");

        return;
      }

      if (aceptCookie === "aceito") {
        setAcept("aceito");
        return;
      }

      if (aceptCookie === "recusado") {
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
                Utilizamos cookies para oferecer melhor experiência, melhorar o
                desempenho, analisar como você interage em nosso site e
                personalizar conteúdo.{" "}
                <Link href="/politica-e-privacidade">Saiba mais.</Link>
              </p>

              <div className="actions-cookie">
                {acept !== "recusado" && (
                  <button type="button" className="recusar" onClick={getRecuse}>
                    Recusar Cookies
                  </button>
                )}

                <button type="button" className="aceitar" onClick={getAcept}>
                  Aceitar Cookies
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
