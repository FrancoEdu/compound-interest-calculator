import styled from 'styled-components'

export const Container = styled.div`

    display: grid;
    place-items: center;
    height: 100vh;


    .react-modal-form{
        background: var(--white);
        width: 25rem;
        border-radius: 10px;
    }

    .react-modal-image{
        display: flex;
        padding: 1rem;
        align-items: center;
        gap: 0.5rem;
        font-size: 1.5rem;
        span{
            color: var(--background);
        }
        img{
            height: 2.5rem;
        }
    }

    .react-modal-inputs{
        display: grid;
        padding: 1rem;
        gap: 0.5rem;
        
        input{
            height: 3rem;
            font-weight: 400;
            font-size: 1rem;
            width: 100%;
            border-radius: 0.25rem;
            border: 1px solid  var(--green);
            padding: 1rem;
        }
        &::placeholder{
            color: var(--green);
        }
        & + input{
            margin-top: 1rem;
        }
    }
    .react-modal-footer{
        display: grid;
        justify-content: center;
        padding: 1rem;

        button{
            height: 3rem;
            width: 10rem;
            background: #33cc33;
            cursor: pointer;
            border-radius: 10px;
            color: var(--white);
            border: 0;
            font-weight: 700;
            font-size: 1rem;
            transition: 2s;

            &:hover{
                background:var(--green);
            }
        }
    }

    .react-modal-poweredBy-and-links{
        display: grid;
        justify-content: center;
    }
`