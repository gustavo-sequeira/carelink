import axios from "axios";

const http = axios.create({
    baseURL: 'http://localhost:8080',
    headers: {
        Accept: 'application/json',
        Content: 'application/json'
    }
})


// Adiciona um interceptador na requisição
http.interceptors.request.use(function (config) {
    
    // Faz alguma coisa antes da requisição ser enviada
    const token = sessionStorage.getItem('token')
    if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`
    }

    return config;
  }, function (error) {
    // Faz alguma coisa com o erro da requisição
    console.log('Erro no interceptor do axios')
    return Promise.reject(error);
  });

export default http