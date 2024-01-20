import { useEffect, useState } from "react";

const PlayGame = ({onChangeScore}) => {
    const [defaultData] = useState("With 2,500 to 3,000 words, you can understand 90% of everyday English conversations, English newspaper and magazine articles, and English used in the workplace. The remaining 10% you'll be able to learn from context, or ask questions about. However, it's essential to learn the right English vocabulary words, so you don't waste your time trying to memorize a huge collection with very little benefit. The list below seems long, but when you can use all these words with confidence, your English vocabulary will be fully functional.")
    const [dataTyping, setDataTyping] = useState([]);
    const [textTyping, setTextTyping] = useState({
        value: '',
        position: 0

    });
    useEffect(()=> {
        const addWord = (quantity = 20) => {
            const arrayDefaultDB = defaultData.split(' ');
            const dataTypingTest = [];
            for (let index = 0; index < quantity; index++) {
                const position = Math.floor(Math.random() * arrayDefaultDB.length);
                dataTypingTest.push({
                    value: arrayDefaultDB[position],
                    status: null
                })
            }
            setDataTyping(dataTypingTest);
        }
        if(dataTyping.length === 0 || textTyping.position >= dataTyping.length) {
            addWord();
            setTextTyping({...textTyping,position: 0})
        }
    }, [textTyping.position])
   // console.log(textTyping);
   const handleChangeTyping = e => {
    const valueInput = e.target.value;
    if(!valueInput.includes(' ')) {
        setTextTyping({
            ...textTyping,
            value: valueInput
        });
    }else if(textTyping.value !=='') {
        checkResult();
    }
   }
   const checkResult = () => {
    const dataCheck = dataTyping;
    const wordCheck = dataCheck[textTyping.position].value;
    if(textTyping.value === wordCheck) {
        dataCheck[textTyping.position].status = true;
        //console.log('True')
        onChangeScore('right');
    }else{
        dataCheck[textTyping.position].status = false;
        //console.log('false')
        onChangeScore('wrong');
    }
    setDataTyping(dataCheck);
    setTextTyping({
        value: '',
        position: textTyping.position + 1
    })
   }
   console.log(dataTyping);
    return (
       <div className="playing">
        <ul className="list">
            {
                dataTyping.map((word, index) => 
                    <li key={index} className={word.status === true? 'true': word.status===false? 'false':''}>
                        {
                            word.value
                        }
                    </li>
                )
            }
        </ul>
        <div className="inputForm">
            <input type="text" value={textTyping.value} onChange={handleChangeTyping}/>
        </div>
       </div>
    )
}
export default PlayGame;