import Vue from 'vue'
import Toasted from 'vue-toasted'

Vue.use(Toasted, {
    iconPack: 'fontawesome',
    duration: 3000,
    position: 'top-right'
})

Vue.toasted.register(
    'defaultSuccess',
    payload => !payload.msg ? 'Operação realizada com sucesso' : payload.msg,
    { type: 'success', icon: 'check', action: { text: 'x', onClick : (e, toastObject) => { toastObject.goAway(0); } } }
)

let options = {
    type : 'error', 
    icon : 'times',
    duration: 7000,
    action: {
        text : 'x', 
        onClick : (e, toastObject) => { toastObject.goAway(0); }
    }
}

Vue.toasted.register(
    'defaultError',
    payload => !payload.msg ? 'Erro inesperado' : payload.msg,
    options,
)