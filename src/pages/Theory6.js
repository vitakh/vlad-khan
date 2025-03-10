import React from 'react';
import { InlineMath, BlockMath } from "react-katex";

const Theory6 = () => {
  return (
    <div>
      <h2 className="mb-3">Средние геометрическая и квадратическая</h2>
      <p><span className="fw-bold">Средняя геометрическая простая</span> исчисляется извлечением корня степени n из произведений отдельных значений–вариантов признака х:</p>
      <p className="text-center"><InlineMath math="\rm{\overline{x} = \sqrt[n]{x_1 \cdot x_2 \cdot x_3 \cdot _\dots \cdot x_n}}" /> или <InlineMath math="\rm{\overline{x_g} = \sqrt[n]{x_1 \cdot x_2 \cdot x_3 \cdot _\dots \cdot x_n}}" /> ,</p>
      <p style={{textIndent: "20px"}}>где n – объем совокупности (выборки), число вариантов; <InlineMath math="\rm{{х_1 \cdot х_2 \cdot х_3 \cdot _\dots \cdot x_n}}"/> – значения вариант. При этом <InlineMath math="\rm{{х_1  > 0}}"/>. При наличии нулевого показателя вместо среднего геометрического вычисляется приближенное среднее арифметическое.</p>
      <p style={{textIndent: "20px"}}>Средняя геометрическая применяется, как правило, для расчета относительной величины динамики, например, определения среднего темпа роста.</p>
      <p><span className="fw-bold">Средняя квадратическая простая</span> определяется по формуле:</p>
      <p className="text-center"><InlineMath math="\rm{\overline{x} = \sqrt{\frac{\sum x_i^2}{n}}}"/> или <InlineMath math="\rm{\overline{x_q} = \sqrt{\frac{\sum_{i=1}^n x_i^2}{n}}}" /></p>
      <p style={{textIndent: "20px"}}>Средняя квадратическая лежит в основе вычислений ряда сводных расчетных показателей. Используют при вычислении средних площадей, диаметров, радиусов.</p>
      <p className="text-decoration-underline fw-bold text-center">Неравенства между степенными средними</p>
      <p>Средняя арифметическая, геометрическая, гармоническая и квадратическая двух положительных чисел <span className="fst-italic">a</span> и <span className="fst-italic">b</span> связаны следующими неравенствами:</p>
      <BlockMath math="\sqrt{\frac{a^2 + b^2}{2}} \geqslant \frac{a+b}{2} \geqslant \sqrt{ab} \geqslant \frac{2ab}{a+b} ," />
      <p style={{textIndent: "20px"}}>причём эти неравенства обращаются в равенство в том и только том случае, когда <span className="fst-italic">a</span>=<span className="fst-italic">b</span>.</p>
    </div>
  );
};

export default Theory6;