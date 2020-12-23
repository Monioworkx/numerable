/**
 * numerable.js locale configuration
 * code: ar-eg
 * language: Arabic
 * region: Egipt
 * numeral system: Arabic-Indic [arab]
 */
import { NumerableLocale } from './types/numerable-locale';

const locale: NumerableLocale = {
    code: 'ar-eg',
    delimiters: {
        thousands: '٬',
        decimal: '٫',
    },
    abbreviations: '|||ألف\u200e|||مليون\u200e|||مليار\u200e|||ترليون\u200e',
    ordinal: () => '.',
    numeralSystem: [
        '٠',
        '١',
        '٢',
        '٣',
        '٤',
        '٥',
        '٦',
        '٧',
        '٨',
        '٩',
    ].map(e => e + '\u200e'),
};

export default locale;
