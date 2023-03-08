import { motion } from "framer-motion";
import styled from "styled-components";

export const AwardsStyles = styled(motion.div)`
    padding:1rem 1rem;
    min-height: 80vh;
    overflow: hidden;
    .content{
        display: flex;
        margin-top: 3rem;
        align-items: flex-start;
        @media (max-width:600px){
            flex-direction: column; 
        }
    }
    .left{
        flex:50;
        .intro,.skills{
            margin-bottom: 0.5rem;
        }
        .title{
            display: flex;
            align-items:baseline;
            margin-bottom: 1rem;
            .line{
                height:5px;
                width:1.6rem;
                background-color: #34deee;
                margin-right: 1.3rem;
            }
            .sub-head{
                color: black;
                font-size: 1.2rem;
            }
        }
    }
    .right{
        flex:50;
        max-width: 100%;
        img{
            max-width:500px;
        }
    }
    @media (max-width:550px){
        padding: 1rem 2rem 1rem 1.5rem;
    }
`