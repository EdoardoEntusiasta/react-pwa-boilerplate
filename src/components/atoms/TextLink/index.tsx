import { ITextLink } from './interfaces';
import Link from '@mui/material/Link';

// todo
/**
 * Text Link
 * automatically adds locale's slug to the address
 * ${locale}/${href}
 * You can avoid binding the local prefix by passing the property with_locale = false
 * @param param0 
 * @returns 
 */
const TextLink = ({ href, with_locale, underline, variant, color, children }: ITextLink) => {

    // const router = useRouter()
    const locale = null;/*String(router.locale || router.defaultLocale)*/
 
    return (
        <>
            <Link 
                variant={variant} 
                underline={underline ? underline : 'none'} 
                color={color ? color : '#FFFFFF'}
                href={`/${locale ? with_locale == null ? locale + '/' : with_locale ? locale : '' : ''}${href}`}>
                { children }
            </Link>
        </>
    );
};

export default TextLink;
