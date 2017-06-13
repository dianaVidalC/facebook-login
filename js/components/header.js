/**
 * Created by LABORATORIA 0017le on 13/06/2017.
 */
'use strict';

const Header = _=>{

    const header= $('<header></header>');
    const img   = $('<img src="img/logo.png">');

    header.append(img);

    return header;
}