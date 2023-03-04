import styled from "styled-components";
export const LandingPage = styled.div`
display:grid;
grid-template-columns:50% 50%;
`
export const SearchBarContainer = styled.div`
input {
    width: 50%;
    margin: 10px;
    padding: 14px 0 14px 40px;
    font-size: 16px;
    border: 1px solid #eee;
    color: gray;
    border-radius: 8px;
  }
  input:focus {
    outline: none;
    border-color: #eee;
    box-shadow: 0 0 10px gray;
  }
  .input-container {
    position: relative;
  }
  .input-container input {
    padding-left: 30px;
  }
  .icon {
    position: absolute;
    top: 45%;
    color: #2C83C0;
    transform: translateY(-50%);
    margin-left: 20px;
  }
`

export const FilterContainer = styled.div`
    margin: 10px;
 
  .icon {
    position: absolute;
    top: 45%;
    color: #2C83C0;
    transform: translateY(-50%);
    margin-left: 20px;
  }
    .input-container {
    position: relative;
  }
  .input-container input {
    padding-left: 30px;
  }
  .filterBtns {
    width: 30%;
    margin: 10px;
    background:transparent;
    cursor:pointer;
    padding: 14px 0 14px 40px;
    font-size: 16px;
    border: 1px solid #eee;
    color: gray;
    border-radius: 8px;
  }
   .crossIcons {
    float: right;
    font-size: 30px;
    border: none;
    cursor: pointer;
    background-color: transparent;
    color: #2C83C0;
  }
  hr {
    border: 1px solid #eee;
  }
  label {
    font-size: 22px;
    border: none;
    color: #2C83C0;
  }  
  .sortLabel {
    font-size: 18px;
    cursor: pointer;
    padding: 6px;
    color: #9da8b3;
  }
  input {
    width: 30%;
    margin: 10px;
    padding: 14px 0 14px 40px;
    font-size: 16px;
    border: 1px solid #eee;
    color: gray;
    border-radius: 8px;
  }
  input:focus {
    outline: none;
    border-color: #eee;
    box-shadow: 0 0 10px gray;
  }
  .modalSection {
    width: 30%;
    background-color: white;
    padding: 8px;
    border: 1px solid #eee;
    border-radius: 8px;
    box-shadow: 0 0px 10px #eee;
    position: relative;
    z-index: 2;
    margin: 10px;
  }
`