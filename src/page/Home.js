import React from 'react';
import { Link } from 'react-router-dom'

const HOME = props => {
  return (
    <>
        <h2 align="center">메인화면 준비중</h2>
        <div>
            <Link to='/chordtransfer/'>Chord Transfer</Link>
        </div>
        <div>
            <Link to='/sheetlist/' >Sheet List</Link>
        </div>
    </>
  )
}

export default HOME;