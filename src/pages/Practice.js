import React from "react";
import { useState } from "react";
import { BlockMath, InlineMath } from "react-katex";

const Practice = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCard = (cardId) => {
    setIsOpen((prev) => ({
      ...prev,
      [cardId]: !prev[cardId],
    }));
  };

  const problems = [
    {
      id: "solution1",
      title: "Задача 1",
      text: "Костя в течение первой четверти получил следующие оценки по математике: 2, 3, 3, 2, 2, 2, 2, 5, 2, 5. Найдите моду и насколько отличается медиана его оценок от его среднего балла.",
      solution: (
        <>
        <ol>
                <li>
                  Так как число 2 встречается в этом ряде чаще других, то мода
                  равна 2.
                </li>
                <li>
                  Вычислим средний балл по формуле средней арифметической
                  простой:
                  <BlockMath math="{x_{cp}} = \frac{2 + 3 + 3 + 2 + 2 + 2 + 2 + 5 + 2 + 5}{10} = 2,8" />
                </li>
                <li>
                  Для нахождения медианы упорядочим оценки по возрастанию:
                  <p className="text-center">
                    2 2 2 2 <span className="fw-bold">2 2</span> 3 3 5 5
                  </p>
                  Медиана равна: (2+2) / 2 = 2.
                </li>
                <li>
                  Найдём разность между средним показателем и медианой:
                  <p className="text-center">2,8 – 2 = 0,8.</p>
                </li>
              </ol>
              <p>
                <span className="fst-italic">Ответ</span>: Mo = 2, медиана
                меньше на 0,8.
              </p>
              </>
      )
    },
    {
      id: "solution2",
      title: "Задача 2",
      text: (
        <>
        Дан числовой ряд в виде показателей инфляции в России в 2024 году по месяцам (в процентах):
          <table className="table table-bordered">
  <thead>
    <tr>
      <th scope="col" style={{color: "#203864"}}>Янв</th>
      <th scope="col" style={{color: "#203864"}}>Фев</th>
      <th scope="col" style={{color: "#203864"}}>Мар</th>
      <th scope="col" style={{color: "#203864"}}>Апр</th>
      <th scope="col" style={{color: "#203864"}}>Май</th>
      <th scope="col" style={{color: "#203864"}}>Июн</th>
      <th scope="col" style={{color: "#203864"}}>Июл</th>
      <th scope="col" style={{color: "#203864"}}>Авг</th>
      <th scope="col" style={{color: "#203864"}}>Сент</th>
      <th scope="col" style={{color: "#203864"}}>Окт</th>
      <th scope="col" style={{color: "#203864"}}>Ноя</th>
      <th scope="col" style={{color: "#203864"}}>Дек</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{color: "#203864"}}>7.44</td>
      <td style={{color: "#203864"}}>7.67</td>
      <td style={{color: "#203864"}}>7.69</td>
      <td style={{color: "#203864"}}>7.82</td>
      <td style={{color: "#203864"}}>8.29</td>
      <td style={{color: "#203864"}}>8.58</td>
      <td style={{color: "#203864"}}>9.13</td>
      <td style={{color: "#203864"}}>9.04</td>
      <td style={{color: "#203864"}}>8.62</td>
      <td style={{color: "#203864"}}>8.53</td>
      <td style={{color: "#203864"}}>8.66</td>
      <td style={{color: "#203864"}}>9.07</td>
    </tr>
  </tbody>
</table>
<p className="card-text">
Найдите средний уровень инфляции за 2024 год, медиану и размах этого ряда.
          </p>
          </>
      ),
      solution: (
        <>
         <ol>
                <li>
                Найдем средний уровень инфляции:
                <BlockMath math="{x_{cp}} = \frac{7,44 + 7,67 + 7,69 + 7,82 + 8,29 + 8,58 + 9,13 + 9,04 + 8,62 + 8,53 + 8,66 + 9,07}{12} = \frac{100,54}{12} \approx 8,38% " />
                </li>
                <li>
                Для нахождения медианы упорядочим числа по возрастанию:
                  <p className="text-center">
                  7,44  7,67  7,69  7,82  8,29  <span className="fw-bold">8,53  8,58</span>  8,62  8,66  9,04  9,07  9,13 
                  </p>
                  Медиана равна: (8,53+8,58) / 2 ≈ 8,56.
                </li>
                <li>
                Размах равен: 
                  <p className="text-center">9,07 - 7,44 = 1,63.</p>
                </li>
              </ol>
              <p>
                <span className="fst-italic">Ответ</span>: Xср ≈ 8,38%, Me ≈ 8,56, R = 1,63.
              </p>
              </>
      )
    },
    {
      id: "solution3",
      title: "Задача 3",
      text: "Смешано печенье трех сортов. При этом взято  5 кг  печенья ценой 90 руб. за килограмм, 7 кг – ценой  120 руб. и  8 кг – ценой  80 руб. за 1 килограмм. Определить цену 1 килограмма смеси.",
      solution: (
        <>
        В задаче нужно определить цену килограмма смеси печенья. Цену килограмма смеси печенья можно определить, зная общую стоимость печенья и общий его вес. Общий вес печенья легко определить, потому что в условии дан вес печенья каждого сорта. Общая стоимость печенья мы сможем вычислить, определив стоимость каждой из составных частей смеси.
        <ol>
          <li>
          Определим стоимость каждой из частей печенья, из которых состоит смесь. Это можно сделать, поскольку известны и цена, и число килограммов печенья каждого сорта:
            90 * 5 = 450 (руб), 120 * 7 = 840 (руб), 80 * 8 = 640 (руб).
          </li>
          <li>Далее вычислим общую стоимость всего печенья, т.е. всей смеси: 450 + 840 + 640= 1930 (руб).
          </li>
          <li>Найдем число килограммов смеси: 5 + 7 + 8 = 20 (кг).</li>
          <li>Найдем цену 1 кг смеси: 1930 / 20 = 96,5 (руб/кг).</li>
        </ol>
        Запись решения задачи можно записать в виде числового выражения по формуле средней арифметической простой:
        <div><InlineMath math="{x_{cp}} = \frac{90 * 5 + 120 * 7 + 80 * 8}{5 + 7 + 8} = \frac{1930}{20} = 96,5" />(руб/кг)</div>
        <p>
            <span className="fst-italic">Ответ</span>: цена 1 кг стоит 96,5 руб/кг.
        </p>
        </>
      )
    },
    {
      id: "solution4",
      title: "Задача 4",
      text: "Может ли среднее арифметическое 35 целых чисел равняться 6,35?",
      solution: (
        <>
        <p>Предположим, что такие числа существуют. Их сумма равна среднему арифметическому этих чисел, умноженному на их количество: 6,35 * 35 = 222,25.</p>
        <p>Поскольку сумма целых чисел – целое число, получаем противоречие.</p>
        <p>
            <span className="fst-italic">Ответ</span>: не может.
        </p>
        </>
      )
    },
    {
      id: "solution5",
      title: "Задача 5",
      text: "Средний рост восьми баскетболистов равен 195 см. Какое наибольшее количество из этих игроков может быть ниже, чем 191 см?",
      solution: (
        <>
        <p>Например, если один баскетболист имеет рост 230 см, то рост остальных может быть 190 см, так как (230 + 190 * 7) / 8 = 195.</p>
        <p>
            <span className="fst-italic">Ответ</span>: семь игроков.
        </p>
        </>
      )
    },
    {
      id: "solution6",
      title: "Задача 6",
      text: "Среднее арифметическое десяти различных натуральных чисел равно 15. Найдите наибольшее значение наибольшего из этих чисел.",
      solution: (
        <>
        <p><span className="fst-italic">Оценка.</span> Сумма данных чисел равна 150. Так как все числа различны, то сумма девяти наименьших из них не меньше, чем 1 + 2 + ... + 9 = 45.  Следовательно, наибольшее число не может быть больше, чем 105.</p>
        <p>Пример: (1 + 2 + ... + 9 + 105) / 10 = 15.</p>
        <p>
        <span className="fst-italic">Ответ</span>: 105.
        </p>
        </>
      )
    },
    ]



  return (
    <div>
      <h3 className="mb-3">Практика</h3>
      <div>
      {problems.map((problem) => (
        <div key={problem.id} className="card mb-3" style={{ background: "#ECF3F4", color: "#203864", maxWidth: "1200px" }}>
          <div className="card-body">
            <h5 className="card-title">{problem.title}</h5>
            <p className="card-text">{problem.text}</p>
            <button
              className="btn btn-primary me-2"
              type="button"
              onClick={() => toggleCard(problem.id)}
              aria-expanded={isOpen[problem.id] || false}
              style={{
                background: "#BDD7EE",
                color: "#203864",
                borderColor: "white",
              }}
            >
              {isOpen[problem.id] ? "Скрыть решение" : "Показать решение"}
            </button>

            <div className={`collapse mt-3 ${isOpen[problem.id] ? "show" : ""}`} id={problem.id}>
              {problem.solution}
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
            }
  export default Practice;
