import { Link } from "react-router-dom";

function Error() {
  return (
    <main className="main bg-dark">
    <div className="error">
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/">Retour à la page d'accueil</Link>
    </div>
    </main>
  );
}
export default Error;