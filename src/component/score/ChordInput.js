import React from 'react';

const ChordInput = (props) => {
    return (
      <>
        <section className="inputId">
            <input
                className="loginId"
                type="text"
                placeholder="전화번호, 사용자 이름 또는 이메일"
                onChange={props.getInput}
                name="id"
            />
            <input
                className="loginInput"
                type="password"
                placeholder="비밀번호"
                onChange={props.getInput}
                name="password"
            />
        </section>
      </>
    )
}
export default ChordInput;