import Vue from 'vue'
import axios from "axios"

export var baseURL = "http://192.168.15.140:90";

export var clearAllData = function(){
    localStorage.clear()
    sessionStorage.clear()
    delete axios.defaults.headers.common["Authorization"];
}

export function showError(e) {  
    if (e && e.response && e.response.data) {
        Vue.toasted.global.defaultError({
            msg: e.response.data
        })
    } else if (typeof e === 'string') {
        Vue.toasted.global.defaultError({
            msg: e
        })
    } else {
        Vue.toasted.global.defaultError()
    }
}

export function defaultSuccess(e) {
    if (e && e.response && e.response.data) {
        Vue.toasted.global.defaultSuccess({
            msg: e.response.data
        })
    } else if (typeof e === 'string') {
        Vue.toasted.global.defaultSuccess({
            msg: e
        })
    } else {
        Vue.toasted.global.defaultSuccess()
    }
}

export async function validateToken() {

    const tk = localStorage.getItem("tk")
    
    if(!tk) { 
        clearAllData()
        return false 
    }

    axios.defaults.headers.common["Authorization"] = `bearer ${tk}`
    return true
}