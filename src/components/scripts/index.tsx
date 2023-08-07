import React, { useEffect } from "react";

import Head from "next/head";
import Script from "next/script";
import { useRouter } from "next/router";

import ReactGA from "react-ga";

import { pageview } from "../../utils/fb-pixel";

import { IScripts } from "./interfaces";

import { AceptRatedr } from "./acept-ratedr";
import { AceptCookies } from "./acept-cookies";
import { Whattsapp } from "../data";

export function Scripts({
  children,
  informations,
}: IScripts) {
  const router = useRouter();

  useEffect(() => {
    if ((process as any).browser && informations?.googleUA) {
      const handleRouteChange = () => {
        pageview(router.asPath);
      };

      ReactGA.initialize(informations.googleUA);
      ReactGA.pageview(router.asPath);

      router.events.on("routeChangeComplete", handleRouteChange);

      return () => {
        router.events.off("routeChangeComplete", handleRouteChange);
      };
    }
  }, [router.events, router.pathname, router.asPath, informations?.googleUA]);

  return (
    <>
      <Head>
        {informations?.facebookDomainVerification && (
          <meta
            name="facebook-domain-verification"
            content={informations.facebookDomainVerification}
          />
        )}

        {informations?.domainVerify && (
          <meta name="p:domain_verify" content={informations?.domainVerify} />
        )}

        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />

        {informations?.facebookPixel && (
          <script
            id="fb-pixel"
            dangerouslySetInnerHTML={{
              __html: `
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', ${informations.facebookPixel});
          fbq('track', 'PageView');
          `,
            }}
          />
        )}

        {informations?.googleGTM && (
          <script
            dangerouslySetInnerHTML={{
              __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${informations.googleGTM}');
              `,
            }}
          />
        )}
      </Head>

      {informations?.googleGTM && (
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${informations.googleGTM}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
      )}

      {informations?.tawkToPropertyId && informations.tawkToWidgetId && (
        <Script
          async
          src={`https://embed.tawk.to/${informations.tawkToPropertyId}/${informations.tawkToWidgetId}`}
        />
      )}

      {informations?.whatsapp && (
        <Whattsapp href={informations.whatsapp} />
      )}

      {informations?.ratedR ? (
        <AceptRatedr>
          <AceptCookies>{children}</AceptCookies>
        </AceptRatedr>
      ) : (
        <AceptCookies>{children}</AceptCookies>
      )}

      {(process as any).browser && informations?.rdStationSource && (
        <Script
          async
          type="text/javascript"
          strategy="afterInteractive"
          src={informations.rdStationSource}
        />
      )}
    </>
  );
}



