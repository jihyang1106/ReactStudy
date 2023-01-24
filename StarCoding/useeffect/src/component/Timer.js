import React, {useEffect, useState} from 'react';

const Timer = (props) => {
    /** 렌더링 될 때 타이머가 돌아감 */
    useEffect(()=>{
        const timer = setInterval(()=>{
            console.log("타이머 돌아가는 중");
        }, 1000);
        
        return () => {
            clearInterval(timer);
            console.log("타이머 종료");
        };
    }, []);
    return(
        <div>
            <span>타이머를 시작합니다. 콘솔을 보세요</span>
        </div>
    )
}

export default Timer;