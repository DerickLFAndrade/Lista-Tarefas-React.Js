
import styled from "styled-components";

type ContainerProps = {
    done: boolean;
}

export const Container = styled.div(({ done }: ContainerProps)=> (
    `
  
    margin-bottom: 10px;
    display: flex;
    justify-content: start;
    align-items: center;
    
    background: #20212C;
    padding: 10px;
    border-radius: 10px;
    text-indent: 5px;

    input {
        width: 20px;
        height: 20px;
    }

    label {
       color: #CCC;
       text-decoration: ${done ? 'line-through' : 'initial'};
    }
    

`
));