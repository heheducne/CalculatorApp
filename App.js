import React, { useState } from "react";
import reactDom from "react-dom";
import { StyleSheet, View, Text, TouchableOpacity, Button } from "react-native";
import {fix_str} from "./calcu.js"
let count_brackets = 0;
let flag_num = 0;
export default function App() {
  const [resultText, setResultText] = useState("");
  const [calcText, setCalcText] = useState("");
  const onButtonClick = (text) => {
    if (text == "=") {
      return calculateResult();
    }
    setResultText(resultText + text);
  };

  const calculateResult = () => {
    try{
      setCalcText(eval(fix_str(resultText)))
    }
    catch(err){
      setCalcText("Syntax error");
    }
  };

  const onOperationClick = (operation) => {
    let operations = ["DEL", "+", "-", "*", "/"];

    if (operation == "DEL") {
      if (resultText.toString().length != 0){
        if (resultText.slice(-1)=='('){
          count_brackets--;
          if(count_brackets==0) {flag_num=0;
          // console.log("clgt")}
        }}
        if (resultText.slice(-1)==')'){
          count_brackets++
          if (count_brackets!=0){flag_num=1;}}
        return setResultText(
          resultText.toString().substring(0, resultText.length - 1)
        );
    }}
    if (operation == "AC") {
      setResultText("");
      setCalcText(0);
      return;
    }
    setResultText(resultText + operation);
  };

  return (
    <View style={styles.container}>
      
      <View style={styles.result}>
        <Text style={styles.resultText}>{calcText}</Text>
      </View>

      <View style={styles.calculation}>
        <Text style={styles.calculationText}>{resultText}</Text>
      </View>

      <View style={styles.buttons}>
        <View style={styles.numbers}>

          <View style={styles.row}>
            <TouchableOpacity
              onPress={() => onOperationClick("AC")}
              style={styles.btn}
            >
              <Text style={styles.operationButton}>AC</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => onOperationClick("DEL")}
              style={styles.btn}
            >
              <Text style={styles.operationButton}>DEL</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => onOperationClick("HIS")}
              style={styles.btn}
            >
              <Text style={styles.operationButton}>HIS</Text>
            </TouchableOpacity>
          </View>


          <View style={styles.row}>
            <TouchableOpacity
                onPress={() => {
                  onButtonClick(1);
                  if (count_brackets!=0) {flag_num = 1;}
                }}
                style={styles.btn}
              >
                <Text style={styles.number}>1</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  onButtonClick(2);
                  if (count_brackets!=0) {flag_num = 1;}
                }}
                style={styles.btn}
              >
                <Text style={styles.number}>2</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  onButtonClick(3);
                  if (count_brackets!=0) {flag_num = 1;}
                }}
                style={styles.btn}
              >
                <Text style={styles.number}>3</Text>
              </TouchableOpacity>
          </View>


          <View style={styles.row}>
          <TouchableOpacity
              onPress={() => {
                onButtonClick(4);
                if (count_brackets!=0) {flag_num = 1;}
              }}
              style={styles.btn}
            >
              <Text style={styles.number}>4</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                onButtonClick(5);
                if (count_brackets!=0) {flag_num = 1;}
              }}
              style={styles.btn}
            >
              <Text style={styles.number}>5</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                onButtonClick(6);
                if (count_brackets!=0) {flag_num = 1;}
              }}
              style={styles.btn}
            >
              <Text style={styles.number}>6</Text>
            </TouchableOpacity>
          </View>


          <View style={styles.row}>
            <TouchableOpacity
              onPress={() => {
                onButtonClick(7);
                if (count_brackets!=0) {flag_num = 1;}
              }}
              style={styles.btn}
            >
              <Text style={styles.number}>7</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                onButtonClick(8);
                if (count_brackets!=0) {flag_num = 1;}
              }}
              style={styles.btn}
            >
              <Text style={styles.number}>8</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                onButtonClick(9);
                if (count_brackets!=0) {flag_num = 1;}
              }}
              style={styles.btn}
            >
              <Text style={styles.number}>9</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.row}>
            <TouchableOpacity
              onPress={() => {
                onButtonClick(0);
                if (count_brackets!=0) {flag_num = 1;}
              }}
              style={styles.btn}
            >
              <Text style={styles.number}>0</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => onButtonClick(".")}
              style={styles.btn}
            >
              <Text style={styles.number}>.</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                if (flag_num == 0) {
                  onOperationClick("(") 
                  count_brackets++;
                }
                else {
                  onOperationClick(")")
                  count_brackets--;
                  if (count_brackets==0) {flag_num = 0;}
                } 
              }}
              style={styles.btn}
            >
              <Text style={styles.number}>( )</Text>
            </TouchableOpacity>
            
          </View>
        </View>

        <View style={styles.operations}>
            <TouchableOpacity
              onPress={() => {
                onOperationClick("√(");
                count_brackets++
                flag_num=1;
              }}
              style={styles.btn}
            >
              <Text style={styles.operationButton}>√</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => onOperationClick("π")}
              style={styles.btn}
            >
              <Text style={styles.operationButton}>π</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => onOperationClick("^")}
              style={styles.btn}
            >
              <Text style={styles.operationButton}>^</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => onOperationClick("!")}
              style={styles.btn}
            >
              <Text style={styles.operationButton}>!</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => onButtonClick("%")}
              style={styles.btn}
            >
              <Text style={styles.operationButton}>%</Text>
            </TouchableOpacity>
          </View>


          <View style={styles.operations}>
            <TouchableOpacity
              onPress={() => onOperationClick("/")}
              style={styles.btn}
            >
              <Text style={styles.operationButton}>÷</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => onOperationClick("*")}
              style={styles.btn}
            >
              <Text style={styles.operationButton}>x</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => onOperationClick("-")}
              style={styles.btn}
            >
              <Text style={styles.operationButton}>-</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => onOperationClick("+")}
              style={styles.btn}
            >
              <Text style={styles.operationButton}>+</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => onButtonClick("=")}
              style={styles.btn}
            >
              <Text style={styles.operationButton}>=</Text>
            </TouchableOpacity>
          </View>
        <View style={styles.history}>
          <Text style={styles.historytext}>History</Text>
            {/* <FlatList
            data={search_history}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            /> */}
          </View>

        </View>

    </View>  
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#434343"
  },
  result: {
    flex: 2.5,
    backgroundColor: "grey",
    justifyContent: "center",
    alignItems: "flex-end",
    borderTopEndRadius:70,
    borderTopStartRadius:70,

  },
  calculation: {
    flex: 2,
    backgroundColor: "#d6d6c2",
    justifyContent: "center",
    alignItems: "flex-end",

  },
  numbers: {
    flex: 3,
    backgroundColor: "#434343",
    justifyContent: "space-around",
  },
  buttons: {
    flex: 6,
    flexDirection: "row",
  },
  row: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
  },
  operations: {
    flex: 1,
    backgroundColor: "#434343",
    alignItems: "center",
    justifyContent: "space-around",
  },
  history:{
    flex: 2,
    backgroundColor: "grey",
  },
  resultText: {
    fontSize: 100,
    color: "white",
    fontWeight: "bold",
  },
  calculationText: {
    color: "black",
    fontWeight: "bold",
    fontSize: 100
  },
  number: {
    fontSize: 70,
    color: "white",
  },
  btn: {
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "stretch",
    fontSize: 70,
  },
  operationButton: {
    fontSize: 70,
    color: "orange",
    fontWeight: "bold",
  },
  historytext:{
    fontSize: 70,
    color: "yellow",
    fontWeight: "bold",
  }
}
);
