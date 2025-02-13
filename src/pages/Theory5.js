import React from 'react';
import "katex/dist/katex.min.css";
import { BlockMath } from "react-katex";

const Theory5 = () => {
  return (
    <div>
      <h2 className="mb-3">Средняя гармоническая</h2>
      <p>Средние гармонические используются тогда, когда по экономическому содержанию имеется информация для числителя, а для знаменателя ее необходимо предварительно определить.</p>
      <p><span className="fw-bold">Средняя гармоническая простая</span> определяется по формуле:</p>
      <p>
      <BlockMath math="\overline{X} = \frac{n}{\sum \frac{1}{x_i}}" />
      </p>
      <p><span className="fw-bold">Средняя гармоническая взвешенная</span> определяется по формуле:</p>
      <p>
      <BlockMath math="\overline{X} = \frac{\sum w_i}{\sum \frac{w_i}{x_i}}" />
      </p>
      <p>где <span className="fst-italic">w<sub>i</sub>=х<sub>i</sub>∙f<sub>i</sub></span> – вариант, откуда <span className="fst-italic">f = w/x</span>.
      В качестве весов в данной формуле используются произведения единиц совокупности на значения признака (т. е. w = х · f ).</p>
      <p>Среднюю гармоническую простую следует использовать в случаях определения, например, средних затрат труда, времени, материалов на единицу продукции, на одну деталь по нескольким предприятиям, рабочим, занятым изготовлением одного и того же вида продукции.</p>
    </div>
  );
};

export default Theory5;