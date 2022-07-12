import styled from '@emotion/styled';

export const Button = styled.button`
    margin-right: 15px;
    border-radius: 50%;
    width: 70px;
    height: 70px;
    border: none;
    background-color: skyblue;
    font-size: 12px;
    text-transform: uppercase;
    cursor: pointer;

    &:hover,
    &:focus{
     box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.12), 0px 1px 1px 0px rgba(0, 0, 0, 0.14),
            0px 2px 2px 0px rgba(0, 0, 0, 0.2);
    }
`;

export const FeedbackWrap = styled.div`
width: fit-content;
margin: 0 auto;
`