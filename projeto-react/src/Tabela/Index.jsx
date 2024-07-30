import "bootstrap/dist/css/bootstrap.min.css"; 
import "../Tabela/Tabela.modules.css";

function TabelaIMC() {
  return (
    <div className="blocoTab">
      <table className="table">
        <thead>
          <tr>
            <th id="th-titulo">IMC</th>
            <th id="th-titulo">Classificação</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Menor que 17</td>
            <td>Muito abaixo do peso</td>
          </tr>
          <tr id="td-bg">
            <td>Entre 17 e 18,49</td>
            <td>Abaixo do peso</td>
          </tr>
          <tr>
            <td>Entre 18,5 e 24,99</td>
            <td>Peso normal</td>
          </tr>
          <tr id="td-bg">
            <td>Entre 25 e 29,99</td>
            <td>Acima do Peso</td>
          </tr>
          <tr>
            <td>Entre 30 e 34,99</td>
            <td>Obesidade I</td>
          </tr>
          <tr id="td-bg">
            <td>Entre 35 e 39,99</td>
            <td>Obesidade II (severa)</td>
          </tr>
          <tr>
            <td>Acima de 40</td>
            <td>Obesidade III (Mórbida)</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}