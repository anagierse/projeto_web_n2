import Link from "next/link";
import Menu from "@/components/menu";
import styles from "./page.module.css";
import { useEffect } from "react";
import { addNight, getNight, updateNight } from "../utils/api";

var i = 3

export default function login() {
  const [nights, setNights] = useState(null)
  const [dia, setDia] = useState("")
  const[mes, setMes] = useState("")
  const[horas, setHoras] = useState("")
  const[qualidade, setQualidade] = useState("")

  useEffect(() =>{
    getNights()
  .then((data)=> setNights(data))
},[]
  )

  function changeHoras(event){
    setHoras(event.target.value)
  }

  function changeQualidade(event){
    setQualidade(event.target.value)
  }

  function handleAddQualidade(){
    event.preventDefault()
    let id = i
    
    i++

    let n = {id, dia, mes, horas, qualidade}

    addNight(n).then((status)=>{
    if(status==201){
        getNights()
        .then((data)=> setNights(data))
    }
  }
  )}

  function handleUpdateNight(){
    event.preventDefault()
    let n = {id, dia, mes, horas, qualidade}

    updateNight(n).then((status)=>{
      if(status == 200){
        getNights()
        .then((data)=> setNights(data))
      }
    })
  }

  return (
    <>
        <Menu />
        <article className={styles.formulario}>
        <div>
            <h2>Login</h2>
            <div>
              <label htmlFor="username">
                Nome de Usuário:
              </label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Digite seu usuário"
                required
              />
            <div>
              <label html
              For="password">
                Senha:
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Digite sua senha"
                required
              />
            </div>
            <div>
              <button>
                Login
              </button>
            </div>
          </div>
          </div>
          <div>
            <h2>Criar Conta</h2>
            <div>
              <label htmlFor="username">
                Nome de Usuário:
              </label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Digite o usuário"
                required
              />
            </div>
            <div>
              <label>
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Digite seu email"
                required
              />
            </div>
            <div>
              <label htmlFor="password">
                Senha:
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Digite a senha"
                required
              />
            </div>
            <div>
              <label htmlFor="confirmPassword">
                Confirmar Senha:
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirme sua senha"
                required
              />
            </div>
            <div>
              <button type="submit">
                Criar Usuário
              </button>
            </div>
          </div>
        </article>
    </>
  );
}
