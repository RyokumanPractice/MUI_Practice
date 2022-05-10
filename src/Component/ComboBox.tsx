import { useState, useEffect } from "react";
import { Autocomplete, TextField } from "@mui/material";

const options: string[] = ["option1", "option2"]; // 콤보박스에서 사용할 옵션들 선언

function ComboBox() {
    const [value, setValue] = useState<string | null>(options[0]); // 콤보박스 값이 바뀔 때 마다 바뀌는 밸류값, 초기값은 옵션의 1번값으로. 또한 인풋값이 옵션과 같으면 sting 아니라면 null
    const [inputValue, setInputValue] = useState(""); // Input시마다 바뀌는 값, textfiled 의 인풋이랑 비슷한거라 생각하면 쉽다. 이해가 잘 되지 않을경우, 아래 onInputChange(18번라인)에 console.log(inputValue 작성)

    //전체 코드를 리뷰하기 앞서서, 제일 주목해야할 점은 value 와 inputValue 가 언제 바뀌고 갱신되는가 이다.

    return (
        <div>
            <Autocomplete //콤보박스 몸체 , 필수값이 2개 존재, 하나는 options, 나머지 하나는 renderInput
                value={value} // 콤보박스 값 (위에서 value 초기값이 option[0] 이었으므로 option1 일것)
                onChange={(event: any, newValue: string | null) => {
                    //value 가 바뀔때마다 실행되는 함수 ,  event는 이벤트에 관한 자세한 사항, newValue에는 바뀐 값이 오더라 -> 이부분 이해가 안가면 문의 ㄱ
                    setValue(newValue); // set 써서 값 갱신
                }}
                inputValue={inputValue} // 콤보박스의 inputValue 값
                onInputChange={(event, newInputValue) => {
                    //inputValue 바뀔때마다 실행되는 함수, 얘도 위랑 똑같음
                    setInputValue(newInputValue); // set 써서 값 갱신
                }}
                options={options} // 옵션 주는거, 필수다.
                sx={{ width: 300 }} // 스타일, width 300 주고있음
                renderInput={(params) => {
                    // 어쨌든 콤보박스도 일종의 textfield 종류 중 하나라고 보는게 맘 편함, 렌더링하는거임 그냥
                    return <TextField {...params} />;
                }}
            />
        </div>
    );
}

export default ComboBox;
