import { Input } from '@/components/Input/input';
import { Text } from '@/components/Text/text';

export default function SignUp() {
    return (
        <main className="flex justify-center bg-white h-screen">
            <div className="flex flex-col rounded bg-cerulean my-24 md:w-2/5">
                <Text variant="extremelyHuge" align="center" textColour="white">
                    Sign Up
                </Text>
                <div>
                    <Input
                        variant="outlined"
                        borderColour="aqua"
                        bgColour="cerulean"
                        labelValue="outline"
                        id="outline"
                        textColour="white"
                        placeholder=" "
                    />
                    <Input
                        variant="filled"
                        labelValue="fill"
                        id="fill"
                        placeholder=" "
                        borderColour="aqua"
                        bgColour="darkCerulean"
                        textColour="white"
                    />
                    <Input
                        variant="floating"
                        labelValue="float"
                        id="float"
                        placeholder=" "
                        borderColour="aqua"
                        bgColour="cerulean"
                        textColour="white"
                    />
                </div>
            </div>
        </main>
    );
}
