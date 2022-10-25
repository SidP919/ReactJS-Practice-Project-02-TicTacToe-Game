import Icon from './components/Icon';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import {Card, CardBody, Container, Button, Col, Row} from "reactstrap";
import { useState } from 'react';

const itemsArr = new Array(9).fill("empty");

const App = () => {

  const [isCross, setIsCross] = useState(false);
  const [winMessage, setWinMessage] = useState("");

  const reloadGame = () => {
    setIsCross(false);
    setWinMessage("");
    itemsArr.fill("empty",0,9);
  }

  const checkIsWinner = () => {
    if(
      itemsArr[0] === itemsArr[1] &&
      itemsArr[0] === itemsArr[2] &&
      itemsArr[0] !== "empty"
      ){
        setWinMessage(`${itemsArr[0]} Won.`);
      }
    else if(
      itemsArr[3] === itemsArr[4] &&
      itemsArr[3] === itemsArr[5] &&
      itemsArr[3] !== "empty"
      ){
        setWinMessage(`${itemsArr[3]} Won.`);
      }
    else if(
      itemsArr[6] === itemsArr[7] &&
      itemsArr[6] === itemsArr[8] &&
      itemsArr[6] !== "empty"
      ){
        setWinMessage(`${itemsArr[6]} Won.`);
      }
    else if(
      itemsArr[0] === itemsArr[3] &&
      itemsArr[0] === itemsArr[6] &&
      itemsArr[0] !== "empty"
      ){
        setWinMessage(`${itemsArr[0]} Won.`);
      }
    else if(
      itemsArr[1] === itemsArr[4] &&
      itemsArr[1] === itemsArr[7] &&
      itemsArr[1] !== "empty"
      ){
        setWinMessage(`${itemsArr[1]} Won.`);
      }
    else if(
      itemsArr[2] === itemsArr[5] &&
      itemsArr[2] === itemsArr[8] &&
      itemsArr[2] !== "empty"
      ){
        setWinMessage(`${itemsArr[2]} Won.`);
      }
    else if(
      itemsArr[0] === itemsArr[4] &&
      itemsArr[0] === itemsArr[8] &&
      itemsArr[0] !== "empty"
      ){
        setWinMessage(`${itemsArr[0]} Won.`);
      }
    else if(
      itemsArr[2] === itemsArr[4] &&
      itemsArr[2] === itemsArr[6] &&
      itemsArr[2] !== "empty"
      ){
        setWinMessage(`${itemsArr[2]} Won.`);
      }
    else{
      if(!itemsArr.includes("empty"))
        setWinMessage(`It was a draw`);
    }
  }

  const changeItem = itemNumber => {
    if(winMessage){
      if(!itemsArr.includes("empty") && !winMessage.includes("Circle") && !winMessage.includes("Cross"))
        return toast("It was a Draw, please reload.", {type:"warning"});
      return toast(winMessage,{type:"success"});
    }

    if(itemsArr[itemNumber]==="empty"){
      itemsArr[itemNumber] = isCross? "Circle":"Cross";
      setIsCross(!isCross);
    }else{
      return toast("This Box is already filled", {type:"error"});
    }

    checkIsWinner();
  };

  return (
    <Container className='p-5'>
      <ToastContainer position='bottom-center'/>
      <Row lg={3} className="flex flex-column">
        {winMessage?(
          <div className='my-2 w-full mx-auto'>
            <h1 className='text-success text-uppercase text-center'>
              {winMessage}
            </h1>
            <Button color='success' block onClick={reloadGame}>Reload The Game</Button>
          </div>
        ):(
          <div className='my-2 w-full mx-auto'>
            <h1 className='text-danger text-uppercase text-center'>
              {isCross? "Now it's Circle's turn":"Now it's Cross's turn"}
            </h1>
          </div>
        )}
        <div className='grid w-full mx-auto'>
          {itemsArr.map((item,index)=>{
            return(
              <Card color='warning' onClick={()=>changeItem(index)}>
                <CardBody className='box'>
                  <Icon name={item}/>
                </CardBody>
              </Card>
            );
          })}
        </div>
      </Row>
    </Container>
  );
}

export default App;
