// style
import './Container.styles.css'
// função de validação de email
import validator from 'validator'
// Hoocks
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
// Ícones
import {IoMdPerson} from "@react-icons/all-files/io/IoMdPerson"
import {MdVisibilityOff} from "@react-icons/all-files/md/MdVisibilityOff"
import {MdVisibility} from "@react-icons/all-files/md/MdVisibility"
// componentes
import Input from '../../Input/Input'
import Button from '../../Button/Button'

function Container() {
    
    const navigate = useNavigate()
    const [form, setForm] = useState()
    
    function onChange(e) {
        setForm({...form, [e.target.name]: e.target.value})

        var senha = document.getElementById("senha")
        
        if(validator.isEmail(form.usuario)) {
            var error = document.getElementById("error")
            error.style.display = "none"
        }

    }

    function erro()  {
        var error = document.getElementById("error")
        error.style.display = "block"
    }
    function erro_senha() {
        // var error_senha = document.getElementById("error_senha")
        error_senha.style.display = "block"
    }


    const loading = function() {
        var btn = document.getElementById("btn")
        btn.style.display = "none"
        var load = document.getElementById("load")
        load.style.display = "block"
    }
    
    var submit = (e) => { 
        e.preventDefault()
    
        var usuario = document.getElementById("usuario")
        var senha = document.getElementById("senha")

        if (usuario.value == ""){
            erro()
        }
        if (senha.value == "") {
           erro_senha()
        }
        else if (validator.isEmail(form.usuario)) {
            loading()
            createPost(form)
        } else {
            erro()
        }
    }

    function createPost(form) {
        fetch("http://localhost:5000/form", {
            method: 'POST',
            headers:{
                'Content-type': 'application/json',
            },
            body: JSON.stringify(form)
        }).then((resp) => resp.json())
        .then(function() {
            setTimeout(() => {
                navigate('/home', {state:{message: 'Login concluído com sucesso'}})
            },5000)
        })    
    }

    var visibleOff = function() {
        var senha = document.getElementById("senha")
        senha.type = "password"

        var icon = document.getElementById("pass_icon")
        icon.setAttribute("display","none")

        var icon_off = document.getElementById("pass_icon_off")
        icon_off.setAttribute("display","block")
    }

    var visibleOn = function() {
        var senha = document.getElementById("senha")
        senha.type = "text"

        var icon = document.getElementById("pass_icon")
        icon.setAttribute("display","block")

        var icon_off = document.getElementById("pass_icon_off")
        icon_off.setAttribute("display","none")


    }

    return (
        
        <form onSubmit={submit} className="container">
            <div id="container_top_icon">
                <IoMdPerson id="top_icon"/>
            </div>
            <h1>Login</h1>
            <p>Por favor preencha os dados abaixo para começar!</p>
            <div id="container_user_icon">
                <IoMdPerson id="user_icon"/>
            </div>
            <Input
                name="usuario"
                type="text"
                placeholder="Usuário"
                onChange = {onChange}
            />
            <div className = "error" id="error">
                Por favor, insira um emai válido
            </div>
            <div id="container_pass_icon">
                <MdVisibility className="pass_icon" display="none" id="pass_icon" onClick={visibleOff}/>
                <MdVisibilityOff className="pass_icon" display="block" id="pass_icon_off" onClick={visibleOn}/>
            </div>
            <Input
                onChange={onChange}
                name="senha"
                type="password"
                placeholder="Senha"
            />
            <div className = "error" id="error_senha">
                Campo obrigatório
            </div>
            <div className="load" id="load">
            </div>
            <Button
                display="none"
                name="btn"
                text="ENTRAR"
            />
        </form>
    )
}

export default Container