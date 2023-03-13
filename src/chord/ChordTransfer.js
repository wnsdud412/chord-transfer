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
          alterdChord = Transposer.transpose(chords).up(alterKey).toString()
          break;
        case "down":
          alterdChord = Transposer.transpose(chords).down(alterKey).toString()
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
        <FloatingLabel controlId="inputChord" label="Chords" className="mb-3">
          <Form.Control required type="text" placeholder="Chords" onChange={changeChords}/>
        </FloatingLabel>
        <Row>
          <Col sm={4}>
            <FloatingLabel controlId="alterTypeSelect" label="AlterType">
              <Form.Select aria-label="Floating label select example" onChange={changeAlterType}>
                <option value="key">To Key</option>
                <option value="up">Up</option>
                <option value="down">Down</option>
              </Form.Select>
            </FloatingLabel>
          </Col>
          <Col sm={8}>
            <FloatingLabel controlId="inputAlterKey" label="AlterKey" className="mb-3">
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