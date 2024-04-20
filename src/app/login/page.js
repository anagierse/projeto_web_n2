import Link from "next/link";
import Menu from "@/components/menu";
import styles from "./page.module.css";


export default function login() {
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
              <label htmlFor="password">
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
