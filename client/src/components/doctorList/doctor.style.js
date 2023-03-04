import styled from "styled-components"

export const DoctorList = styled.div`
display: grid;
margin: 10px;
grid-template-columns:90% 90%;
position: fixed;
z-index: 1;
top: 6%;

.docList{
    width: 90%;
}

.ListContainer{
    border: 1px solid #eee;
    display: flex;
    cursor: pointer;
    border-radius: 8px;
}

.profileIcon{
    height: 100px;
    margin:15px 15px 5px 15px;
}

   
.docInfoList{
    margin:15px 0 0 10px;
    cursor: pointer;
    width:59%;
    line-height: 25px;
}

label{
    color:gray;
    font-size:16px;
}
hr{
    border-top: 1px solid #eee;
}

.nameTage{
    font-weight:bold;
    cursor: pointer;
    color:black;
    font-size: 20px;
}

.DespContainer{
    display: flex;
    cursor: pointer;
}

.chooseDocList{
    width:90%;
    border: 1px solid #eee;
    border-radius: 8px;
}

.duraionDiv{    
    display: flex;
    justify-content: left;
    div {
      flex: 1;
    }
}

.labelHeading{
    font-weight: bold;
    color:black;
    margin: 10px 0 10px 10px;
}

.imgIcons{
height: 30px;
    margin:5px 5px 5px 15px;
    float:left;
}

.labelSubHeading{
    color:black;
    margin: 10px 0 10px 10px;
}
`