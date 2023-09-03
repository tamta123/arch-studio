import styled from "styled-components";
const BackDrop: React.FC<{ children: JSX.Element }> = (props) => {
  return <Back>{props.children}</Back>; //ჩილდრენი იმას ნიშნავს, რომ ნებისმიერი რაღაც რაც ბექდროფის შიგნით გვიწერია, მოდის როგორც ჩინდრენი, ეს გვინდა ახლა გამოვიყენოთ ჰედერში
};
export default BackDrop;

const Back = styled.div`
  width: 100vw;
  height: calc(100vh - 105px);
  background-color: rgb(0, 0, 0, 0.5);
  display: flex;
  position: fixed;
  left: 0;
  top: 104px;
  z-index: 2;
`;
