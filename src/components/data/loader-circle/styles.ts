import styled from "styled-components"

interface LoaderCircleStyleProps {
    containerHeight?: number;
}

export const LoaderCircle = styled.div<LoaderCircleStyleProps>`
min-height: ${props => props.containerHeight ? props.containerHeight +"px" : "unset"};
display: flex;
align-items: center;
justify-content: center;



`