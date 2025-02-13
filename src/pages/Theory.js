import React from 'react';
import { Link } from "react-router-dom";

const Theory = () => {
  return (
    <div>
      <h2 className="mb-3">Теория</h2>
      <ol>
        <li><Link className="link-offset-1" to="/theory1">Понятие числового набора данных</Link></li>
        <li><Link className="link-offset-1" to="/theory2">Понятие средней величины</Link></li>
        <li><Link className="link-offset-1" to="/theory3">Виды средних величин</Link></li>
        <li><Link className="link-offset-1" to="/theory4">Средняя арифметическая</Link></li>
        <li><Link className="link-offset-1" to="/theory5">Средняя гармоническая</Link></li>
        <li><Link className="link-offset-1" to="/theory6">Средние геометрическая и квадратическая</Link></li>
        <li><Link className="link-offset-1" to="/theory7">Мода и медиана</Link></li>
        <li><Link className="link-offset-1" to="/theory8">Применение средних величин</Link></li>
      </ol>
    </div>
  );
};

export default Theory;
