import Link from 'next/link'
import Image from "next/image";
import { Text, useColorModeValue } from '@chakra-ui/react';
import styled from '@emotion/styled';

const LogoBox = styled.span`
font-weight: bold;
font-size: 19px;
display: inline-flex;
align-items: center;
height: 30px;
padding: 10px;
&:hover img {
    transform: rotate(20deg);
}
`

const Logo = () => {
    const resumeImg = `/images/resume.png`

    return (
        <Link href="/" scroll={false}>
        <a>
            <LogoBox>
            <Image src={resumeImg} width={20} height={20} alt="logo" />
            <Text
                color={useColorModeValue('gray.800', 'whiteAlpha.900')}
                fontFamily='Poppins", sans-serif'
                fontWeight="bold"
                ml={3}
            >
                Resume
                Builder
            </Text>
            </LogoBox>
        </a>
        </Link>
    )
}

export default Logo