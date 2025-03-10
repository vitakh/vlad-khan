import React from 'react';
import { BlockMath } from "react-katex";

const Theory4 = () => {
  return (
    <div>
      <h2 className="mb-3">Средняя арифметическая</h2>
      <p>Наиболее распространенным видом средних величин является средняя арифметическая.</p>
      <p><span className="fw-bold">Средняя арифметическая</span> – это объем осредняемого признака, отнесенный к единице совокупности. Иными словами - это отношение суммы чисел к их количеству.</p>
      <p>Среднее арифметическое имеет смысл тогда, когда рассчитывается для качественно однородной совокупности.</p>
      <p><span className="fw-bold">Средняя арифметическая простая</span> вычисляется по формуле:</p>
      <div>
      <BlockMath math="\overline{x} = \frac{X_1 + X_2 + \dots + X_n}{n} = \frac{\sum_{i=1}^{n} X_i}{n}" />
      </div>
      <p style={{textIndent: "20px"}}>где <span className="fst-italic">х<sub>i</sub></span> – вариант, а <span className="fst-italic">n</span> – количество единиц совокупности. Средняя арифметическая простая используется в тех случаях, когда расчет осуществляется по не сгруппированным данным.</p>
      <p><span className="fw-bold">Средняя арифметическая взвешенная</span> вычисляется по формуле:</p>
      <div>
      <BlockMath math="\overline{x} = \frac{\sum x_i f_i}{\sum f_i}" />
      </div>
      <p style={{textIndent: "20px"}}>где <span className="fst-italic">х<sub>i</sub></span> – вариант, а <span className="fst-italic">f<sub>i</sub></span> – частота или статистический вес.
      Используется в случаях, расчет средней производится по сгруппированным данным или вариационным рядам.</p>
      <p className="fw-bold">Свойства среднего арифметического:</p>
      <ol>
        <li>Если каждое число набора увеличить (уменьшить) на одно и то же число <span className="fst-italic">a</span>, то среднее арифметическое набора увеличится (уменьшится) на это же число <span className="fst-italic">a</span>.</li>
        <li>Если каждое число набора умножить на одно и то же число <span className="fst-italic">b</span>, то среднее арифметическое набора также умножится на это число <span className="fst-italic">b</span>.</li>
      </ol>
    </div>
  );
};

export default Theory4;