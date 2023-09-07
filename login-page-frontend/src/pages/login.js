import { Flex, Heading, Link, Text } from '@chakra-ui/react'
import GoogleButton from '../components/googlebutton'
import BorderBox from '../layouts/borderbox'
import { ExternalLinkIcon } from '@chakra-ui/icons'

export default function Login() {
    
    const BACKEND_URL = process.env.NODE_ENV == 'production' 
                                            ? process.env.REACT_APP_BACKEND_URL
                                            : process.env.REACT_APP_BACKEND_URL_DEV

    return (
        <BorderBox>
            <Heading m={5}>Hello!</Heading>
            <Flex align='flex-start' justify='space-between' direction='column' w="90%">
                <Text m={3}>
                    This is a demonstration of a login page. It uses an API coded in Express.js, as well 
                    as MongoDB, OAuth2.0, NodeJS, React, NGINX, Docker, AWS, and GitHub Actions. 
                    Code for this and other ongoing projects are available on my 
                    <Link color="blue" href="https://github.com/cogsincogs" isExternal> GitHub <ExternalLinkIcon/></Link> page.
                </Text>
                <Text m={3}>
                    Once you have logged in using your Google account, you will be able to see when you last 
                    logged in (if you have logged in before), the number of times you've logged in, and you 
                    can leave yourself some notes which will be available to you on your next login. This is 
                    to demonstrate user authentication and the REST API.
                </Text>
            </Flex>
            <Link className="login" href={BACKEND_URL + '/auth/google'} m={5}><GoogleButton/></Link>
        </BorderBox>  
    )
}