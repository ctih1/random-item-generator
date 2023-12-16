const input: HTMLInputElement | undefined = <HTMLInputElement> document.getElementById("input");
const result_element: HTMLElement | undefined | null = document.getElementById("result");
var input_value: string | undefined;
var input_list: string[];
var result_value: string | undefined;

function generate() {
    input_value = input?.value;
    if(input_value!=undefined) {
        input_list = input_value.split("\n");
    }
    console.debug(input_list)
    console.debug(input_value)
    result_value = input_list.at(Math.random()*input_list.length);
    if(result_element!=null&&result_element!=undefined&&result_value!=undefined) {
        result_element.innerHTML = result_value;
    }
    else {
        console.log("An error occured in the script.");
    }
}