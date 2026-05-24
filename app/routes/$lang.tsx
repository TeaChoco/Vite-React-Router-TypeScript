// -Path: 'Vite-React-Router-TypeScript/app/routes/$lang.tsx'
import { redirect } from 'react-router';
import i18n, { isValidLang } from '~/i18n';
import { Outlet, useParams } from 'react-router';
import type { LoaderFunctionArgs } from 'react-router';

export async function loader({ params }: LoaderFunctionArgs) {
    const lang = params.lang;

    // ถ้า lang ไม่ valid → redirect ไป default
    if (!lang || !isValidLang(lang)) return redirect(`/${i18n.language}`);

    return { lang };
}

export default function LangLayout() {
    const { lang } = useParams();

    // sync ภาษากับ i18n
    if (lang && i18n.language !== lang) i18n.changeLanguage(lang);

    return <Outlet />;
}
