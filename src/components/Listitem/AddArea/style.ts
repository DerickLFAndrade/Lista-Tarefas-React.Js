import styled from "styled-components";

export const Container = styled.div `
display: flex;
align-items: center;
border: none;
background: none;
padding: 10px;
margin: 20px 0;

input {
    width: 400px;
    height: 30px;
    color: #CCC;
    background: none;
    border: none;
    border-bottom: 1px solid #CCC;
    border-radius: 5px;
    outline: 0;
    text-indent: 10px;
    flex: 1;
    box-shadow: 1px 1px 1px white;
}

.image {
    margin-left: -25px
}
`;