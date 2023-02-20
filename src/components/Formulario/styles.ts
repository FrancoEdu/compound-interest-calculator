import styled from 'styled-components'

export const Container = styled.div`

    display: grid;
    place-items: center;
    height: 100vh;


    .react-modal-form{
        background: var(--white);
        width: 30rem;
        border-radius: 10px;
        box-shadow: rgba(0, 0, 0, 0.35) 0rem 0.25rem 1.2rem;
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
            width: 15rem;
            background: #33cc33;
            cursor: pointer;
            border-radius: 10px;
            color: var(--white);
            border: 0;
            font-weight: 700;
            font-size: 1rem;
            transition: 2s;
            box-shadow: rgba(0, 0, 0, 0.35) 0rem 0.25rem 1.2rem;

            &:hover{
                background:var(--green);
            }
        }
    }

    .react-modal-poweredBy-and-links{
        display: grid;
        justify-content: center;
    }

    .box-of-values{
        display: flex;
        justify-content: space-between;
        padding: 1rem;

        div{
            box-shadow: rgba(0, 0, 0, 0.35) 0rem 0.25rem 1.2rem;
            background-color: blue;
            display: grid;
            padding: 0.5rem;
            background-color: #f2f2f2;
            border-radius: 5px;
            width: 8.5rem;
        }
    }
`