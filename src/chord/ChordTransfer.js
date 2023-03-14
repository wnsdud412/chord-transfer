import React, { useState, useEffect } from 'react';
import * as Transposer from 'chord-transposer';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Form, Container, FloatingLabel, Row, Col} from "react-bootstrap";

const ChordMain = (props) => {
  const [chords, setChords] = useState("chords");
  const [alterType, setAlterType] = useState("key");
  const [alterKey, setAlterKey] = useState("");
  const [result, setResult] = useState("result");

  const changeChords = (e) => {
    const input = e.target.value;
    setChords(input)
  };

  const changeAlterType = (e) => {
    setAlterType(e.target.value)
  }

  const changeAlterKey = (e) => {
    setAlterKey(e.target.value)
  }

  useEffect(() => {
    try{
      if(!chords || !alterType || !alterKey){
        throw new Error("not setting yet")
      }
      let alterdChord = ""
      switch (alterType) {
        case "key":
          alterdChord = Transposer.transpose(chords).toKey(alterKey).toString()
          break;
        case "up":
          alterdChord = Transposer.transpose(chords).up(Number(alterKey)).toString()
          break;
        case "down":
          alterdChord = Transposer.transpose(chords).down(Number(alterKey)).toString()
          break;
      }
      setResult(alterdChord)
    }catch(e){
      if(chords === "chords"){
        return;
      }
      setResult("악보 코드가 아님")
    }
  }, [chords,alterType,alterKey]);

  return (
    <Container>
      <h2 className="m-3">코드 변환기</h2>
      <Form>
        <FloatingLabel controlId="inputChord" label="코드" className="mb-3 text-start">
          <Form.Control required type="text" placeholder="Chords" onChange={changeChords}/>
          <Form.Text id="explanation chords">
            변환하고자 하는 악보 코드를 한칸씩 띄워서 입력하세요(ex: C Em F)
          </Form.Text>
        </FloatingLabel>
        <Row>
          <Col sm={4}>
            <FloatingLabel controlId="alterTypeSelect" label="변환타입">
              <Form.Select aria-label="Floating label select example" onChange={changeAlterType}>
                <option value="key">지정키</option>
                <option value="up">#샵</option>
                <option value="down">b플랫</option>
              </Form.Select>
            </FloatingLabel>
          </Col>
          <Col sm={8}>
            <FloatingLabel controlId="inputAlterKey" label="변환목표" className="mb-3">
              <Form.Control required type="text" placeholder="AlterKey" onChange={changeAlterKey}/>
            </FloatingLabel>
          </Col>
        </Row>
      </Form>
      <hr></hr>
      <h2>output</h2>
      <div>
        input : {chords}
      </div>
      <div>
        output : {result}
      </div>
    </Container>
  )
}

export default ChordMain;