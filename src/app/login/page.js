import Link from "next/link";
import Menu from "@/components/menu";
import styles from "./page.module.css";


export default function login() {
  return (
    <>
      <section className="container">
        <Menu />

        <article className="retangulo2">
          <div className="formulario1">
            <h2 className="loginSenhaForms">Login</h2>
            <div className="formField">
              <label htmlFor="username" className="titulosForms">
                Nome de Usuário:
              </label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Digite seu usuário"
                required
                className="inputsForms"
              />
            </div>
            <div className="formField">
              <label htmlFor="password" className="titulosForms">
                Senha:
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Digite sua senha"
                required
                className="inputsForms"
              />
            </div>
            <div className="formField">
              <button type="submit" className="botaoForms">
                Login
              </button>
            </div>
          </div>

          <div className="formulario2">
            <h2 className="loginSenhaForms">Criar Conta</h2>
            <div className="formField">
              <label htmlFor="username" className="titulosForms">
                Nome de Usuário:
              </label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Digite o usuário"
                required
                className="inputsForms"
              />
            </div>
            <div className="formField">
              <label htmlFor="email" className="titulosForms">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Digite seu email"
                required
                className="inputsForms"
              />
            </div>
            <div className="formField">
              <label htmlFor="password" className="titulosForms">
                Senha:
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Digite a senha"
                required
                className="inputsForms"
              />
            </div>
            <div className="formField">
              <label htmlFor="confirmPassword" className="titulosForms">
                Confirmar Senha:
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirme sua senha"
                required
                className="inputsForms"
              />
            </div>
            <div className="formField">
              <button type="submit" className="botaoForms">
                Criar Usuário
              </button>
            </div>
          </div>
        </article>
      </section>
    </>
  );
}
