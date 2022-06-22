import {generateMedia} from 'styled-media-query'

export const size = {
    mobileP:320,
    mobileM:375,
    mobileG:425,
    tablet:768,
    laptop:1024,
    laptopG:1440,
    desktop:2560,
};

export const device = {
    mobileP:'(min-width: ${size.mobileP})',
    mobileM:'(min-width: ${size.mobileM})',
    mobileG:'(min-width: ${size.mobileG})',
    tablet:'(min-width: ${size.tablet})',
    laptop:'(min-width: ${size.laptop})',
    laptopG:'(min-width: ${size.laptopG})',
    desktop:'(min-width: ${size.desktop})',
    desktopG:'(min-width: ${size.desktop})',
};