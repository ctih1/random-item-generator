"use strict";
const input = document.getElementById("input");
const result_element = document.getElementById("result");
var input_value;
var input_list;
var result_value;
function generate() {
    input_value = input === null || input === void 0 ? void 0 : input.value;
    if (input_value != undefined) {
        input_list = input_value.split("\n");
    }
    console.debug(input_list);
    console.debug(input_value);
    result_value = input_list.at(Math.random() * input_list.length);
    if (result_element != null && result_element != undefined && result_value != undefined) {
        result_element.innerHTML = result_value;
    }
    else {
        console.log("An error occured in the script.");
    }
}
