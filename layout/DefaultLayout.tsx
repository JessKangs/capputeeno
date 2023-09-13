import { ReactNode } from "react";

import Header_ from "../components/Header";

interface DefaultLayoutProps {
    children: ReactNode
}

export function DefaultLayout({ children }: DefaultLayoutProps) {
    return (
        <>
            <Header_/>
            <main>
                {children}
            </main>
        </>
    )
}