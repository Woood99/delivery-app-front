import { Image, View } from "react-native";

import Layout from "@/components/layout/Layout";
import Button from "@/components/ui/button/Button";
import Heading from "@/components/ui/heading/Heading";

import { useProfile } from "./useProfile";
import { useAuth } from "@/hooks";

const Profile = () => {
	const { logout } = useAuth();
	const { profile } = useProfile();

	return (
		<Layout>
			<Heading isCenter>Profile</Heading>
			<View className="my-6 items-center justify-center">
				<Image
					source={{ uri: profile?.avatarPath }}
					className="w-40 h-40 rounded-full"
				/>
			</View>

			<Button onPress={logout} variant="primary" className="mt-5">
				Logout
			</Button>
		</Layout>
	);
};

export default Profile;
