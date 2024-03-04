import { useTheme } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';
import { AnswerContainer, HelpAnsContainer, Helpquetion, Helpwrapper, No_asw_container } from '../../style/HelpfulStyle';






function Helpful() {

    const {palette} = useTheme();
  return (
    <Helpwrapper>
        <Helpquetion className='helpful_question_container'>
            Did you find this page helpful
        </Helpquetion>
        <HelpAnsContainer className='answer_container'>
            {/* <div className='answer_yes_container'> */}
                <Link to='/' className='yesAnsNav'>
                    <AnswerContainer bgcolor={palette.grey.main}>
                        Yes, I did
                    </AnswerContainer>
                </Link>
            {/* </div> */}
                <Link to='/' className='yesAnsNav'>
                    <No_asw_container
                    >
                        No, I didn't
                    </No_asw_container>
                </Link>
        </HelpAnsContainer>
    </Helpwrapper>
  )
}

export default Helpful

