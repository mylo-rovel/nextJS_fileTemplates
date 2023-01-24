import Head from "next/head";
import { FC, PropsWithChildren } from "react";

import { IMainLayoutProps } from "../../models";

const defaultTitle = "my tutilo";

const originServer = (typeof window === 'undefined') ? '' : window.location.origin;

// FC<PropsWithChildren<IMainLayoutProps>> is NOT Next.js specific
// actually, you can do it "normal" React


// IMainLayoutProps => children is not part of that interface
// from IMainLayoutProps we only get: title
export const MainLayout:FC<PropsWithChildren<IMainLayoutProps>> = ({children, title}) => {
    return (
      <>
        <Head>
            {/* DON'T FORGET THAT YOU CAN PUT DYNAMIC CONTENT IN THE meta tag's content ATTRIBUTE */}
            <title>{title || defaultTitle }</title>
            <meta name="author" content="YOU" />
            <meta name="description" content={`some description`} />
            <meta name="keywords" content={`${title}, some, keywords`} />

            <meta property="og:title" content={`Información sobre ${ title }`} />
            <meta property="og:description" content={`Esta es la página sobre ${ title }`} />
            <meta property="og:image" content={`${ originServer }/img/banner.png`} />
        </Head>

        {/* HERE YOU CAN PUT SOME COMPONENTS IF YOU WANT */}
        <main>
            {children}
        </main>
    </>
    )
};