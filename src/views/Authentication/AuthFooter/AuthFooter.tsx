import { Box, HStack, Text } from "@chakra-ui/layout";
import { Link } from "react-router-dom";

const AuthFooter = (): JSX.Element => {
	return (
		<Box
			position='fixed'
			right='0'
			// borderWidth='thin'
			bottom='0'
			backgroundColor='gray.100'
			display='flex'
			justifyContent='center'
			minHeight='80px'
			zIndex='1'
			width='full'
			alignItems='center'
		>
			<HStack>
				<Text color='black.100' size='xs'>© Multiwoven Inc. All rights reserved.</Text>{" "}
				<Link to='https://multiwoven.com/terms'>
					<Text color='brand.500' size='xs'>Terms of use</Text>
				</Link>
				<Text size='xs'>•</Text>{" "}
				<Link to='https://multiwoven.com/privacy'>
					<Text color='brand.500' size='xs'>Privacy Policy</Text>
				</Link>
			</HStack>
		</Box>
	);
};

export default AuthFooter;
