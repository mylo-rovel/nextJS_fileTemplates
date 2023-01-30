import Head from "next/head";
import { FC, PropsWithChildren } from "react";

import { IMainLayoutProps } from "../../../models";

const defaultTitle = "my tutilo";

export const MainLayout:FC<PropsWithChildren<IMainLayoutProps>> = ({children, title}) => {
    return (
      <>
        <Head>
            <title>{title || defaultTitle }</title>
            <meta name="author" content="Emilio Rojas" />
            <meta name="description" content={`Pagina auxiliar de registro de trabajos`} />
        </Head>
        
        {/* here we would put a navbar for example. or any other component */}
        <main>
            {children}
        </main>
    </>
    )
};