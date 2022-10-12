import styled from "styled-components";

const Styledbtn = styled.input`
  border: 2px solid black;
  color: ${(props) => (props.variant === "outline" ? "pink" : "pink")};
  /* background-color: aqua; */
  transition: 0.9s all ease-in-out;
  &:hover {
    background-color: black;
  }
`;

export default Styledbtn;
