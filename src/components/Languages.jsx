import React from "react";
import Button from "./Button";

function Languages(props) {
    return(
        <div className="mt-10 font-display flex flex-row justify-evenly">
            <Button name="EN" f={props.func} lang={1} />
            <Button name="FR" f={props.func} lang={2} />
            <Button name="ES" f={props.func} lang={3} />
            <Button name="DE" f={props.func} lang={4} />
            <Button name="IT" f={props.func} lang={5} />
            <Button name="PT" f={props.func} lang={6} />
            <Button name="RU" f={props.func} lang={7} />
            <Button name="ZH" f={props.func} lang={8} />
            <Button name="KO" f={props.func} lang={9} />
            <Button name="JA" f={props.func} lang={10} />
        </div>
    )
}

export default Languages;