import { Input } from '@/components/Input/input';
import { Text } from '@/components/Text/text';

export default function SignUp() {
    return (
        <main className="flex justify-center bg-white">
            <div>
                <div className="flex flex-col justify-center">
                    <Text
                        variant="extremelyHuge"
                        align="center"
                        textColour="black"
                    >
                        Sign Up
                    </Text>
                    <Input
                        variant="outlined"
                        labelValue="outline"
                        id="outline"
                        placeholder=" "
                    />
                    <Input
                        variant="filled"
                        labelValue="fill"
                        id="fill"
                        placeholder=" "
                    />
                    <Input
                        variant="floating"
                        labelValue="float"
                        id="float"
                        placeholder=" "
                    />
                </div>
            </div>
        </main>
    );
}
