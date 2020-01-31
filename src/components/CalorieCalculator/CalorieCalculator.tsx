import React, { ReactElement, useState } from "react";

import {
  Button,
  Icon,
  Input,
  Search,
  SemanticCOLORS,
  Statistic,
  Table
} from "semantic-ui-react";

import "./CalorieCalculator.scss";
import calorieDB from "./data.json";

interface SelectedItemIntefrace {
  id: number;
  title: string;
  amount: number;
  protein: number;
  fat: number;
  carbohydrate: number;
  kcal: number;
  attention?: boolean;
}

const initialResultsValue: SelectedItemIntefrace = {
  id: -1,
  title: "",
  amount: 0,
  protein: 0,
  fat: 0,
  carbohydrate: 0,
  kcal: 0
};

function recalculateWithAmount(value: number, amount: number): number {
  return Math.round(((value * amount) / 100 + Number.EPSILON) * 100) / 100;
}

export default function CalorieCalculator(): ReactElement {
  const [loading, setLoading] = useState<boolean>(false);
  const [selected, setSelected] = useState<SelectedItemIntefrace>(
    initialResultsValue
  );
  const [results, setResults] = useState<SelectedItemIntefrace[]>([]);
  const [productList, setProductList] = useState<SelectedItemIntefrace[]>([]);

  function handleSearchChange(
    e: React.MouseEvent<HTMLElement, MouseEvent>,
    { value: title }: { value?: string }
  ): void {
    setLoading(true);
    setSelected({ ...initialResultsValue, title: !title ? "" : title });

    if (!title) {
      setResults([]);
    } else {
      const results = calorieDB
        .filter(el =>
          el.name.toUpperCase().startsWith(title.trim().toUpperCase())
        )
        .map(element => ({
          ...element,
          title: element.name,
          amount: 100,
          description: `100г: Белки ${element.protein}г|Жиры ${element.fat}г|Углеводы ${element.carbohydrate}г|Калории ${element.kcal}г`
        }));

      setResults(results);
    }
    setLoading(false);
  }

  function handleTableRowDelete(id: number): void {
    setProductList(
      productList
        .filter(el => el.id !== id)
        .map(el => {
          return el;
        })
    );
  }

  function handleProductAmountChange(input: string, id: number): void {
    let value: number = Number.parseFloat(input);
    value = value ? (value > 0 ? value : 0) : 0;
    setProductList(
      productList.map(el => {
        if (el.id === id) {
          return { ...el, amount: value };
        } else {
          return el;
        }
      })
    );
  }

  return (
    <>
      <Table celled structured>
        <Table.Header>
          <Table.Row textAlign="center">
            <Table.HeaderCell width="5" rowSpan="2">
              Продукт
            </Table.HeaderCell>
            <Table.HeaderCell width="2" rowSpan="2">
              Количество, г
            </Table.HeaderCell>
            <Table.HeaderCell colSpan="4">Состав, г</Table.HeaderCell>
            <Table.HeaderCell rowSpan="2">...</Table.HeaderCell>
          </Table.Row>
          <Table.Row textAlign="center">
            <Table.HeaderCell width="2">Белки</Table.HeaderCell>
            <Table.HeaderCell width="2">Жиры</Table.HeaderCell>
            <Table.HeaderCell width="2">Углеводы</Table.HeaderCell>
            <Table.HeaderCell width="2">Калории</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {productList.map((product: SelectedItemIntefrace) => (
            <Table.Row key={product.id} positive={product.attention}>
              <Table.Cell>{product.title}</Table.Cell>
              <Table.Cell textAlign="center">
                <Input
                  size="mini"
                  value={product.amount}
                  type="number"
                  onChange={(e, data) => {
                    handleProductAmountChange(data.value, product.id);
                  }}
                ></Input>
              </Table.Cell>
              <Table.Cell textAlign="center">
                {recalculateWithAmount(product.protein, product.amount)}
              </Table.Cell>
              <Table.Cell textAlign="center">
                {recalculateWithAmount(product.fat, product.amount)}
              </Table.Cell>
              <Table.Cell textAlign="center">
                {recalculateWithAmount(product.carbohydrate, product.amount)}
              </Table.Cell>
              <Table.Cell textAlign="center">
                {recalculateWithAmount(product.kcal, product.amount)}
              </Table.Cell>
              <Table.Cell textAlign="center">
                <Button
                  circular
                  size="mini"
                  icon="delete"
                  onClick={() => handleTableRowDelete(product.id)}
                />
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="7">
              <Search
                input={{ fluid: true }}
                icon="search"
                placeholder="Введите продукт..."
                fluid
                loading={loading}
                value={selected.title}
                onSearchChange={handleSearchChange}
                results={results}
                onResultSelect={(e, { result }) => {
                  setSelected({ ...result });
                }}
              />
              <Button
                floated="right"
                icon
                labelPosition="left"
                primary
                size="small"
                disabled={selected.id === -1}
                onClick={() => {
                  const product = productList.find(e => e.id === selected.id);
                  if (product) {
                    product.attention = true;
                    setTimeout(() => {
                      product.attention = false;
                    }, 200);
                  } else {
                    setProductList([...productList, selected]);
                  }
                  setSelected(initialResultsValue);
                }}
              >
                <Icon name="add" /> Добавить
              </Button>
              <div className="clear-float" />
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>

      {(() => {
        if (productList.length !== 0) {
          const data: {
            text: string;
            amount: number;
            color: SemanticCOLORS;
          }[] = [
            { text: "Грамм", amount: 0, color: "grey" },
            { text: "Белков", amount: 0, color: "green" },
            { text: "Жиров", amount: 0, color: "pink" },
            { text: "Углеводов", amount: 0, color: "olive" },
            { text: "Калорий", amount: 0, color: "black" }
          ];

          productList.forEach(element => {
            data[0].amount += element.amount;
            data[1].amount += recalculateWithAmount(
              element.protein,
              element.amount
            );
            data[2].amount += recalculateWithAmount(
              element.fat,
              element.amount
            );
            data[3].amount += recalculateWithAmount(
              element.carbohydrate,
              element.amount
            );
            data[4].amount += recalculateWithAmount(
              element.kcal,
              element.amount
            );
          });

          return (
            <Statistic.Group>
              {data.map((el, i) => (
                <Statistic key={i} color={el.color}>
                  <Statistic.Value>
                    {Math.round((el.amount + Number.EPSILON) * 100) / 100}
                  </Statistic.Value>
                  <Statistic.Label>{el.text}</Statistic.Label>
                </Statistic>
              ))}
            </Statistic.Group>
          );
        }
      })()}
    </>
  );
}
