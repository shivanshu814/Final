/* @format */

import {
	ChakraProvider,
	Box,
	Link,
	Grid,
	theme,
	ThemeProvider,
	ColorModeProvider,
	CSSReset,
	Flex,
	Image,
	Heading,
	FormControl,
	FormLabel,
	Stack,
	Input,
	Checkbox,
	Button,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import {
	getAuth,
	GoogleAuthProvider,
	signInWithEmailAndPassword,
	signInWithPopup,
} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
const Login = () => {
	const auth = getAuth();
	const navigate = useNavigate();
	const [authing, setauthing] = useState(false);
	const signInWithGoogle = async () => {
		setauthing(true);
		signInWithPopup(auth, new GoogleAuthProvider())
			.then((response) => {
				console.log(response.user.uid);
				navigate('/');
			})
			.catch((error) => {
				console.log(error);
				setauthing(false);
			});
	};
	return (
		<ThemeProvider theme={theme}>
			<ColorModeProvider>
				<Grid minH='0vh' p={3}>
					<ColorModeSwitcher justifySelf='flex-end' />
				</Grid>
				<CSSReset />
				<LoginArea />
			</ColorModeProvider>
		</ThemeProvider>
	);
};

const LoginArea = () => {
	return (
		<Flex minHeight='100vh' width='full' align='center' justifyContent='center'>
			<Box
				borderWidth={1}
				px={4}
				width='full'
				maxWidth='500px'
				borderRadius={4}
				textAlign='center'
				boxShadow='lg'>
				<Box p={4}>
					<LoginHeader />
					<br />
					<Image
						src='https://www.horsesmouth.in/images/landing/logo-md.png?imwidth=384'
						alt='Horses mouth'
					/>
					<LoginForm />
				</Box>
			</Box>
		</Flex>
	);
};

const LoginHeader = () => {
	return (
		<Box textAlign='center'>
			<Heading>Sign In to Your Account</Heading>
		</Box>
	);
};

const LoginForm = () => {
	function signInWithGoogle(): void {
		throw new Error('Function not implemented.');
	}

	return (
		<ChakraProvider theme={theme}>
			<Box my={8} textAlign='left'>
				<form>
					<FormControl>
						<FormLabel>Email address</FormLabel>
						<Input type='email' placeholder='Enter your email address' />
					</FormControl>

					<FormControl mt={4}>
						<FormLabel>Password</FormLabel>
						<Input type='password' placeholder='Enter your password' />
					</FormControl>
					<Stack isInline justifyContent='space-between' mt={4}>
						<Box>
							<Checkbox>Remember Me</Checkbox>
						</Box>
						<Box>
							<Link>Forgot your password?</Link>
						</Box>
					</Stack>

					<Button width='full' mt={4} onClick={() => signInWithGoogle()}>
						Sign In
					</Button>
				</form>
			</Box>
		</ChakraProvider>
	);
};
export default Login;
