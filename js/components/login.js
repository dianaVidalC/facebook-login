/**
 * Created by LABORATORIA 0017le on 13/06/2017.
 */
'use strict';

const login = _=>{
    const login       = $('<div class="login"></div>');
    const title       = $('<h1>Login to Laboratoria</h1>');
    const email       = $('<input class="username" type="email" placeholder="Correo electrónico"/>');
    const password    = $('<input class="password" type="password" placeholder="Contraseña"/>');
    const loginButton = $('<button>Ingresar</button>');
    const faceButton  = $('<button>Ingresar con Facebook</button>');

    login.append(title);
    login.append(email);
    login.append(password);
    login.append(loginButton);
    login.append(faceButton);

    loginButton.on('click',(e)=>{
        e.preventDefault();
        alert('Not implement yet');
    });

    faceButton.on('click',(e)=>{
        e.preventDefault();
        doLogin();
    });

    return login;

};
