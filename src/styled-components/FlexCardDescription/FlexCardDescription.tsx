import styled from "styled-components";

interface StyledCardProps {
    isHover?: boolean
}

const FlexCardDescription = styled.div<StyledCardProps>`
    align-self: flex-end;
    font-weight: bold;
    text-transform: capitalize;
    transition: 0.25s;
    transition-timing-function: ease-ease-in-out;
    padding-bottom: ${props => (props.isHover ? "90px" : "24px")};
    position: absolute;
`

export default FlexCardDescription;
