import React, { Fragment, useState } from "react";
import img from "./assets/img/equals.png";
import {
  Container,
  Screen,
  Previous,
  Current,
  Butoon,
  ButoonEquals,
} from "./assets/index";

export default function Calculator() {
  const [valor, setValor] = useState("");
  const [historial, setHistorial] = useState("");
  const [operacion, setOperacion] = useState("");

  const appendValue = (e) => {
    const value = e.target.getAttribute("data");

    if (value === "." && valor.includes(".")) return;
    setValor(valor + value);
  };

  const handdleDelete = () => {
    setValor(String(valor).slice(0, -1));
  };

  const operationCustom = (e) => {
    if (valor === "") return;
    if (historial !== "") {
      let value = compute();
      setHistorial(value);
    } else {
      setHistorial(valor);
    }

    setValor("");
    setOperacion(e.target.getAttribute("data"));
  };

  const quitarValors = () => {
    setValor("");
    setHistorial("");
    setOperacion("");
  };

  const equalsCustom = () => {
    let value = compute();
    if (value === undefined || value === null) return;

    setValor(value);
    setHistorial("");
    setOperacion("");
  };
  const compute = () => {
    let result;
    let previousNumber = parseFloat(historial);
    let valorNumber = parseFloat(valor);

    if (isNaN(previousNumber) || isNaN(valorNumber)) return;

    switch (operacion) {
      case '÷':
        result = previousNumber / valorNumber;
        break;
      case 'x':
        result = previousNumber * valorNumber;
        break;
      case '+':
        result = previousNumber + valorNumber;
        break;
      case '-':
        result = previousNumber - valorNumber;
        break;

      default:
        break;
    }
    return result;
  };

  return (
    <Fragment>
      <Container>
        <Screen>
          <Previous>
            {historial} {operacion}
          </Previous>
          <Current>{valor}</Current>
        </Screen>
        <Butoon data={"7"} onClick={appendValue}>
          7
        </Butoon>
        <Butoon data={"8"} onClick={appendValue}>
          8
        </Butoon>
        <Butoon data={"9"} onClick={appendValue}>
          9
        </Butoon>
        <Butoon operation onClick={handdleDelete}>
          ⌫
        </Butoon>
        <Butoon data={"4"} onClick={appendValue}>
          4
        </Butoon>
        <Butoon data={"5"} onClick={appendValue}>
          5
        </Butoon>
        <Butoon data={"6"} onClick={appendValue}>
          6
        </Butoon>
        <Butoon data={"÷"} onClick={operationCustom} operation>
          ÷
        </Butoon>
        <Butoon data={"1"} onClick={appendValue}>
          1
        </Butoon>
        <Butoon data={"2"} onClick={appendValue}>
          2
        </Butoon>
        <Butoon data={"3"} onClick={appendValue}>
          3
        </Butoon>
        <Butoon data={"x"} onClick={operationCustom} operation>
          x
        </Butoon>
        <Butoon data={"."} onClick={appendValue} control>
          .
        </Butoon>
        <Butoon data={"0"} onClick={appendValue}>
          0
        </Butoon>
        <Butoon data={"-"} onClick={operationCustom} control>
          -
        </Butoon>
        <Butoon data={"+"} onClick={operationCustom} operation>
          +
        </Butoon>
        <Butoon operation onClick={quitarValors}>
          AC
        </Butoon>
        <ButoonEquals equals2 onClick={equalsCustom}>
          <img src={img} width="300px" height="100px" />
        </ButoonEquals>
      </Container>
    </Fragment>
  );
}
