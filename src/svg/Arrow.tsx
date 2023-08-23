import styled from "styled-components";

const Arrow = () => {
  return (
    <Svg>
      <svg>
        <g fill="none" fill-rule="evenodd" stroke="#1B1D23" stroke-width="2">
          <path d="M15 1l9 9-9 9M0 10h24" />
        </g>
      </svg>
    </Svg>
  );
};

export default Arrow;

const attrs = styled.svg.attrs({
  xmlns: "http://www.w3.org/2000/svg",
})``;

const Svg = styled(attrs)`
  width: 26px;
  height: 20px;
  cursor: pointer;
`;
