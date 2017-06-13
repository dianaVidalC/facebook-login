/**
 * Created by LABORATORIA 0017le on 13/06/2017.
 */

window.fbAsyncInit=_=> {
    FB.init({
        appId: '265509237252106',
        cookie: true,
        xfbml: true,
        version: 'v2.8'
    });
};

function loginHandler(response){
    if(response.status==='connected'){
        state.status="Conectado";
        FB.api('/me?fields=email,name',user =>{
            state.user=user;
            state.doRender();
        });
    }else if(response.status==='no_authorized'){
        state.user=null;
        state.status="Aplicación no autorizada";
        state.doRender();
    }
}

function doLogin(){
    FB.login(loginHandler,{scope:'email'});
}